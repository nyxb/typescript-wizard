import { z } from 'zod'
import { createTip } from '../createTip'
import { IdentifierSchema, SourceLocationSchema, safeParse } from '../utils'

const Schema = z.object({
   loc: SourceLocationSchema,
   id: IdentifierSchema,
})

export const typeAliasDeclaration = createTip(
   'type-alias-declaration',
   (push) => {
      return {
         TSTypeAliasDeclaration(path) {
            safeParse(() => {
               const node = Schema.parse(path.node)
               push({
                  type: 'type-alias-declaration',
                  loc: node.id.loc,
               })
            })
         },
      }
   },
)
