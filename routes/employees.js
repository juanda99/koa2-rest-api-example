var router = require('koa-router')();
router
  .get('/',  (ctx, next) =>
      ctx.body = 'hello employees!')
  .post('/', async (ctx, next) =>
    ctx.body = await new Location(ctx.request.body).save())
  // Routes to /locations/id.
  .get('/:id', async (ctx, next) =>
    ctx.body = await Location.findById(ctx.params.id))
  // PUT to a single location.
  .put('/:id', async (ctx, next) =>
    ctx.body = await Location.findByIdAndUpdate(ctx.params.id, ctx.body))
  // DELETE to a single location.
  .delete('/:id', async (ctx, next) =>
    ctx.body = await Location.findByIdAndRemove(ctx.params.id))

module.exports = router;