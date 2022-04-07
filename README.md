This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First Install the Dependencies:

```bash
yarn
```

Next, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the build preview.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file

## Globals

Global scripts and css are imported at `_app.js`, this is added into the outputted HTML by Next.

## Pages

Routing is built into Nextjs. Create an about.js file in Pages will result in an about.html page being constructed in the build step.

## Components

React components house the HTML partials as well as their associated logic. Included components are Head, Footer and Nav

## SCSS

`src/styles` contain all the app's scss. Bootstrap 5 is included in the build step and the exact imports can be tweaked in `_bootstrap.scss`

## Linting & Prettier

Prettier takes care of formatting. Linting will be added in future releases.

## Build

```bash
yarn build
```

Static files are found in the `out` folder.
Note:

- its production optimized so codesplitting and minification are already performed.
- The links are all absolute so it'll only work if everything is placed on a root level folder.

## Deploy

A github action workflow is provided to automate deployment, just fill in the ftp details
