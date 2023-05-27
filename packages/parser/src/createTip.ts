import type { TraverseOptions } from '@babel/traverse'
import type { SourceLocation } from '@babel/types'
import type { z } from 'zod'

export interface TipFromType<TTipType extends string> {
   type: TTipType
   loc: SourceLocation
}

export function createTip<TTipType extends string>(type: TTipType,
   createOpts: (push: (tip: TipFromType<TTipType>) => void) => TraverseOptions) {
   return {
      type,
      createOpts,
   }
}

export function createInlineTip<
  TTipType extends string, ZodSchema extends z.ZodType,
>(type: TTipType,
   schema: ZodSchema,
   createOpts: (params: {
      push: (loc: SourceLocation) => void
      parse: (val: unknown) => z.infer<ZodSchema>
   }) => TraverseOptions) {
   return {
      type,
      createOpts: (push: (tip: TipFromType<TTipType>) => void) => {
         return createOpts({
            push: (loc) => {
               push({ type, loc })
            },
            parse: schema.parse,
         })
      },
   }
}
