import { z } from 'zod'
import { createTip } from '../createTip'
import { SourceLocationSchema, safeParse } from '../utils'

const Schema = z.object({
   id: z.object({
      name: z.literal('global'),
      loc: SourceLocationSchema,
   }),
   declare: z.literal(true),
   global: z.literal(true),
})

export const declareGlobal = createTip('declare-global', (push) => {
   return {
      TSModuleDeclaration(path) {
         safeParse(() => {
            const node = Schema.parse(path.node)
            push({
               type: 'declare-global',
               loc: node.id.loc,
            })
         })
      },
   }
})
