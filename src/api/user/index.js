import Router from 'koa-router';
import * as userCtrl from './user.ctrl';

const user = new Router();
user.post('/', userCtrl.registerUser);

export default user;
