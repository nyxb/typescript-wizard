import * as fs from 'node:fs/promises'
import * as path from 'node:path'
import fm from 'front-matter'

async function bundleErrors(language: string) {
   const dir = path.resolve(__dirname, `../../../packages/engine/errors/${language}`)

   const allFiles = (await fs.readdir(dir)).map(file => ({
      fullPath: path.resolve(dir, file),
      code: path.parse(file).name,
   }))

   const json: Record<string, any> = {}

   for (const file of allFiles) {
      const fileResult = await fs.readFile(file.fullPath, 'utf8')
      try {
         const parseResult = fm<{ excerpt: string }>(fileResult)

         const body = parseResult.body
         const excerpt = parseResult.attributes.excerpt

         json[file.code] = {
            body,
            excerpt,
            code: file.code,
         }
      }
      catch (e: any) {
         throw new Error(`Error at ${file.code}.md: ${e.message}`)
      }
   }

   await fs.writeFile(
      path.resolve(__dirname, `./bundleErrors_${language}.json`),
      JSON.stringify(json, null, 2),
   )
}

// Erstelle bundleErrors.json für "en" (Englisch)
bundleErrors('en').catch((e) => {
   console.error(e)
   process.exit(1)
})

// Erstelle bundleErrors.json für "de" (Deutsch)
bundleErrors('de').catch((e) => {
   console.error(e)
   process.exit(1)
})
