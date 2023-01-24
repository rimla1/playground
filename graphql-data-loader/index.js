require("dotenv").config();

const knex = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: 5432,
    user: `${process.env.PG_USER}`,
    password: `${process.env.PG_PASSWORD}`,
    database: `${process.env.PG_DATABASE_NAME}`,
  },
});

const addData = async () => {
  const result = await knex("books").insert({ name: "edin" }).returning("*");
  console.log(result);
};

const express = require("express");

const PORT = 3000;

const app = express();

app.listen(PORT, () => {
  addData();
  console.log(`Up and running on port ${PORT}`);
});
