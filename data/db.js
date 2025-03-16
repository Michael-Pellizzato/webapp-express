import mysql from "mysql2";

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PSW,
  database: process.env.DB_DATA,
});

connection.connect((err) => {
  if (err) throw err;

  console.log("Connessione al DB avvenuta con successo");
});

export default connection;
