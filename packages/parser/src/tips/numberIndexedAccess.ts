import { z } from 'zod'
import { createTip } from '../createTip'
import { SourceLocationSchema, safeParse } from '../utils'

const Schema = z.object({
   indexType: z.object({
      type: z.literal('TSNumberKeyword'),
      loc: SourceLocationSchema,
   }),
})

export const numberIndexedAccess = createTip(
   'number-indexed-access',
   (push) => {
      return {
         TSIndexedAccessType(path) {
            safeParse(() => {
               const node = Schema.parse(path.node)
               push({
                  type: 'number-indexed-access',
                  loc: node.indexType.loc,
               })
            })
         },
      }
   },
)
