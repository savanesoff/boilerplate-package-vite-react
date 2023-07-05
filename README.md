by `Protosus`

# Starter template for React library development with Vite

Starter template for React library development with Vite.
Pull it as your starting point, then change your origin to point to actual repo.

# Features

## Readme badges

[![npm version](https://badge.fury.io/js/boilerplate-package-vite-react.svg)](https://badge.fury.io/js/boilerplate-package-vite-react)
[![Build Status](https://github.com/savanesoff/boilerplate-package-vite-react/actions/workflows/test.yaml/badge.svg?branch=main&event=push)](https://github.com/savanesoff/boilerplate-package-vite-react/actions/workflows/test.yaml)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![HitCount](https://hits.dwyl.com/savanesov/boilerplate-package-vite-react.svg)](https://hits.dwyl.com/{username}/{project-name})

<!-- This is a package GIF reference -->
<!-- ![Validator](https://savanesoff.github.io/overdrag-vanilla-demo/assets/overdrag-npm-demo-animation-take1-63e16fc8.gif) -->

## Packaging

- Uses [`pnpm`](https://pnpm.io/installation) for faster install using smart caching
- Public type module
- [`Vite`](https://vitejs.dev/) dev server and toolkit and
- Dev dependencies for testing and development
  - `vitest`
  - `eslint`
  - `react`
  - `typescript`
  - and more...
- [`changesets`](https://github.com/changesets/changesets/blob/main/packages/get-github-info/README.md) for changelogs and auto-release workflow
- Exports definitions for index and types
- Files definition for npn package release
- `gh-pages` for publishing demos if needed

## Scripts

- `build`
- `test`
- `release`
  ...

## Testing

Uses `vitest`. Simply tun test command

## GH Workflows

- `pr` unit tests with caching
- `main` branch npm auto publishing

## License

- `MIT` included ini package as well

# --- DOCS Examples ---

## Installation

To install Overdrag, use npm or yarn:

```shell
npm install boilerplate-package-vite-react
```

or

```shell
yarn add boilerplate-package-vite-react
```

or

[![NPM](https://nodei.co/npm/boilerplate-package-vite-react.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/boilerplate-package-vite-react/)

## Usage

Import the Overdrag Rect component:

```JS
import MyComponent from "boilerplate-package-vite-react";
```

### Component

Render component anywhere in you app:

```tsx
function App() {
  return (
    <MyComponent
      /* optional props */
      style={{ backgroundColor: "red" }}
    />
  );
}
```

### Properties

- **`example`** Special property

### Events

The available events are:

- **`example`**: Special events

## Description

This is a detail description of your component

# PS

Hit me up on [Li](https://www.linkedin.com/in/samvel-avanesov/)

Enjoy! 🎉🎉🎉
