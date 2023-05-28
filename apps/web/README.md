# 🚀 TypeScript Wizard Web Application

This is a web application for the TypeScript Wizard project.

## 🔧 Prerequisites

- Node.js version installed, [latest LTS is recommended](https://nodejs.org/en/about/releases/)
- Install [nyxi](https://github.com/nyxblabs/nyxi)

## ❤️‍🔥 Getting Started

To start developing, follow these steps:

1. :octocat: Clone the repository:

   ```sh
   git clone https://github.com/nyxblabs/typescript-wizard.git
   cd typescript-wizard
   ```

2. 📦 Install the dependencies for all the packages:

   ```sh
   nyxi
   ```

3. 🏃‍♂️ Run the web application:

   ```sh
   nyxr dev
   ```

## ✏️ Adding/Editing Error Translations

You can find all of the error translations in the `packages/engine/errors` directory. Each error has its own file named with the error code.

To add or edit a translation:

1. 🔎 Locate the corresponding error code file, e.g., `packages/engine/errors/<code>.md`.

2. ✏️ Modify the translation as needed.

> 💡 To find the error code you're looking for, you can refer to the [`tsErrorMessages.json`](https://github.com/nyxblabs/typescript-wizard/blob/main/packages/engine/src/tsErrorMessages.json) file or check the console for the error message format: `error TS<code>: <msg>`.

## 📗 Translation Style Guide

When translating error messages, follow these guidelines:

- 🗨️ Use a conversational and direct tone, as if you were the compiler addressing the user.
- 📢 Speak to the user directly, keeping the explanations concise and easy to understand.
- ❎ Avoid using `{0}` and `{1}` placeholders in excerpts to ensure readability.
- 🌐 Provide translations in multiple languages. Currently, English and German translations are available.

🎉 Happy contributing!
