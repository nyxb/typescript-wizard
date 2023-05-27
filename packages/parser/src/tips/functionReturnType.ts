import { z } from 'zod'
import { createTip } from '../createTip'
import { SourceLocationSchema, safeParse } from '../utils'

const ReturnTypeAnnotationSchema = z.object({
   returnType: z.object({
      loc: SourceLocationSchema,
      typeAnnotation: z.object({
         loc: SourceLocationSchema,
      }),
   }),
})

export const functionReturnType = createTip('function-return-type', (push) => {
   return {
      ArrowFunctionExpression(path) {
         safeParse(() => {
            const node = ReturnTypeAnnotationSchema.parse(path.node)
            push({
               type: 'function-return-type',
               loc: node.returnType.typeAnnotation.loc,
            })
         })
      },
      FunctionDeclaration(path) {
         safeParse(() => {
            const node = ReturnTypeAnnotationSchema.parse(path.node)
            push({
               type: 'function-return-type',
               loc: node.returnType.typeAnnotation.loc,
            })
         })
      },
      FunctionExpression(path) {
         safeParse(() => {
            const node = ReturnTypeAnnotationSchema.parse(path.node)
            push({
               type: 'function-return-type',
               loc: node.returnType.typeAnnotation.loc,
            })
         })
      },
   }
})
