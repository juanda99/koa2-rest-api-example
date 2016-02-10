// Dependencies
import Koa from 'koa'
import mongoose from 'mongoose'
import logger from 'koa-logger'
// import parser from 'koa-bodyparser';
import convert from 'koa-convert'
import serve from 'koa-static'
import Router from 'koa-router'
import session from 'koa-generic-session'
import mount from 'koa-mount'

// A seperate file with my routes.
import routingUsers from './users'
import routingEmployees from './employees'

// config
const config = require("./config/config")

// connect to the database
mongoose.connect(config.mongo.url)
mongoose.connection.on('error', console.error)

// Creates the application.
const app = new Koa()
// how to use koa-mount to make this work? Arghhhhh!
//const api = new Koa();
//api.use(convert(mount ('/api', app)))

// trust proxy
//app.proxy = true
// sessions
//app.keys = ['your-session-secret']


// Applies all routes to the router.
const user = routingUsers(Router(), 'api/users/')
const employee = routingEmployees(Router(), 'api/employees/')

app
  .use(logger()) // log requests, should be at the beginning
  .use(user.routes()) // asign routes
  .use(employee.routes()) // asign routes
  .use(user.allowedMethods())
  .use(employee.allowedMethods())
  .use(convert(session())) // session not needed for an API??????
  .use(convert(serve(__dirname + '/public')))   // for static files like images


// Start the application.
app.listen(3000, () => console.log('server started 3000'))
export default app

