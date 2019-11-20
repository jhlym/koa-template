import Router from 'koa-router';
import * as tokenCtrl from './token.ctrl';

const token = new Router();

token.get('/issue', tokenCtrl.issue);

export default token;
