# NextJS Alex Template

This is a starter template for [Learn Next.js](https://nextjs.org/learn).

- 🆃ypescript
- 🅴SLint + Preventing formatting errors from being committed
- Prettier
- 🅹est
- Styled-Components
- Header: SEO
- Bonus: local network deployment // TODO

## Step 1: Project setup

- Install our sample project:

```jsx
git clone https://github.com/Alex-DG/nextjs-alex-template.git

OR

npx create-next-app <your-project-name> --use-yarn --example "https://github.com/vercel/next-learn-starter/tree/master/basics-final"
```

- Once installed your list of commands available from there are:

```jsx
yarn dev
    Starts the development server.

  yarn build
    Builds the app for production.

  yarn start
    Runs the built app in production mode.

**We suggest that you begin by typing:**

  cd <your-project-name>
  yarn dev
```

## Step 2: Typescript

If your project is running, kill the server we will restart it later.

- Create tsconfig.json file:

```jsx
touch tsconfig.json
```

- Add the Typescript dependencies to your project:

```jsx
yarn add --dev typescript @types/react @types/node
```

- Start the development server again with: `yarn dev` and your `tsconfig.json` will be automatically populated.
- Create a `next-env.d.ts` file, which ensures Next.js types are picked up by the TypeScript compiler. _You should not touch this file_.

You can now use TypeScript for your Next.js app. Change your `.js` file(s) to `.ts` or `.tsx` and add the missing types, now required.

See exemples of some types you may need in your project: [https://nextjs.org/learn/excel/typescript/nextjs-types](https://nextjs.org/learn/excel/typescript/nextjs-types)

_Enjoy your TypseScript safe space!_

## Step 3: ESLint

- Install the ESLint dependencies to work with React, Typescript and prettier:

```jsx
# Install ESLint
yarn add --dev eslint

# Install additional plugins
yarn add --dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-prettier eslint-plugin-react

# Install Prettier and Prettier-ESLint dependencies
yarn add --dev prettier prettier-eslint eslint-config-prettier
```

- Add `.eslintrc` and `.eslintignore` files to your project:

```jsx
touch.eslintrc.eslintignore
```

- In your `.eslintignore` file please add this paths:

```jsx
**/node_modules/*
**/out/*
**/.next/*
```

- In your `.eslintrc` here a basic configuration:

```jsx
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2020, // Allows for the parsing of modern ECMAScript features
    "sourceType": "module" // Allows for the use of imports
  },
  "plugins": ["@typescript-eslint"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier"
  ],
  "env": {
    "es6": true,
    "browser": true,
    "jest": true,
    "node": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    "react/react-in-jsx-scope": 0,
    "react/display-name": 0,
    "react/prop-types": 0,
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/indent": 0,
    "@typescript-eslint/member-delimiter-style": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/no-unused-vars": [
      2,
      {
        "argsIgnorePattern": "^_"
      }
    ],
    "no-console": [
      2,
      {
        "allow": ["warn"]
      }
    ]
  }
}
```

- If you are using **VSCode** and want to fix automatically your ESLint's error(s0 on save you can configure your editor with this setting located in `settings.json`

```jsx
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
}
```

- Add the ESLint fix command to your `package.json`:

```jsx
{
  "scripts": {
    "lint": "eslint . --ext ts --ext tsx --ext js",
  }
}
```

/!\ _To verify that your code has type errors, the `tsc --noEmit` command can be used here._

- **Preventing ESLint and formatting errors from being committed:**
  - Install _lint-stage_ and _husky_: `yarn add --dev lint-staged husky`
  - In your `package.json` you can add

```jsx
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "pre-push": "yarn run type-check"
    }
  },
  "lint-staged": {
    "*.@(ts|tsx)": [
      "yarn lint",
      "yarn format"
    ]
  },
}
```

## Step 4: Prettier

- Add `.prettierrc` and `.prettierignore` to your project:

```jsx
touch.prettierrc.prettierignore
```

- In your `.prettierignore`:

```jsx
node_modules.next
yarn.lock
package - lock.json
public
```

- In your `.prettierrc`:

```jsx
{
  "printWidth": 80,
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

- Add a Prettier command to your `package.json`:

```jsx
{
  "scripts": {
    "type-check": "tsc --pretty --noEmit", // check TS types
    "format": "prettier --write .", // apply prettier throughout of your project
  }
}
```

## Step 5: Jest

- Install react-test + jest dependencies and create the jest and babel config files:

```jsx

# React testing library
yarn add --dev @testing-library/react

# Jest
yarn add --dev jest jest-watch-typeahead @types/jest babel-jest

# Other
// For CSS modules
yarn add --dev identity-obj-proxy

# Jest config file
touch jest.config.js

# Babel config file
touch .babelrc

```

- Add the Jest config file `jest.config.js`:

```jsx
module.exports = {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
  },
}
```

- Add the babel config file `touch .babelrc`:

```jsx
{
  "presets": ["next/babel"]
}
```

- Add the following in your `package.json`:

```jsx
{
  "test": "jest",
  "test-all": "yarn lint && yarn type-check && yarn test"
}
```

The first time this test is run with `yarn test`, Jest creates a snapshot file under `__snapshots__`.

## Step 6: Styled-Components

- Install `styled-components` and `babel-plugin-styled-component`:

```jsx
yarn add styled-components
yarn add --dev babel-plugin-styled-component
```

I invite you to have a look at the official styled-components [docs](https://styled-components.com/docs/advanced), it's how they explain that setup:

```
Basically you need to add a custom pages/_document.js (if you don't have one). Then [copy the logic](https://github.com/vercel/next.js/blob/master/examples/with-styled-components/pages/_document.js) for styled-components to inject the server side rendered styles into the <head>.

Refer to [our example](https://github.com/vercel/next.js/tree/master/examples/with-styled-components) in the Next.js repo for an up-to-date usage example.
```

- Once installed update `.babelrc` with the new styled-component pluging:

```jsx
{
  "presets": ["next/babel"],
  "plugins": [["styled-components", { "ssr": true }]]
}
```

- Create under your page folder a new `_documents.tsx` page with this configuration:

```jsx
import Document, { DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}
```

## Step 7: Header

See the configuration of the Header in `config.js` with:

- Recommended Meta Tags
- Search Engine Optimization Meta Tags
- Facebook Open Graph meta tags
- Meta Tags for HTML pages on Mobile
- Twitter Summary card

You also should have a look to the content of `/public/icons/` to see the different compatible icons added there depending of the deviced which will open your website url.

The Header configuration is then imported into `_app.tsx`, used for the whole app.
