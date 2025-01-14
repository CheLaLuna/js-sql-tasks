import postgres from "postgres";

const config = {
  host: "127.0.0.1",
  user: "postgres",
  password: "",
  port: 5432,
};

// BEGIN (write your solution here)
const sql = postgres(config);

async function solution() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS articles (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255),
        description VARCHAR(255)
      );
    `;

    await sql`
      INSERT INTO articles (title, description)
      VALUES ('AAAAAAAAAAAAAAAAAAAA', 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
    `;

    console.log("Успех.");
  } catch (err) {
    console.error("Ошибка:", err);
  } finally {
    await sql.end();
  }
}

export default solution;
// END
