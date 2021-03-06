[![npm](https://img.shields.io/npm/v/contentful.svg)](https://www.npmjs.com/package/contentful)
[![Build Status](https://travis-ci.org/contentful/contentful.js.svg?branch=master)](https://travis-ci.org/contentful/contentful.js)
[![Coverage Status](https://coveralls.io/repos/github/contentful/contentful.js/badge.svg?branch=master)](https://coveralls.io/github/contentful/contentful.js?branch=master)
[![Dependency Status](https://david-dm.org/contentful/contentful.js.svg)](https://david-dm.org/contentful/contentful.js)
[![devDependency Status](https://david-dm.org/contentful/contentful.js/dev-status.svg)](https://david-dm.org/contentful/contentful.js#info=devDependencies)

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

Javascript SDK for [Contentful's](https://www.contentful.com) Content Delivery API.

# About

[Contentful](https://www.contentful.com) is a content management platform for web applications, mobile apps and connected devices. It allows you to create, edit & manage content in the cloud and publish it anywhere via a powerful API. Contentful offers tools for managing editorial teams and enabling cooperation between organizations.

## Features

- Content retrieval through Contentful's [Content Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/).
- [Synchronization](https://www.contentful.com/developers/docs/concepts/sync/)
- [Localization support](https://www.contentful.com/developers/docs/concepts/locales/)
- [Link resolution](https://www.contentful.com/developers/docs/concepts/links/)

## Supported environments

Browsers and Node.js:
- Chrome
- Firefox
- IE11 / Edge
- Safari
- node.js (0.10, iojs-3.x, 4.x, 5.x)

Other browsers should also work, but at the moment we're only running automated tests on the browsers and Node.js versions specified above.

# Getting started

In order to get started with the Contentful JS SDK you'll need not only to install it, but also to get credentials which will allow you to have access to your content in Contentful.

## Installation

In node, using [npm](http://npmjs.org):

``` sh
npm install contentful
```

Or, if you'd like to use a standalone built file you can use the following script tag or just download it from [npmcdn](https://npmcdn.com), under the `browser-dist` directory:

``` html
<script src="https://npmcdn.com/contentful@latest/browser-dist/contentful.min.js"></script>
```
**It is not recommended to use the above URL for production.**

Using `contentful@latest` will always get you the latest version, but you can also specify a specific version number:

``` html
<script src="https://npmcdn.com/contentful@3.0.0/browser-dist/contentful.min.js"></script>
```

Check the [releases](https://github.com/contentful/contentful.js/releases) page to know which versions are available.

## Authentication

To get content from Contentful, an app should authenticate with an with an OAuth bearer token.

You can create API keys using [Contentful's web interface](https://app.contentful.com). Go to the app, open the space that you want to access (top left corner lists all the spaces), and navigate to the APIs area. Open the API Keys section and create your first token. Done.

Don't forget to also get your Space ID.

For more information, check the Contentful's REST API reference on [Authentication](https://www.contentful.com/developers/docs/references/authentication/).

## Your first request

The following code snippet is the most basic one you can use to get some content from Contentful with this SDK:

```js
var contentful = require('contentful')
var client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: 'developer_bookshelf',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: '0b7f6x59a0'
})
// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
client.getEntry('5PeGS2SoZGSa4GuiQsigQu')
.then((entry) => console.log(entry))
```

You can try and change the above example at [Tonic](https://tonicdev.com/npm/contentful), or if you'd prefer a more Browser oriented example, check out this [JSFiddle](https://jsfiddle.net/contentful/kefaj4s8/) version of our Product Catalogue demo app.

## Using this SDK with the Preview API

This SDK can also be used with the Preview API. In order to do so, you need to use the Preview API Access token, available on the same page where you get the Delivery API token, and specify the host of the preview API, such as:

```js
var client = contentful.createClient({
  space: 'developer_bookshelf',
  accessToken: 'preview_0b7f6x59a0',
  host: 'preview.contentful.com'
})
```

You can check other options for the client on our reference documentation

## Documentation/References

To help you get the most out of this SDK, we've prepared reference documentation, tutorials and other examples that will help you learn and understand how to use this library.

### Reference documentation

The [Contentful's JS SDK reference](https://contentful.github.io/contentful.js) documents what objects and methods are exposed by this library, what arguments they expect and what kind of data is returned.

Most methods also have examples which show you how to use them.

You can start by looking at the top level [`contentful`](./contentful.html) namespace.

    From version 3.0.0 onwards, you can access documentation for a specific version by visiting `https://contentful.github.io/contentful.js/contentful/<VERSION>`

### Contentful JavaScript resources

Check the [Contentful for JavaScript](https://www.contentful.com/developers/docs/javascript/) page for Tutorials, Demo Apps, and more information on other ways of using JavaScript with Contentful

### REST API reference

This library is a wrapper around our Contentful Delivery REST API. Some more specific details such as search parameters and pagination are better explained on the [REST API reference](https://www.contentful.com/developers/docs/references/content-delivery-api/), and you can also get a better understanding of how the requests look under the hood.

### Legacy contentful.js

For versions prior to 3.0.0, you can access documentation at [https://github.com/contentful/contentful.js/tree/legacy](https://github.com/contentful/contentful.js/tree/legacy)

## Versioning

This project strictly follows [Semantic Versioning](http://semver.org/) by use of [semantic-release](https://github.com/semantic-release/semantic-release).

This means that new versions are released automatically as fixes, features or breaking changes are released.

You can check the changelog on the [releases](https://github.com/contentful/contentful.js/releases) page.

## Migration from contentful.js 2.x and older

contentful.js 3.x was a major rewrite, with some API changes. While the base functionality remains the same, some method names have changed, as well as some internal behaviors.

See the [migration guide](MIGRATION.md) for more information.

## Support

If you have a problem with this library, please file an [issue](https://github.com/contentful/contentful.js/issues/new) here on Github.

If you have other problems with Contentful not related to this library, you can contact [Customer Support](https://support.contentful.com).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

## License

MIT
