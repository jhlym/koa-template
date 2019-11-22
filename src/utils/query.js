import pool from '../config/db.config';

// TODO: logging 추가
// 쿼리 호출 및 결과에 대해서 로깅 필요...
export default async sql => {
  const client = await pool.connect();
  const res = await client.query(sql);
  client.release();
  return res;
};
