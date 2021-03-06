require('dotenv').config();

import Koa from 'koa';
import serve from 'koa-static';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
// import jwtMiddleware from './lib/jwtMiddleware';
import api from './api';

const { PORT } = process.env;
const app = new Koa();
const router = new Router();
const port = PORT || 4000;

app.use(logger());
app.use(serve(__dirname + '/static'));
router.use('/api/v1', api.routes());
app.use(bodyParser());
// app.use(jwtMiddleware);
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(port, () => {
  console.log('Listening to port %d', port);
});
