import Router from 'koa-router';
import token from './token';
import user from './user';
import auth from './auth';

const api = new Router();

api.use('/token', token.routes());
api.use('/user', user.routes());
api.use('/auth', auth.routes());

export default api;
