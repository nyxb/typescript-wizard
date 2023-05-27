import consolji from 'consolji'

const LCERROR = '\x1B[31m%s\x1B[0m' // red
const LCWARN = '\x1B[33m%s\x1B[0m' // yellow
const LCINFO = '\x1B[36m%s\x1B[0m' // cyan
const LCSUCCESS = '\x1B[32m%s\x1B[0m' // green

export const logger = class {
   static error(message: string, ...optionalParams: any[]) {
      consolji.error(LCERROR, message, ...optionalParams)
   }

   static warn(message: string, ...optionalParams: any[]) {
      consolji.warn(LCWARN, message, ...optionalParams)
   }

   static info(message: string, ...optionalParams: any[]) {
      consolji.info(LCINFO, message, ...optionalParams)
   }

   static success(message: string, ...optionalParams: any[]) {
      consolji.info(LCSUCCESS, message, ...optionalParams)
   }
}
