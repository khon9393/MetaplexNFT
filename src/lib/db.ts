import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default pool;


export async function query(text, params) {
  const res = await pool.query(text, params);
  return res.rows;
<<<<<<< HEAD
}
=======
}

>>>>>>> 512e5360dcfc79e95f622d3ff68c966bfb184451
