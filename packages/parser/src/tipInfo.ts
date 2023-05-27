import type { Tip } from './tips'

type MaybeArray<T> = T | T[]
type Difficulty = 'easy' | 'not-easy'

interface LanguageObject {
   [lang: string]: string
}

export interface TipInfoItem<Type extends Tip['type'] = Tip['type']> {
   name: LanguageObject
   message: LanguageObject
   deps?: MaybeArray<Exclude<Tip['type'], Type>>
   link: string
   difficulty: Difficulty
}

export type TipInfo = {
   [Type in Tip['type']]?: TipInfoItem<Type>;
}

export const tipInfo: TipInfo = {
   'bigint': {
      name: {
         en: 'BigInt type',
         de: 'BigInt-Typ',
      },
      message: {
         en: 'The bigint type lets you represent integers that are too large to be represented by \'number\'.',
         de: 'Der BigInt-Typ ermöglicht die Darstellung von Ganzzahlen, die zu groß sind, um durch \'number\' dargestellt zu werden.',
      },
      link: 'https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-2.html#bigint',
      difficulty: 'not-easy',
   },
   'as-const': {
      name: {
         en: 'const assertions',
         de: 'Konstanten-Assertions',
      },
      message: {
         en: 'const assertions let you mark an expression as deeply immutable. This means it gets narrowed to its narrowest possible type.',
         de: 'Konstanten-Assertions ermöglichen es Ihnen, einen Ausdruck als tiefgreifend unveränderlich zu markieren. Dadurch wird er auf seinen engstmöglichen Typ eingeschränkt.',
      },
      difficulty: 'not-easy',
      link: 'https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions',
   },
   'as-const-on-object': {
      name: {
         en: 'const assertions on objects',
         de: 'Konstanten-Assertions auf Objekten',
      },
      message: {
         en: 'const assertions on objects let you mark an object as deeply immutable. This means its attributes get narrowed to their literal types.',
         de: 'Konstanten-Assertions auf Objekten ermöglichen es Ihnen, ein Objekt als tiefgreifend unveränderlich zu markieren. Dadurch werden seine Attribute auf ihre Literaltypen eingeschränkt.',
      },
      difficulty: 'not-easy',
      link: 'https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions',
      deps: ['as-const'],
   },
   'infer': {
      name: {
         en: 'Infer keyword',
         de: 'Infer-Schlüsselwort',
      },
      message: {
         en: 'The infer keyword lets you infer the type of a generic type parameter inside a conditional type.',
         de: 'Das Infer-Schlüsselwort ermöglicht es Ihnen, den Typ eines generischen Typparameters innerhalb eines bedingten Typs abzuleiten.',
      },
      difficulty: 'not-easy',
      link: 'https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types',
      deps: ['conditional-type'],
   },
   'basic-types': {
      name: {
         en: 'Basic Types',
         de: 'Grundlegende Typen',
      },
      message: {
         en: 'string, number and boolean are all basic types.',
         de: 'string, number und boolean sind alle grundlegende Typen.',
      },
      difficulty: 'easy',
      link: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#the-primitives-string-number-and-boolean',
   },
   'awaited-utility-type': {
      deps: 'passing-generics-to-types',
      name: {
         en: 'Awaited utility type',
         de: 'Awaited-Hilfstyp',
      },
      message: {
         en: 'The Awaited utility type lets you get the type of a Promise\'s resolved value.',
         de: 'Der Awaited-Hilfstyp ermöglicht es Ihnen, den Typ des aufgelösten Werts eines Promises zu erhalten.',
      },
      difficulty: 'not-easy',
      link: 'https://www.typescriptlang.org/docs/handbook/utility-types.html#awaitedtype',
   },
   'partial-utility-type': {
      deps: 'passing-generics-to-types',
      name: {
         en: 'Partial utility type',
         de: 'Partial-Hilfstyp',
      },
      message: {
         en: 'The Partial utility type lets you make all the properties of an object optional.',
         de: 'Der Partial-Hilfstyp ermöglicht es Ihnen, alle Eigenschaften eines Objekts optional zu machen.',
      },
      difficulty: 'not-easy',
      link: 'https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype',
   },
   'required-utility-type': {
      deps: 'passing-generics-to-types',
      name: {
         en: 'Required utility type',
         de: 'Required-Hilfstyp',
      },
      message: {
         en: 'The Required utility type lets you make all the properties of an object required.',
         de: 'Der Required-Hilfstyp ermöglicht es Ihnen, alle Eigenschaften eines Objekts erforderlich zu machen.',
      },
      difficulty: 'not-easy',
      link: 'https://www.typescriptlang.org/docs/handbook/utility-types.html#requiredtype',
   },
   'readonly-utility-type': {
      deps: 'passing-generics-to-types',
      name: {
         en: 'Readonly utility type',
         de: 'Readonly-Hilfstyp',
      },
      message: {
         en: 'The Readonly utility type lets you make all the properties of an object readonly.',
         de: 'Der Readonly-Hilfstyp ermöglicht es Ihnen, alle Eigenschaften eines Objekts schreibgeschützt zu machen.',
      },
      difficulty: 'not-easy',
      link: 'https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype',
   },
   'omit-utility-type': {
      deps: 'passing-generics-to-types',
      name: {
         en: 'Omit utility type',
         de: 'Omit-Hilfstyp',
      },
      message: {
         en: 'The Omit utility type lets you create an object type by omitting a set of properties from another type.',
         de: 'Der Omit-Hilfstyp ermöglicht es Ihnen, einen Objekttyp zu erstellen, indem Sie eine Reihe von Eigenschaften aus einem anderen Typ weglassen.',
      },
      difficulty: 'not-easy',
      link: 'https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys',
   },
   'exclude-utility-type': {
      deps: 'passing-generics-to-types',
      name: {
         en: 'Exclude utility type',
         de: 'Exclude-Hilfstyp',
      },
      message: {
         en: 'The Exclude utility type lets you exclude some members of a union type.',
         de: 'Der Exclude-Hilfstyp ermöglicht es Ihnen, einige Mitglieder eines Union-Typs auszuschließen.',
      },
      difficulty: 'not-easy',
      link: 'https://www.typescriptlang.org/docs/handbook/utility-types.html#excludeuniontype-excludedmembers',
   },
   'extract-utility-type': {
      deps: 'passing-generics-to-types',
      name: {
         en: 'Extract utility type',
         de: 'Extract-Hilfstyp',
      },
      message: {
         en: 'The Extract utility type lets you extract some members of a union type.',
         de: 'Der Extract-Hilfstyp ermöglicht es Ihnen, einige Mitglieder eines Union-Typs zu extrahieren.',
      },
      difficulty: 'not-easy',
      link: 'https://www.typescriptlang.org/docs/handbook/utility-types.html#extracttype-union',
   },
   'nonnullable-utility-type': {
      deps: 'passing-generics-to-types',
      name: {
         en: 'NonNullable utility type',
         de: 'NonNullable-Hilfstyp',
      },
      message: {
         en: 'The NonNullable utility type lets you exclude null and undefined from a union type.',
         de: 'Der NonNullable-Hilfstyp ermöglicht es Ihnen, null und undefined aus einem Union-Typ auszuschließen.',
      },
      difficulty: 'not-easy',
      link: 'https://www.typescriptlang.org/docs/handbook/utility-types.html#nonnullabletype',
   },
   'record-utility-type': {
      deps: 'passing-generics-to-types',
      name: {
         en: 'Record utility type',
         de: 'Record-Hilfstyp',
      },
      message: {
         en: 'The Record utility type lets you create an object type with a set of properties whose keys are of one type and whose values are of another type.',
         de: 'Der Record-Hilfstyp ermöglicht es Ihnen, einen Objekttyp mit einer Reihe von Eigenschaften zu erstellen, deren Schlüssel einen Typ und deren Werte einen anderen Typ haben.',
      },
      difficulty: 'not-easy',
      link: 'https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type',
   },
   'returntype-utility-type': {
      deps: 'passing-generics-to-types',
      name: {
         en: 'ReturnType utility type',
         de: 'ReturnType-Hilfstyp',
      },
      message: {
         en: 'The ReturnType utility type lets you get the return type of a function type.',
         de: 'Der ReturnType-Hilfstyp ermöglicht es Ihnen, den Rückgabetyp eines Funktionstyps zu erhalten.',
      },
      difficulty: 'not-easy',
      link: 'https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype',
   },
   'lowercase-utility-type': {
      deps: 'passing-generics-to-types',
      name: {
         en: 'Lowercase utility type',
         de: 'Lowercase-Hilfstyp',
      },
      message: {
         en: 'The Lowercase utility type lets you convert a string literal type to a string literal type with all characters lowercase.',
         de: 'Der Lowercase-Hilfstyp ermöglicht es Ihnen, einen Zeichenfolgenliteraltyp in einen Zeichenfolgenliteraltyp mit allen Kleinbuchstaben umzuwandeln.',
      },
      difficulty: 'not-easy',
      link: 'https://www.typescriptlang.org/docs/handbook/utility-types.html#lowercasestringtype',
   },
   'uppercase-utility-type': {
      deps: 'passing-generics-to-types',
      name: {
         en: 'Uppercase utility type',
         de: 'Uppercase-Hilfstyp',
      },
      message: {
         en: 'The Uppercase utility type lets you convert a string literal type to a string literal type with all characters uppercase.',
         de: 'Der Uppercase-Hilfstyp ermöglicht es Ihnen, einen Zeichenfolgenliteraltyp in einen Zeichenfolgenliteraltyp mit allen Großbuchstaben umzuwandeln.',
      },
      difficulty: 'not-easy',
      link: 'https://www.typescriptlang.org/docs/handbook/utility-types.html#uppercasestringtype',
   },
   'parameters-utility-type': {
      deps: 'passing-generics-to-types',
      name: {
         en: 'Parameters utility type',
         de: 'Parameters-Hilfstyp',
      },
      message: {
         en: 'The Parameters utility type lets you get the parameters of a function type.',
         de: 'Der Parameters-Hilfstyp ermöglicht es Ihnen, die Parameter eines Funktionstyps zu erhalten.',
      },
      difficulty: 'not-easy',
      link: 'https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype',
   },
   'pick-utility-type': {
      deps: 'passing-generics-to-types',
      name: {
         en: 'Pick utility type',
         de: 'Pick-Hilfstyp',
      },
      message: {
         en: 'The Pick utility type lets you create an object type by picking a set of properties from another type.',
         de: 'Der Pick-Hilfstyp ermöglicht es Ihnen, einen Objekttyp zu erstellen, indem Sie eine Gruppe von Eigenschaften aus einem anderen Typ auswählen.',
      },
      difficulty: 'not-easy',
      link: 'https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys',
   },
   'any-type': {
      name: {
         en: 'Any Type',
         de: 'Any-Typ',
      },
      message: {
         en: 'any is a type that pauses type-checking on whatever it\'s assigned to.',
         de: 'any ist ein Typ, der die Typüberprüfung für alles, dem er zugewiesen wird, anhält.',
      },
      link: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any',
      difficulty: 'easy',
   },
   'array-type': {
      name: {
         en: 'Array type',
         de: 'Array-Typ',
      },
      message: {
         en: 'This is an array type. It represents an array, which can be any length.',
         de: 'Dies ist ein Array-Typ. Er repräsentiert ein Array, das eine beliebige Länge haben kann.',
      },
      link: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays',
      difficulty: 'easy',
   },
   // 'declare-global': {
   //    name: {
   //       en: 'Declare global',
   //       de: 'Globale Deklaration',
   //    },
   //    message: {
   //       en: 'Declare global is a way to extend the global scope of your project. It\'s useful for adding types to global variables that are not defined in your project.',
   //       de: 'Die globale Deklaration ermöglicht es Ihnen, den globalen Gültigkeitsbereich Ihres Projekts zu erweitern. Sie ist nützlich, um Typen zu globalen Variablen hinzuzufügen, die nicht in Ihrem Projekt definiert sind.',
   //    },
   // },
   // 'interface-window-in-declare-global': {
   //    name: {
   //       en: 'Window interface',
   //       de: 'Window-Schnittstelle',
   //    },
   //    message: {
   //       en: 'This pattern lets you extend the Window interface to',
   //       de: 'Dieses Muster ermöglicht es Ihnen, die Window-Schnittstelle zu erweitern, um',
   //    },
   //    deps: 'declare-global',
   // },

   'passing-generics-to-types': {
      name: {
         en: 'Passing Types to other Types',
         de: 'Übergabe von Typen an andere Typen',
      },
      message: {
         en: 'Just like functions in JavaScript, you can pass types to other types as arguments. Just like functions, they then return other types.',
         de: 'Ähnlich wie Funktionen in JavaScript können Sie Typen als Argumente an andere Typen übergeben. Wie bei Funktionen geben sie dann andere Typen zurück.',
      },
      link: 'https://www.typescriptlang.org/docs/handbook/2/generics.html',
      difficulty: 'not-easy',
   },
   // 'promise-utility-type': {
   //    name: {
   //       en: 'Promise type',
   //       de: 'Promise-Typ',
   //    },
   //    message: {
   //       en: 'You can use the Promise type to represent a Promise in TypeScript.',
   //       de: 'Sie können den Promise-Typ verwenden, um eine Promise in TypeScript darzustellen.',
   //    },
   //    deps: ['passing-generics-to-types'],
   // },
   'type-alias-with-generics': {
      name: {
         en: 'Generics in types',
         de: 'Generics in Typen',
      },
      deps: ['type-alias-declaration'],
      message: {
         en: 'You can use generics in types to make them more flexible. It turns them into a kind of function, which can return different types depending on what you pass in.',
         de: 'Sie können Generics in Typen verwenden, um sie flexibler zu machen. Sie verwandeln sie in eine Art Funktion, die je nachdem, was Sie übergeben, verschiedene Typen zurückgeben kann.',
      },
      link: 'https://www.typescriptlang.org/docs/handbook/2/generics.html',
      difficulty: 'not-easy',
   },
   'type-alias-with-multiple-generics': {
      name: {
         en: 'Multiple generics in types',
         de: 'Mehrere Generics in Typen',
      },
      deps: ['type-alias-with-generics', 'type-alias-declaration'],
      message: {
         en: 'You can pass multiple generics to types.',
         de: 'Sie können mehrere Generics an Typen übergeben.',
      },
      link: 'https://www.typescriptlang.org/docs/handbook/2/generics.html',
      difficulty: 'not-easy',
   },
   'tuple-type': {
      name: {
         en: 'Tuple type',
         de: 'Tuple-Typ',
      },
      message: {
         en: 'This is a tuple type. It represents an array with a fixed number of elements.',
         de: 'Dies ist ein Tuple-Typ. Er repräsentiert ein Array mit einer festen Anzahl von Elementen.',
      },
      link: 'https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types',
      difficulty: 'not-easy',
   },
   // 'number-indexed-access': {
   //    name: {
   //       en: 'Array member access',
   //       de: 'Zugriff auf Array-Elemente',
   //    },
   //    message: {
   //       en: 'You can use the number keyword to create a union type of all the members of an array.',
   //       de: 'Sie können das Schlüsselwort number verwenden, um einen Unionstyp aller Elemente eines Arrays zu erstellen.',
   //    },
   // },
   'function-return-type': {
      name: {
         en: 'Function return type',
         de: 'Rückgabetyp einer Funktion',
      },
      message: {
         en: 'This is a function return type. It tells the function what type it should return.',
         de: 'Dies ist der Rückgabetyp einer Funktion. Er gibt an, welchen Typ die Funktion zurückgeben sollte.',
      },
      link: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#return-type-annotations',
      difficulty: 'easy',
   },
   'union-type': {
      name: {
         en: 'Union type',
         de: 'Unionstyp',
      },
      message: {
         en: 'A union type is a type formed from two or more other types, representing values that may be any one of those types.',
         de: 'Ein Unionstyp ist ein Typ, der aus zwei oder mehr anderen Typen gebildet wird und Werte repräsentiert, die einer dieser Typen sein können.',
      },
      link: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#defining-a-union-type',
      difficulty: 'easy',
   },
   'as-assertion': {
      name: {
         en: '\'as\' Type assertion',
         de: '\'as\' Typ-Assertion',
      },
      message: {
         en: 'This is a type assertion. It\'s a way to tell TypeScript that you know better than it does what the type of something is.',
         de: 'Dies ist eine Typ-Assertion. Es ist eine Möglichkeit, TypeScript mitzuteilen, dass Sie besser als es wissen, welchen Typ etwas hat.',
      },
      link: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions',
      difficulty: 'easy',
   },
   'ts-object-type': {
      name: {
         en: 'Object type',
         de: 'Objekttyp',
      },
      message: {
         en: 'This is an object type. It\'s used to represent object types in TypeScript',
         de: 'Dies ist ein Objekttyp. Er wird verwendet, um Objekttypen in TypeScript darzustellen.',
      },
      link: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#object-types',
      difficulty: 'easy',
   },
   'type-predicate': {
      name: {
         en: 'Type predicate',
         de: 'Typ-Predicate',
      },
      message: {
         en: 'This is a type predicate. It turns the function into a type guard which asserts this \'is\' statement.',
         de: 'Dies ist ein Typ-Predicate. Es verwandelt die Funktion in eine Typwache, die die \'is\'-Aussage bestätigt.',
      },
      link: 'https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates',
      difficulty: 'not-easy',
   },
   'interface-declaration': {
      name: {
         en: 'Interface declaration',
         de: 'Interface-Deklaration',
      },
      message: {
         en: 'This is an interface declaration. It\'s like a type alias, but it can be extended.',
         de: 'Dies ist eine Interface-Deklaration. Es ist ähnlich wie ein Typ-Alias, aber es kann erweitert werden.',
      },
      link: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces',
      difficulty: 'easy',
   },
   'never-keyword': {
      name: {
         en: 'Never keyword',
         de: 'Never-Schlüsselwort',
      },
      message: {
         en: 'This is the never keyword. It\'s a way to represent the type of something that should never occur.',
         de: 'Dies ist das Never-Schlüsselwort. Es wird verwendet, um den Typ einer Situation zu repräsentieren, die niemals auftreten sollte.',
      },
      link: 'https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-never-type',
      difficulty: 'not-easy',
   },
   'in-operator-narrowing': {
      name: {
         en: 'In operator narrowing',
         de: 'Typverengung mit dem \'in\'-Operator',
      },
      message: {
         en: 'You can use the \'in\' operator to narrow the type of a variable.',
         de: 'Du kannst den \'in\'-Operator verwenden, um den Typ einer Variablen zu verengen.',
      },
      link: 'https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-in-operator-narrowing',
      difficulty: 'not-easy',
   },
   'non-null-expression': {
      name: {
         en: 'Non-null expression',
         de: 'Non-null-Ausdruck',
      },
      message: {
         en: 'You can postfix an expression with ! to tell TypeScript that you know it\'s not null or undefined. This works the same as an \'as\' assertion.',
         de: 'Du kannst einen Ausdruck mit ! postfixen, um TypeScript mitzuteilen, dass du weißt, dass er nicht null oder undefined ist. Dies funktioniert ähnlich wie eine \'as\'-Assertion.',
      },
      link: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#non-null-assertion-operator-postfix-',
      difficulty: 'not-easy',
   },
   'null-keyword': {
      name: {
         en: 'Null keyword',
         de: 'Null-Schlüsselwort',
      },
      message: {
         en: 'This is the null keyword. It\'s a way to represent the type of null.',
         de: 'Dies ist das Null-Schlüsselwort. Es repräsentiert den Typ null.',
      },
      link: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#null-and-undefined',
      difficulty: 'easy',
   },
   'undefined-keyword': {
      name: {
         en: 'Undefined keyword',
         de: 'Undefined-Schlüsselwort',
      },
      message: {
         en: 'This is the undefined keyword. It\'s a way to represent the type of undefined.',
         de: 'Dies ist das Undefined-Schlüsselwort. Es repräsentiert den Typ undefined.',
      },
      link: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#null-and-undefined',
      difficulty: 'easy',
   },
   'literal-type': {
      name: {
         en: 'Literal type',
         de: 'Literaltyp',
      },
      message: {
         en: 'This is a literal type. It\'s a way to represent a specific value in TypeScript.',
         de: 'Dies ist ein Literaltyp. Es handelt sich um eine Möglichkeit, einen bestimmten Wert in TypeScript darzustellen.',
      },
      link: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types',
      difficulty: 'easy',
   },
   'optional-object-property': {
      name: {
         en: 'Optional Object Property',
         de: 'Optionale Objekteigenschaft',
      },
      message: {
         en: 'The question mark next to this object property means that it\'s optional - it doesn\'t need to be specified on this object.',
         de: 'Das Fragezeichen neben dieser Objekteigenschaft bedeutet, dass sie optional ist - sie muss nicht auf diesem Objekt angegeben werden.',
      },
      link: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#optional-properties',
      difficulty: 'easy',
   },
   'readonly-object-property': {
      name: {
         en: 'Readonly Object Property',
         de: 'Schreibgeschützte Objekteigenschaft',
      },
      message: {
         en: 'The readonly keyword means that this property can\'t be changed after it\'s been set.',
         de: 'Das readonly-Schlüsselwort bedeutet, dass diese Eigenschaft nach der Festlegung nicht geändert werden kann.',
      },
      link: 'https://www.typescriptlang.org/docs/handbook/2/objects.html#readonly-properties',
      difficulty: 'easy',
   },
   'type-alias-declaration': {
      name: {
         en: 'Type Keyword',
         de: 'Typschlüsselwort',
      },
      message: {
         en: 'This is a type alias. It\'s like an interface, but it can\'t be extended - and it can represent things that interfaces can\'t.',
         de: 'Dies ist ein Typalias. Es ist wie eine Schnittstelle, kann aber nicht erweitert werden - und es kann Dinge darstellen, die Schnittstellen nicht können.',
      },
      link: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases',
      difficulty: 'easy',
   },
   'variable-type-annotation': {
      name: {
         en: 'Variable type annotation',
         de: 'Variablentypannotation',
      },
      message: {
         en: 'This annotation tells the variable what type it should be.',
         de: 'Diese Annotation gibt der Variable an, welchen Typ sie haben sollte.',
      },
      link: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-annotations-on-variables',
      difficulty: 'easy',
   },
   'typing-function-parameters': {
      name: {
         en: 'Function parameter type annotation',
         de: 'Typisierung von Funktionsparametern',
      },
      message: {
         en: 'This annotation tells the function what type the parameter should be.',
         de: 'Diese Annotation gibt der Funktion an, welchen Typ der Parameter haben sollte.',
      },
      link: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#parameter-type-annotations',
      difficulty: 'easy',
   },
   'conditional-type': {
      name: {
         en: 'Conditional type',
         de: 'Bedingter Typ',
      },
      message: {
         en: 'This is a conditional type. It\'s a kind of if-else logic in TypeScript, but at the type level.',
         de: 'Dies ist ein bedingter Typ. Es handelt sich um eine Art von if-else-Logik in TypeScript, jedoch auf der Typenebene.',
      },
      link: 'https://www.typescriptlang.org/docs/handbook/2/conditional-types.html',
      difficulty: 'not-easy',
   },
   'nested-conditional-type': {
      name: {
         en: 'Nested conditional type',
         de: 'Verschachtelter bedingter Typ',
      },
      message: {
         en: 'Conditional types can be nested in TypeScript!',
         de: 'Bedingte Typen können in TypeScript verschachtelt werden!',
      },
      deps: ['conditional-type'],
      link: 'https://www.typescriptlang.org/docs/handbook/2/conditional-types.html',
      difficulty: 'not-easy',
   },
   'k-in-keyof': {
      name: {
         en: 'keyof in Mapped Types',
         de: 'keyof in Mapped Types',
      },
      deps: ['mapped-type'],
      message: {
         en: 'The keyof keyword is used in mapped types to iterate over the keys of another type.',
         de: 'Das Schlüsselwort keyof wird in Mapped Types verwendet, um über die Schlüssel eines anderen Typs zu iterieren.',
      },
      link: 'https://www.typescriptlang.org/docs/handbook/2/mapped-types.html',
      difficulty: 'not-easy',
   },
   'keyof': {
      name: {
         en: 'keyof',
         de: 'keyof',
      },
      message: {
         en: 'The keyof operator takes a type and returns a union of its keys.',
         de: 'Der keyof Operator nimmt einen Typen und liefert eine Union seiner Schlüssel.',
      },
      link: 'https://www.typescriptlang.org/docs/handbook/2/keyof-types.html',
      difficulty: 'not-easy',
   },
   'typeof': {
      name: {
         en: 'typeof',
         de: 'typeof',
      },
      message: {
         en: 'The typeof operator can be used to infer the type of a runtime construct.',
         de: 'Der typeof Operator kann verwendet werden, um den Typ einer Laufzeitkonstruktion zu inferieren.',
      },
      link: 'https://www.typescriptlang.org/docs/handbook/2/typeof-types.html',
      difficulty: 'not-easy',
   },
   'generic-slots-in-functions': {
      name: {
         en: 'Generics in functions',
         de: 'Generics in Funktionen',
      },
      message: {
         en: 'You can use generics in functions to infer types based on what you call your function with.',
         de: 'Du kannst Generics in Funktionen verwenden, um Typen basierend auf dem zu inferieren, mit dem du deine Funktion aufrufst.',
      },
      link: 'https://www.typescriptlang.org/docs/handbook/2/generics.html',
      difficulty: 'not-easy',
   },
   'interface-with-generics': {
      name: {
         en: 'Generics in interfaces',
         de: 'Generics in Schnittstellen',
      },
      deps: ['interface-declaration'],
      message: {
         en: 'You can use generics in interfaces to make them more flexible. It turns them into a kind of function, which can return different types depending on what you pass in.',
         de: 'Du kannst Generics in Schnittstellen verwenden, um sie flexibler zu machen. Dadurch werden sie zu einer Art Funktion, die je nach dem, was du übergibst, unterschiedliche Typen zurückgeben kann.',
      },
      link: 'https://www.typescriptlang.org/docs/handbook/2/generics.html',
      difficulty: 'not-easy',
   },
   'interface-with-multiple-generics': {
      name: {
         en: 'Multiple generics in types/interfaces',
         de: 'Mehrere Generics in Typen/Schnittstellen',
      },
      deps: ['interface-with-generics', 'interface-declaration'],
      message: {
         en: 'You can pass multiple generics to interfaces.',
         de: 'Du kannst mehrere Generics an Schnittstellen übergeben.',
      },
      link: 'https://www.typescriptlang.org/docs/handbook/2/generics.html',
      difficulty: 'not-easy',
   },
   'mapped-type': {
      name: {
         en: 'Mapped types',
         de: 'Abgebildete Typen',
      },
      message: {
         en: 'You can use a mapped type to create objects by iterating over keys.',
         de: 'Du kannst einen abgebildeten Typ verwenden, um Objekte zu erstellen, indem du über Schlüssel iterierst.',
      },
      link: 'https://www.typescriptlang.org/docs/handbook/2/mapped-types.html',
      difficulty: 'not-easy',
   },
   'multiple-generic-slots-in-functions': {
      name: {
         en: 'Multiple generics in functions',
         de: 'Mehrere Generics in Funktionen',
      },
      deps: ['generic-slots-in-functions'],
      message: {
         en: 'You can use multiple generic slots in functions to infer types based on what you call your function with.',
         de: 'Du kannst in Funktionen mehrere Generics verwenden, um Typen basierend auf den Argumenten zu inferieren, mit denen die Funktion aufgerufen wird.',
      },
      link: 'https://www.typescriptlang.org/docs/handbook/2/generics.html',
      difficulty: 'not-easy',
   },
   'remapping-in-mapped-type': {
      name: {
         en: 'Key remapping via \'as\'',
         de: 'Schlüssel-Remapping mit \'as\'',
      },
      deps: ['mapped-type'],
      message: {
         en: 'You can remap keys in mapped types using the "as" keyword.',
         de: 'Du kannst Schlüssel in gemappten Typen mit dem Schlüsselwort "as" remappen.',
      },
      link: 'https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#key-remapping-via-as',
      difficulty: 'not-easy',
   },
}
