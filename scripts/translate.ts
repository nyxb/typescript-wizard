import fs from 'node:fs'
import tsErrorMessages from '../packages/engine/src/tsErrorMessages.json'
import { logger } from './utils/logger'

const errorCode = process.argv[2]

function getTemplate(original: string) {
   return `---
original: "${original}"
excerpt: "Simplified version of the error message"
---

More details, reproducible examples for the error and how the error should be fixed.

`.trim()
}

if (!errorCode) {
   logger.error('\nYou haven\'t provided an error code for your translation!')
   logger.info('Example:')
   logger.info('  yarn translate 1006')
   process.exit(1)
}
else {
   const errorPath = `packages/engine/errors/${errorCode}.md`

   if (fs.existsSync(errorPath)) {
      logger.error(`\nTranslation for error code ${errorCode} already exists!`)
   }
   else {
      const originalError = Object.keys(tsErrorMessages).find((key) => {
         return String(tsErrorMessages[key].code) === errorCode
      })
      // @ts-expect-error is fine
      fs.writeFileSync(errorPath, getTemplate(originalError))

      logger.success('\nTemplate has been written Successfuly!')
      logger.info(`Check: ${errorPath}`)
   }
}
