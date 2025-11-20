import mysql from "mysql2/promise"
import fs from "fs"

const conexao = await mysql.createConnection({
  host: 'ogeorussecurity-mgs350084-6fb6.c.aivencloud.com',
  port: 21457,
  user: 'Mgs',
  password: 'Potato10!',
  database: 'defaultdb',
  ssl: {
    ca: fs.readFileSync('../ca.pem')
  }
});

export { conexao };

/*
BANCO MGS
const conexao = await mysql.createConnection({
    local: 'localhost',        
    user: 'Mgs',
    password: 'Potato10!',
    database: 'Mgs'
});

BANCO FREI
const conexao = await mysql.createConnection({
    local: 'localhost',
    user: 'root',
    password: '1234',
    database: 'Tcc'
});

BANCO ONLINE

const conexao = await mysql.createConnection({
  host: 'ogeorussecurity-mgs350084-6fb6.c.aivencloud.com',
  port: 21457,
  user: 'Mgs',
  password: 'Potato10!',
  database: 'defaultdb',
  ssl: {
    ca: fs.readFileSync('./ca.pem')
  }
});

*/
