var pg = require("pg");
var conString = "pg://postgres:postgres@localhost:5432/LoginTest";

var client = new pg.Client(conString);
client.connect();

console.log('conexão feita');

//client.query("CREATE TABLE IF NOT EXISTS SignIn(login varchar(30), senha varchar(30))");
//client.query("INSERT INTO SignIn(login, senha) values($1, $2)",['teste', 'teste']);