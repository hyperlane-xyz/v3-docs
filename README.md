# Website

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

## Generated Content

The `static` directory includes generated content. Please ask [@yorhodes](https://github.com/yorhodes) for assistance if you need to update this content.

Most of this is simply serialized content from `@hyperlane-xyz` NPM packages (see `devDependencies`). Eventually this should be part of the build process.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Vercel Github Action is used to deploy the website. The action is triggered on every push to the `main` branch.

