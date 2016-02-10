'use strict'
var path = require("path")
var _ = require("lodash")

var env = process.env.NODE_ENV = process.env.NODE_ENV || "development"

var base = {
  app: {
    root: path.normalize(path.join(__dirname, "/..")),
    env: env,
  },
}

var specific = {
  development: {
    app: {
      port: 3000,
      name: "KOA API - Development",
      keys: [ "super-secret-hurr-durr" ],
    },
    mongo: {
      url: "mongodb://localhost/koaapi_dev",
    },
  },
  test: {
    app: {
      port: 3001,
      name: "KOA API - Test",
      keys: [ "super-secret-hurr-durr" ],
    },
    mongo: {
      url: "mongodb://localhost/koaapi_test",
    },
  },
  production: {
    app: {
      port: process.env.PORT || 3000,
      name: "KOA API - Production",
    },
    mongo: {
      url: "mongodb://localhost/koaapi",
    },
  },
}

module.exports = _.merge(base, specific[env])