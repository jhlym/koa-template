import { Query } from '../../utils';
/**
 * 사용자 등록
 * POST /api/vi/user
 * @param {*} ctx
 * {
 *  uid: 'test',
 *  pwd: 'test'
 * }
 *
 */
export const registerUser = async ctx => {
  const { uid, pwd, name, email } = ctx.request.body;
  // TODO: 비밀번호 암호화 필요
  Query(
    `INSERT INTO users (uid, pwd, name, email) VALUES ('${uid}', '${pwd}', '${name}', '${email}')`,
  );
  ctx.redirect('/views/login.html');
};

/**
 * 사용자 조회
 * GET api/vi/user/:id
 * @param {*} ctx
 */
export const SearchUser = async ctx => {
  const { uid } = ctx.params;
  const res = await Query(`select uid, pwd from users where uid = '${uid}'`);
  ctx.body = res.rows;
};

/**
 * 사용자 업데이트
 * PATCH /api/vi/user/:id
 * @param {*} ctx
 */

/**
 * 사용자 삭제
 * DELETE /api/vi/user/:id
 * @param {*} ctx
 */
