import jwt from 'jsonwebtoken';

export const issue = ctx => {
  const token = jwt.sign(
    {
      id: 'test',
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '3d', // 3일 동안 유효함
    },
  );
  ctx.cookies.set('accessToken', token, {
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
    httpOnly: true,
  });
  ctx.body = JSON.stringify(token);
};
