// Dependencies
import Koa from 'koa'
import mongoose from 'mongoose'
import logger from 'koa-logger'
import bodyParser from 'koa-bodyparser';
import convert from 'koa-convert'
import serve from 'koa-static'
import Router from 'koa-router'
import session from 'koa-generic-session'
import mount from 'koa-mount'
import passport from 'koa-passport'

import users from './routes/users'
import companies from './routes/companies'

// Creates application and apply all routers to the app:
const app = new Koa()
const api = new Router({
  prefix: '/api'
})
api
  .use('/users', users.routes())
  .use('/companies', companies.routes())


// connect to the database
import database from './config/database'
mongoose.connect(database.url)
mongoose.connection.on('error', console.error)



// trust proxy
app.proxy = true
// sessions
app.keys = ['your-session-secret']

// authentication
require('./auth')
app.use(passport.initialize())
app.use(passport.session())

app
  .use(logger()) // log requests, should be at the beginning
  .use(bodyParser())
  .use(api.routes())
  .use(api.allowedMethods())
  .use(convert(session())) // session not needed for an API??????
  .use(convert(serve(__dirname + '/public'))) // for static files like images


// Start the application.
app.listen(3000, () => console.log('server started 3000'))
export default app

