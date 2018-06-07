const Koa = require('koa');
const Router = require('koa-router');
const ms = require('ms')

const app = new Koa();
const router = new Router();

async function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

router.get('/time/:ms', async (ctx, next) => {

  await timeout(ctx.params.ms);
  ctx.response.type = 'html'
  ctx.response.body = `request cost ${ms(parseInt(ctx.params.ms))}`

});


app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);