import * as path from 'node:path'
import * as fs from 'node:fs'
import fm from 'front-matter'
import consolji from 'consolji'

export function getImprovedMessageFromMarkdown(dir: string,
   code: number,
   items: (string | number)[]) {
   const file = path.join(dir, `${code}.md`)

   try {
      const fileResult = fs.readFileSync(file, 'utf8')

      const parseResult = fm<{ excerpt: string }>(fileResult)

      const body = parseResult.body
      const excerpt = parseResult.attributes.excerpt

      return fillBodyAndExcerptWithItems(body, excerpt, items)
   }
   catch (e) {
      consolji.log(e)
      return null
   }
}

export function fillBodyAndExcerptWithItems(body: string,
   excerpt: string,
   items: (string | number)[]) {
   items.forEach((item, index) => {
      const bodyRegex = new RegExp(`\\\{${index}\\\}`, 'g')
      body = body.replace(bodyRegex, item.toString())
      const excerptRegex = new RegExp(`'?\\\{${index}\\\}'?`, 'g')
      excerpt = excerpt.replace(excerptRegex, `\`${item}\``)
   })

   return {
      body,
      excerpt,
   }
}
