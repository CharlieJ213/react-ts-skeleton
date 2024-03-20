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
import('@app/assets/my-custom-theme.css')
  .then(() => console.log('Custom CSS theme loaded!'));
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
