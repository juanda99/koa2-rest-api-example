import User from '../models/user'
var router = require('koa-router')();
router
  .get('/', async ctx => ctx.body = await User.find({}))
  .post('/', async (ctx, next) =>
    ctx.body = await new User(ctx.request.body).save())
  // Routes to /locations/id.
  .get('/:id', async (ctx, next) =>
    ctx.body = await User.findById(ctx.params.id))
  // PUT to a single location.
  .put('/:id', async (ctx, next) =>
    ctx.body = await User.findByIdAndUpdate(ctx.params.id, ctx.body))
  // DELETE to a single location.
  .delete('/:id', async (ctx, next) =>
    ctx.body = await User.findByIdAndRemove(ctx.params.id))

module.exports = router;
