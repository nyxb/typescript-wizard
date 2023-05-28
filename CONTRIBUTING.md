# 💪 How do I contribute?

We're excited to have you on board!

As you can see from the [tsErrorMessages.json](https://github.com/nyxblabs/typescript-wizard/blob/main/packages/engine/src/tsErrorMessages.json),
there's a serious amount of work that needs to be done to cover every possible Typescript Error. And that's when the open-source community really shines.

Your contributions will eventually help save countless hours for people struggling with TypeScript error messages.

## ✅ Prerequisites

1. Node.js version installed, [latest LTS is recommended](https://nodejs.org/en/about/releases/)
2. Install [nyxi](https://github.com/nyxblabs/nyxi)

## 🚀 How to start developing?

Clone the repo and install the needed dependencies for all the packages by following these steps:

```sh
git clone https://github.com/nyxblabs/typescript-wizard.git
cd typescript-wizard
nyxr dev # This will run the next app
```

## ✍️ Adding/editing error translations

You'll find all of the errors' translations at `packages/engine/errors` and they follow the following conventions:

- Every file must be named with its error code: `<code>.md`

> 💡 Hint: To find the code for the error you're looking for, have a look inside [`tsErrorMessages.json`](https://github.com/nyxblabs/typescript-wizard/blob/main/packages/engine/src/tsErrorMessages.json),
> or check your console, you'll see this formatting `error TS<code>: <msg>`.

- You can use our template by creating a new file at the appropriate location, such as `packages/engine/errors/en/<code>.md` or `packages/engine/errors/de/<code>.md`. The template should contain placeholders on how the explanation should be written.

```sh
nyxr translate <code> en
nyxr translate <code> de
```

## 📖 Translation Style Guide

### 🧩 You are the Compiler

Similar to Elm, you should address the user as though _you are the compiler_.

Bad:

`TypeScript thinks that this is a type, not a variable.`

Good:

`I think that this is a type, not a variable.`

### 💬 Speak to the User Directly

In a similar vein, you should address the user directly whenever possible - this keeps it conversational and terse.

Bad:

`The code might have an unnecessary trailing comma.`

Good:

`You might have added an unnecessary trailing comma.`

### ❌ Don't use {0} and {1} in Excerpts

Excerpts should always be short and sweet - `{0}` can expand to _enormous_ size and make even our pretty excerpts unreadable. You can use 'A' and 'B' instead if you like.

Bad:

`{0} can't be passed to a slot expecting {1}.`

Good:

`'A' can't be passed to a slot expecting 'B'.`

I would mention the ability to create new languages and how to do it in the following section:

## 🌍 Adding New Languages

We welcome contributions to translate TypeScript error messages into new languages. If you would like to add support for a new language, follow these steps:

1. Create a new folder under `packages/engine/errors` with the appropriate language code (e.g., `fr` for French).
2. Inside the new language folder, create a translation file for each error using the error code as the file name (e.g., `<code>.md`).
3. Translate the error messages into the target language, following the Translation Style Guide mentioned above.
4. Submit a pull request with your new language translations.

With your help, we can make TypeScript error messages accessible to developers around the world. Thank you for your contribution!
