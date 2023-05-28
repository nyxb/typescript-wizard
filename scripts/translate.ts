import fs from 'node:fs'
import tsErrorMessages from '../packages/engine/src/tsErrorMessages.json'
import { logger } from './utils/logger'

const errorCode = process.argv[2]
const language = process.argv[3]

function getTemplate(original: string, language: string) {
   let template = ''
   if (language === 'en') {
      template = `---
original: "${original}"
excerpt: "Simplified version of the error message in English"
---

More details, reproducible examples for the error and how the error should be fixed in English.

`.trim()
   }
   else if (language === 'de') {
      template = `---
original: "${original}"
excerpt: "Vereinfachte Version der Fehlermeldung auf Deutsch"
---

Weitere Details, reproduzierbare Beispiele für den Fehler und wie der Fehler behoben werden sollte auf Deutsch.

`.trim()
   }
   return template
}

if (!errorCode || !language) {
   logger.error('\nYou haven\'t provided an error code or language for your translation!')
   logger.info('Example:')
   logger.info('  pnpm translate 1006 en or pnpm translate 1006 de')
   process.exit(1)
}
else {
   const errorPath = `packages/engine/errors/${language}/${errorCode}.md`

   if (fs.existsSync(errorPath)) {
      logger.error(`\nTranslation for error code ${errorCode} already exists in ${language}!`)
   }
   else {
      const originalError = Object.keys(tsErrorMessages).find((key) => {
         return String(tsErrorMessages[key].code) === errorCode
      })
      // @ts-expect-error is fine
      fs.writeFileSync(errorPath, getTemplate(originalError, language))

      logger.success('\nTemplate has been written successfully!')
      logger.info(`Check: ${errorPath}`)
   }
}
