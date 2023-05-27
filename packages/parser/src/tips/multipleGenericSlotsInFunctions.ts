import { z } from 'zod'
import { createTip } from '../createTip'
import { SourceLocationSchema, safeParse } from '../utils'

const schema = z.object({
   loc: SourceLocationSchema,
   typeParameters: z.object({
      type: z.literal('TSTypeParameterDeclaration'),
      params: z
         .array(
            z.object({
               type: z.literal('TSTypeParameter'),
            }),
         )
         .min(2),
   }),
})

export const multipleGenericSlotsInFunctions = createTip(
   'multiple-generic-slots-in-functions',
   (push) => {
      return {
         ArrowFunctionExpression: (path) => {
            safeParse(() => {
               const { loc } = schema.parse(path.node)
               push({
                  type: 'multiple-generic-slots-in-functions',
                  loc,
               })
            })
         },
         FunctionDeclaration: (path) => {
            safeParse(() => {
               const { loc } = schema.parse(path.node)
               push({
                  type: 'multiple-generic-slots-in-functions',
                  loc,
               })
            })
         },
      }
   },
)
