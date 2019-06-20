const crypto = require("crypto");
const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");

const port = process.env.PORT || 3000;
const saltKey = "123456";

const app = new Koa();
app.use(bodyParser());

function signature(data) {
  const hash = crypto
    .createHmac("sha256", saltKey)
    .update(JSON.stringify(data), "utf8")
    .digest("hex");

  const base64 = new Buffer(hash).toString("base64");

  return base64;
}

const router = new Router();
router.post("/signature", (ctx, next) => {
  const data = ctx.request.body;
  ctx.body = signature(data);
});

router.post("/transfer", (ctx, next) => {
  const signatureStr = ctx.request.header["x-signature"];
  const data = ctx.request.body;
  const hash = signature(data);

  if (hash !== signatureStr) {
    ctx.status = 400;
    ctx.body = "Invalid signature";
  } else {
    ctx.body = "success!";
  }
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(port);
