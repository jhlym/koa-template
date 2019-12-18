/**
 * POST /api/auth/login
 * {
 *  uid: 'test',
 *  pwd: 'pwd'
 * }
 */
export const login = async ctx => {
  const { uid, pwd } = ctx.request.body;
  // TODO: id/pwd 비교
  // 성공: token 발급
  // 실패: redirect
};
