import { z } from 'zod'
import { createTip } from '../createTip'
import { SourceLocationSchema, safeParse } from '../utils'

const Schema = z.object({
   loc: SourceLocationSchema,
})

export const tupleType = createTip('tuple-type', (push) => {
   return {
      TSTupleType(path) {
         safeParse(() => {
            const node = Schema.parse(path.node)
            push({
               type: 'tuple-type',
               loc: node.loc,
            })
         })
      },
   }
})
