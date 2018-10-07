# Off with Their Heads

> Decouple the front-end from your Drupal or WordPress CMS

It’s time to decapitate your CMS and go headless. The benefits of decoupling a site’s presentation (or “head”) from its content management are dramatic: faster load times, cleaner content types, better security, and the opportunity to create stunning user interfaces.

## CMS Setup Instructions

We will be hosting the CMS portions of our sites through Pantheon. Sign up for a free account at <a href="https://pantheon.io/" target="_blank">https://pantheon.io/</a> and then follow the instructions below to get started.

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

## Project Data Reference

For this example project, we are normalizing the data that is being requested from Drupal and WordPress in order to make the front-end development standardized for all participants regardless of their platform choice. In your application's `store/index.js` there will be a `staff` key which will be an array of objects with the following schema:

```javascript
{
	bio: <String>, // will contain HTML markup
	department: <String>,
	email: <String>,
	first_name: <String>,
	headshot: <String>, // url to remote resource
	id: <Number>,
	job_title: <String>,
	last_name: <String>,
	linkedin: <String>,
	phone: <String>,
	quote: <String>,
	slug: <String>
}
```
