const { Pool } = require('pg');

//PARA CONECTAR A LA BASE DE DATOS DE POSTGRES
const pool = new Pool({
    host:'34.125.236.207', 
    user:'postgres',
    password:'postgres',
    database:'bbva',
    port:'5432'
})

module.exports = pool;