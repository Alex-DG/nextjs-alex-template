# NextJS Alex Template

This is a starter template for [Learn Next.js](https://nextjs.org/learn).

- 🆃ypescript
- 🅴SLint + Preventing formatting errors from being committed
- Prettier
- 🅹est // TODO
- Styled-Component // TODO
- SEO // TODO
- Bonus: local network deployment // TODO

## **Step 1: Project setup**

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

- Add the ESLint fix command to your `package.json` so you will be able to run `yarn lint` to fix all files defined in your command:

```jsx
{
  "scripts": {
		"lint": "yarn eslint",
    "eslint": "eslint '*/**/*.{js,ts,tsx}' --quiet --fix"
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
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,ts,tsx,json,md}": [
      "prettier --write" // to format the entire project
    ],
    "*.{js,ts,tsx}": [
      "eslint --fix"
    ]
  }
}
```

Step 4: Prettier

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

- Add a Prettier command to your `package.json` so you will be able to run `yarn lint` with both eslint and prettier throughout your project:

```jsx
{
  "scripts": {
		"lint": "yarn prettier && yarn eslint",
    "prettier": "prettier --list-different '*/**/*.{js,ts,tsx,json,md}'",
  }
}
```

The flag `--list-different` prints the filenames of files that are different from Prettier formatting. If there are differences the script errors out, which is useful in a CI scenario.
