# React TypeScript Skeleton Project

This is a skeleton project for quickly setting up a React application with TypeScript, using Vite for build and development, ESLint and Prettier for linting and formatting, SCSS for styling, and Husky for pre-commit hooks.

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

