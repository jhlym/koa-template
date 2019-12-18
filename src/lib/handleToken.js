import jwt from 'jsonwebtoken';

// export const config = {
//   maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
//   httpOnly: true,
// };

// export const create = payload =>
//   jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '3d' });

// export const decode = token => jwt.verify(token, process.env.JWT_SECRET);

export default {
  config: {
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
    httpOnly: true,
  },
  create: payload =>
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '3d' }),
  decode: token => jwt.verify(token, process.env.JWT_SECRET),
};
