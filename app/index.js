//Dependencies
import Koa from 'koa'
import serve from 'koa-static'
import Router from 'koa-router'
import passport from 'koa-passport'
import users from './routes/users'
import companies from './routes/companies'
import middleware from './middleware'
import convert from 'koa-convert'

// Creates application and apply all routers to the app:
const app = new Koa()
const api = new Router({
  prefix: '/api'
})
api
  .use('/users', users.routes())
  .use('/companies', companies.routes())
app
  .use(api.routes()) // Important: routes before middleware!
  .use(api.allowedMethods())

// trust proxy
app.proxy = true
// sessions
app.keys = ['your-session-secret']


// authentication
require('./auth/auth')
app.use(passport.initialize())
app.use(passport.session())

app
  .use(middleware())
  .use(convert(serve(__dirname + '/public'))) // for static files like images


export default app