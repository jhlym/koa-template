import Router from 'koa-router';
import token from './token';
import user from './user';

const api = new Router();

api.use('/token', token.routes());
api.use('/user', user.routes());

export default api;
