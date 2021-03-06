
![Rick and Morty](https://github.com/chrishiguto/rickandmorty/blob/main/public/img/heading.png)

This is a [Next.js](https://nextjs.org/) project created for inGaia front-end challenge. It's a Rick and Morty application that uses the community [API](https://rickandmortyapi.com/) to fetch data of the characters.
By default, the app loads all the characters using Static Site Generation from Next.js and all the subsequent requests are made on the client side.

## Demo

You can check the project demo version [here](https://rickandmortyingaia.vercel.app/).

## What is inside?

This project uses lot of stuff as:

- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [Styled Components](https://styled-components.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Storybook](https://storybook.js.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)
- [GraphQL](https://graphql.org/)
- [Apollo](https://www.apollographql.com/docs/)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can check the each component in isolation from the application using Storybook:

```bash
npm run storybook
# or
yarn storybook
```

This application has 100% coverage in unit and integration tests, you can check by running:

```bash
npm run test
# or
yarn test
```

## Commands

- `dev`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `start`: starts a simple server with the build production code
- `lint`: runs the linter in all components and pages
- `test`: runs jest to test all components and pages
- `test:watch`: runs jest in watch mode
- `storybook`: runs storybook on `localhost:6006`
- `build-storybook`: create the build version of storybook
