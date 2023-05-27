import { z } from 'zod'
import { createTip } from '../createTip'
import { SourceLocationSchema, safeParse } from '../utils'

const Schema = z.object({
   loc: SourceLocationSchema,
})

export const mappedType = createTip('mapped-type', (push) => {
   return {
      TSMappedType(path) {
         safeParse(() => {
            const node = Schema.parse(path.node)
            push({
               type: 'mapped-type',
               loc: node.loc,
            })
         })
      },
   }
})
