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
  const { uid, pwd } = ctx.request.body;
  Query(`INSERT INTO users (uid, pwd) VALUES ('${uid}', '${pwd}')`)
    .then(res => {})
    .catch(e => {
      console.dir(e);
    });
};

/**
 * 사용자 조회
 * GET api/vi/user/:id
 * @param {*} ctx
 */

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
