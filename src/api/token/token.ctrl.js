import Token from '../../lib/handleToken';

export const issue = ctx => {
  const token = Token.create({
    id: 'test',
  });

  ctx.cookies.set('access_token', token, Token.config);

  ctx.body = JSON.stringify(token);
};
