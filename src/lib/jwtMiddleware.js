import jwt from 'jsonwebtoken';
import Token from './handleToken';

const jwtMiddleware = async (ctx, next) => {
  next();
  const token = ctx.cookies.get('access_token');
  if (!token) return next();
  try {
    const decoded = Token.decode(token);
    ctx.state.user = {
      _id: decoded._id,
      username: decoded.username,
    };
    const now = Math.floor(Date.now() / 1000);
    if (decoded.exp - now < 60 * 60 * 24 * 3.5) {
      // const user = await User.findById(decoded._id);
      // const token = user.generateToken();
      ctx.cookies.set('access_token', token, Token.config);
    }
    return next();
  } catch (e) {
    return next();
  }
};

export default jwtMiddleware;
