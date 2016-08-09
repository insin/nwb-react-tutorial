# nwb-react-tutorial

An implementation of the comment box from [the React tutorial](https://facebook.github.io/react/docs/tutorial.html) using nwb's middleware in the tutorial's API server to take advantage of nwb's default development setup, including:

- ES6 `class` components, shorthand properties, arrow functions, computed property names, module syntax, spread operator
- Stage 2 class properties
- Stage 3 `async`/`await` syntax
- `fetch()` and `Promise` polyfills
- Importing CSS
- Creation of final HTML to serve built files
- Deterministic filename hashing for long-term caching of built files

## Prerequisites

[Node.js](http://nodejs.org/) >= v4 must be installed.

## Installation

* Running `npm install` in the app's root directory will install everything you need for development.

## Development Server

* `npm start` will run the app's server at [http://localhost:3000](http://localhost:3000).

  If a static build is present in `dist/`, it will be served.

  Otherwise, a hot-reloading development build will be served using nwb's middleware.

* `npm run build` creates a static production build by default.

   To create a static development build, set the `NODE_ENV` environment variable to `development` while building.

* `npm run clean` will delete built resources from `dist/`.
