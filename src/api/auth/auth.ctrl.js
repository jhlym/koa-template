import { Query } from '../../utils';
import Token from '../../lib/handleToken';

/**
 * POST /api/auth/login
 * {
 *  uid: 'test',
 *  pwd: 'pwd'
 * }
 */
export const login = async ctx => {
  const { uid, pwd } = ctx.request.body;
  // TODO: pwd 암호화하여 id/pwd 비교
  const res = await Query(
    `SELECT * FROM users WHERE uid = '${uid}' and pwd = '${pwd}'`,
  );
  // 성공
  if (res.rowCount > 0) {
    const existToken = ctx.cookies.get('access_token');
    // token이 없으면 토큰 발급
    if (!existToken) {
      const token = Token.create(res.rows[0]);
      ctx.cookies.set('access_token', token, Token.config);
    }
    ctx.redirect('/views/home.html');
  }
  // 실패
  else {
    ctx.redirect('/views/login.html');
  }
};
