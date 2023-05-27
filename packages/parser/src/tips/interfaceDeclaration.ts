import { z } from 'zod'
import { createTip } from '../createTip'
import { IdentifierSchema, SourceLocationSchema, safeParse } from '../utils'

const InterfaceSchema = z.object({
   loc: SourceLocationSchema,
   id: IdentifierSchema,
})

export const interfaceDeclaration = createTip(
   'interface-declaration',
   (push) => {
      return {
         TSInterfaceDeclaration(path) {
            safeParse(() => {
               const node = InterfaceSchema.parse(path.node)
               push({
                  type: 'interface-declaration',
                  loc: node.id.loc,
               })
            })
         },
      }
   },
)
