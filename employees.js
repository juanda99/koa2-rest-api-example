// Export a function that takes the router
export default (router, prefix) => {
  // Set a prefix of our api, in this case locations
  const api = 'employees'
  router.prefix(`/${prefix}`);

  // GET to all locations.
  router.get('/',  (ctx, next) =>
      ctx.body = 'hello employees');
    // ctx.body = await Location.find());
  // POST a new location.
  router.post('/', async (ctx, next) =>
    ctx.body = await new Location(ctx.request.body).save());
  // Routes to /locations/id.
  router.get('/:id', async (ctx, next) =>
    ctx.body = await Location.findById(ctx.params.id));
  // PUT to a single location.
  router.put('/:id', async (ctx, next) =>
    ctx.body = await Location.findByIdAndUpdate(ctx.params.id, ctx.body));
  // DELETE to a single location.
  router.delete('/:id', async (ctx, next) =>
    ctx.body = await Location.findByIdAndRemove(ctx.params.id));

  return router;
}