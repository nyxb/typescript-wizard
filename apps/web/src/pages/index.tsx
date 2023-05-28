/* eslint-disable no-console */

import * as path from 'node:path'
import type { ErrorInfo } from '@nyxb/error-translation-engine'
import {
   getImprovedMessageFromMarkdown,
   parseErrors,
} from '@nyxb/error-translation-engine'
import {
   compressToEncodedURIComponent,
   decompressFromEncodedURIComponent,
} from 'lz-string'
import type { GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { z } from 'zod'
import { useTranslation } from 'react-i18next'
import ReactFlagsSelect from 'react-flags-select'
import i18n from '../i18n'

export default function Web(props: { error: string; errors: ErrorInfo[] }) {
   const router = useRouter()
   const { t } = useTranslation()

   const [selectedLanguage, setSelectedLanguage] = React.useState(i18n.language === 'de' ? 'DE' : 'US')
   const handleLanguageChange = (countryCode: string) => {
      let language
      switch (countryCode) {
               case 'US':
                  language = 'en'
                  break
               case 'DE':
                  language = 'de'
                  break
               default:
                  language = 'en'
      }
      i18n.changeLanguage(language)
      setSelectedLanguage(countryCode)
      router.push({
         pathname: router.pathname,
         query: { ...router.query, lang: language },
      })
   }

   console.log(i18n.languages)

   const firstExcerpt = props.errors?.[0]?.improvedError?.excerpt
   const firstErrorCode = props.errors?.[0]?.code

   const title = `${t('title')}${firstErrorCode ? ` | Code #${firstErrorCode}` : ''}`

   return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name='description'
          content={
            firstExcerpt || t('description') || ''
          }
        />

        <meta property='og:type' content='website' />
        <meta
          property='og:url'
           content={'https://typescript-wizard.vercel.app'}
        />
        <meta property='og:title' content={title} />
        <meta
          property='og:description'
          content={
            firstExcerpt || t('description') || ''
          }
        />
        <meta
          property='og:image'
           content={'https://typescript-wizard.vercel.app/og-image.png'}
        />

        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:image'
           content={'https://typescript-wizard.vercel.app/og-image.png'}
        />
        <meta name='twitter:title' content={title} />
        <meta
          name='twitter:description'
          content={
            firstExcerpt || t('description') || ''
          }
        />
        <meta property='twitter:domain' content='vercel.app' />
        <meta
          property='twitter:url'
           content='https://typescript-wizard.vercel.app'
        />
      </Head>
      <div className='px-6 py-6 pt-0 pb-20'>
        <div className='py-20'>
           <h2 className='mb-8 text-xl font-medium tracking-tight text-center text-nice-yellow'>
             {t('headerSubtitle')}
          </h2>
           <h1 className='text-6xl font-bold tracking-tight text-center gradient-text'>
             {t('headerTitle')}
          </h1>
           <div className='flex justify-center mt-4'>
             <ReactFlagsSelect
               countries={['US', 'DE']}
               customLabels={{ US: 'English', DE: 'Deutsch' }}
               selected={selectedLanguage}
               onSelect={handleLanguageChange}
               className='react-flags-select'
             />
           </div>

          <form
            className='flex flex-col items-center mt-12'
             onSubmit={(e) => {
                e.preventDefault()

                const formData = new FormData(e.currentTarget)
                const error = formData.get('error') as string

                router.push({
                   pathname: router.pathname,
                   query: {
                      ...router.query,
                      error: compressToEncodedURIComponent(error),
                      lang: i18n.language, // Add this line
                   },
                })
             }}
          >
            <textarea
               className='block w-full h-32 max-w-lg px-4 py-3 mb-6 font-mono rounded resize-y bg-indigo-50 focus:outline-none focus:ring-4 ring-nice-yellow'
              name='error'
              autoFocus
              defaultValue={props.error}
            ></textarea>
            <div>
              <button className='px-6 py-2 font-semibold tracking-tight text-black rounded from-nice-purple to-nice-green bg-gradient-to-r focus:outline-none focus:ring-4 ring-yellow-400'>
                 {t('submit')}
              </button>
            </div>
          </form>
        </div>

        <div className='max-w-2xl mx-auto space-y-16 text-xl leading-relaxed text-gray-800'>
          {props.errors?.map((error, index, array) => {
             return (
               <div key={index}>
                <div className='prose prose-code:before:hidden prose-code:after:hidden'>
                  {/* <span className="inline-block px-2 py-1 mb-2 text-xs text-indigo-900 bg-indigo-100 rounded">
                  #{error.code}
                </span> */}
                   <h1 className='text-nice-yellow'>{t('error')} #{array.length - index}</h1>
                  <div className='relative p-4 py-3 font-mono text-sm leading-relaxed text-gray-100 bg-gray-800 rounded'>
                    {error.parseInfo.rawError}
                  </div>
                  {error.improvedError && (
                    <>
                      <h2 className='text-nice-yellow'>{t('translation')}</h2>
                      <div className='p-4 py-3 font-light text-gray-100 bg-gray-800 rounded prose-code:text-white prose-p:m-0'>
                        <ReactMarkdown>
                          {error.improvedError.excerpt}
                        </ReactMarkdown>
                      </div>
                       <h2 className='text-nice-yellow'>{t('explanation')}</h2>
                      <ReactMarkdown>{error.improvedError?.body}</ReactMarkdown>
                    </>
                  )}
                  {!error.improvedError && (
                    <>
                      <h2 className='text-nice-yellow'>{t('translation')}</h2>
                      <p>
                         {t('notFind')}{' '}
                        <span className='font-semibold'>#{error.code}</span>:
                      </p>
                            <code className='text-nice-red'>
                               &quot;{error.error}&quot;
                            </code>
                      <p>
                        <a className='text-nice-green'
                           href='https://github.com/nyxblabs/typescript-wizard/blob/main/CONTRIBUTING.md'
                          target='_blank'
                          rel='noreferrer'
                        >
                           {t('add')}
                        </a>
                      </p>
                    </>
                  )}
                </div>
              </div>
             )
          })}
        </div>
      </div>
    </>
   )
}

const Query = z.object({
   error: z.string().optional(),
   lang: z.string().optional(),
})

export function getServerSideProps(ctx: GetServerSidePropsContext) {
   const query = Query.parse(ctx.query)
   const language = query.lang || ctx.locale || 'en'
   if (query.error) {
      const decodedError = decompressFromEncodedURIComponent(query.error)!
      console.log('language:', language)
      console.log(query)
      return {
         props: {
            errors: parseErrors(decodedError)
               .reverse()
               .map((error): ErrorInfo => {
                  const fullPath = path.resolve(
                     process.cwd(),
                   `../../packages/engine/errors/${language}`,
                   `${error.code}.md`,
                  )
                  console.log('fullPath', fullPath)

                  return {
                     ...error,
                     improvedError: getImprovedMessageFromMarkdown(
                        path.resolve(process.cwd(), `../../packages/engine/errors/${language}`),
                        error.code,
                        error.parseInfo.items,
                     ),
                  }
               }),
            error: decodedError,
         },
      }
   }
   return {
      props: {
         errors: [],
         error: i18n.t('errorText'),
      },
   }
}
