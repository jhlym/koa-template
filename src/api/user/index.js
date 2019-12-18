import Router from 'koa-router';
import * as userCtrl from './user.ctrl';

const user = new Router();
user.post('/', userCtrl.RegisterUser);
user.get('/:uid', userCtrl.SearchUser);

export default user;
