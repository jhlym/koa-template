import Router from 'koa-router';
import token from './token';

const api = new Router();

api.use('/token', token.routes());

export default api;
