# Off with Their Heads

> Decouple the front-end from your Drupal or WordPress CMS

It’s time to decapitate your CMS and go headless. The benefits of decoupling a site’s presentation (or “head”) from its content management are dramatic: faster load times, cleaner content types, better security, and the opportunity to create stunning user interfaces.

## CMS Setup Instructions

We will be hosting the CMS portions of our sites through Pantheon. Sign up for a free account at https://pantheon.io/ and then follow the instructions below to get started.

- [Drupal Setup Instructions](./docs/drupal.md)
- [WordPress Setup Instructions](./docs/wordpress.md)

## Front End Build Setup

### devolop

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev
```

### production
```bash
# build for production and launch server
$ npm run build
$ npm start

# OR generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
