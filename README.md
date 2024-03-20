# React TypeScript Skeleton Project

This is a skeleton project for quickly setting up a React application with TypeScript, using Vite for build and development, ESLint and Prettier for linting and formatting, SCSS for styling, and Husky for pre-commit hooks.

> There is definitely a lot of personal preference in the way this has been set up. I've come to building web applications this way after a few years of experience working on many projects (personal and professional).
>
> So personally, I enjoy using HTML elements and actual CSS (SCSS) whilst building applications. It feels like better separation between the styles and JS. When UI libraries force styling to be done through the JSX I find the components start to blow up in size.
>
> If you have any ideas of how to improve this, or you find this repo in useful in any way whatsoever please don't hesitate to get in contact!

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Linting and Formatting](#linting-and-formatting)
  - [Pre-commit Hooks](#pre-commit-hooks)
- [Project Structure](#project-structure)
  - [Tree](#tree)
  - [The `public` Folder](#the-public-folder)
  - [The `assets` folder](#the-assets-folder)
  - [The `components` folder](#the-components-folder)
  - [The `context` folder](#the-context-folder)
  - [The `hooks` folder](#the-hooks-folder)
  - [The `pages` folder](#the-pages-folder)
  - [The `theme` folder](#the-theme-folder)
  - [The `types` folder](#the-types-folder)
  - [The `util` folder](#the-util-folder)
- [Styling](#styling)
  - [Borders](#borders)
  - [Breakpoints](#breakpoints)
  - [Colors](#colors)
  - [Dimensions](#dimensions)
  - [Fonts](#fonts)
  - [Mixins](#mixins)
  - [Z Index](#z-index)

## Features

- **React**: A JavaScript library for building user interfaces.
- **React Router DOM**: A React library for building Single Page Applications.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Vite**: A build tool that provides a fast and optimized development experience.
- **ESLint**: A pluggable linting utility for JavaScript and JSX.
- **Prettier**: An opinionated code formatter.
- **SCSS**: A preprocessor scripting language that is interpreted or compiled into CSS.
- **Husky**: A tool to set up Git hooks.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed on your machine.

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/your-project.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-project
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn
   ```

### Usage

- To start the development server:

  ```bash
  npm run dev
  # or
  yarn dev
  ```

  This will start the development server and open your default web browser with the application running. The development server automatically reloads the browser when you make changes to the source code.

- To build for production:

  ```bash
  npm run build
  # or
  yarn build
  ```

  This will generate a production-ready build of your application in the `dist` directory.

### Linting and Formatting

- To run ESLint:

  ```bash
  npm run lint
  # or
  yarn lint
  ```

  This will run ESLint and report any linting errors or warnings in your codebase.

- To run Prettier:

  ```bash
  npm run format
  # or
  yarn format
  ```

  This will format your codebase according to Prettier rules.

### Pre-commit Hooks

This project uses Husky to run linting and formatting checks before every commit. This ensures that your codebase stays consistent and free from linting errors.

## Project Structure

A basic structure has been set up. The idea generally follows that each folder in `src/` should have a `index` file to export all the contents of the folder from. This makes importing multiple things in one file a lot cleaner.

Typescript path aliasing has also been set up in the [tsconfig file](./tsconfig.json). At the moment it's just set to `@app/*` which means all files within `src` can be imported using `@app/${PATH}`. This reduces the amount of relative (`'../../'`) imports and looks cleaner.

### Tree

```text
.
├── public
│   └── vite.svg
├─── src
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   └── index.ts
│   ├── context
│   │   └── index.ts
│   ├── hooks
│   │   ├── index.ts
│   ├── pages
│   │   └── index.ts
│   ├── theme
│   │   └── index.scss
│   ├── types
│   │   └── index.ts
│   ├── util
│   │   └── config.ts
│   ├── index.scss
│   ├── main.tsx
│   └── vite-env.d.ts
├── README.md
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

### The `public` Folder

This is the `public` folder supplied by Vite. See the docs [here](https://vitejs.dev/guide/assets) for its benefits.

Generally it's used for storing static assets which you want accessible via URL. For example, you can access the file `public/vite.svg` at `http://localhost:5173/vite.svg`

### The `assets` folder

This is another place to store static assets, usually only assets you import in the code itself. This can be translation files, fonts, anything. It's just not accessible via URL if you store it in this folder

### The `components` folder

This is a folder to store all of your components in. Components are building blocks for pages. They should be separated out and set up for reusability.

### The `context` folder

This is a folder to store React Context definitions. In the `index.ts` here we also export something extra:

```ts
export const useSiteSettingsContext = () => useContext(SiteSettingsContext);
```

When using a context in React code you will need to import the function `useContext`. That means you'll need to import 2 things in your component file for just 1 context. So here we are aliasing the function and exporting `useSiteSettingsContext` as a custom hook so you only ever need 1 import (in your component code) when using a React Context.

### The `hooks` folder

This is the folder that contains custom hooks for the application.

### The `pages` folder

This is where we store the files for pages. Each new page should have its own directory in this folder.

### The `theme` folder

This is where the SCSS files are stored for the global theming config. Read more in [Styling](#styling)

### The `types` folder

This is where custom TypeScript types are stored. You can structure this folder however you like. For example, if you have a load of types relating to a database it could be good to create a `types/DB` folder to export all your types from.

### The `util` folder

This is a folder where you can store random helper functions that are used in multiple places throughout the app / config for the application. Anything you want really that's not particularly related to React and is more around config or just base TypeScript code.

## Styling

Certain styling variables and helpers have been set up. The general approach to styling in this repo is making everything as customizable as possible. We want to use CSS variables to dictate the styles of our UI components to make it a lot simpler to write custom themes for.

The difference between SCSS and CSS variables is that CSS ones can change at runtime. This means that we can dynamically import a CSS file in our `./src/main.tsx` and change the theme of the entire UI (if we have our variables set up correctly).

For example. In the pre-written [Button component's CSS file](./src/components/Button/Button.module.scss) you should see an example of this. Some variables have been declared, such as `--button-color`, `--button-background-color--disabled` and `--button-border-width`. These can all be overridden anywhere within the app or from an imported CSS file.

```css
/* ./src/assets/my-custom-theme.css */

--button-color: var(--red);
--button-background-color: transparent;
```

```ts
// ./src/main.tsx
import('@app/assets/my-custom-theme.css').then(() =>
  console.log('Custom CSS theme loaded!'),
);
```

All variables exported from the `./src/theme` folder have been exported at the `:root` level which means all of them should be accessible from anywhere within the application (they should also apply to your custom theme files as well, so for example you can use the color variables in your custom CSS themes).

In this repository certain things have already been set up. A lot of these are just for maintaining consistency of styling across UI components.

### Borders

The file `src/theme/_breakpoints.scss` exports default values for border widths and radii

### Breakpoints

The file `src/theme/_breakpoints.scss` exports the pixel values of certain web breakpoints to aid with responsive design.

These values are:

```text
mobile-sm = 320px
mobile-lg = 480px
tablet = 768px
desktop-sm = 1024px
desktop-lg = 1200px
```

### Colors

The file `src/theme/_colors.scss` exports a few colors already. This is just a demonstration of exporting certain colors as SCSS and CSS variables

### Dimensions

The file `src/theme/_dimensions.scss` exports "gutter" values. These are intended to be used for margin / padding values. Setting these up as defined variables helps keep the spacing consistent across UI components.

### Fonts

Instead of introducing invasive `<Typography />` components there are just some recommended variables exported. These include size variations for `font-weight`, `font-size` and `line-height`. There is also a `--font-family-main` variable exported (which can be easily overwritten).

### Mixins

Here there are some generic functions which could be of use when writing any SCSS code in this repo. Feel free to add any more that you need to. All you need to do to use them is:

```scss
// ./src/components/MyComponent/MyComponent.scss`
@import '../../theme';

.container {
  @include row;
}
```

### Z Index

The file `src/theme/_z-index.scss` exports some initial `z-index` values. These can be helpful when trying to build up layers in the UI. Currently, there are exported variables for the already set up `Modal` component.
