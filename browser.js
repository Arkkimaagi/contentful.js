// To understand why axios is vendored, check SETUP.md
var axios = require('contentful-sdk-core/vendor-browser/axios')
var contentful = require('./dist/contentful').default
module.exports = {
  createClient: function (params) {
    return contentful(axios, params)
  }
}
