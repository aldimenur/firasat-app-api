const mysql = require("mysql");

const localData = {
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
};

const serverData = {
  host: "103.247.8.34",
  user: "firw7522_aldimenur",
  password: "[#?6oICNd4_J",
  database: "firw7522_firasat",
};

const db = mysql.createConnection({
  ...localData,
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected! to " + localData.database);
});
