const { Pool } = require('pg');

//PARA CONECTAR A LA BASE DE DATOS DE POSTGRES
const pool = new Pool({
    host:'34.125.236.207',
    user:'postgres',
    password:'postgres',
    database:'bbva',
    port:'5432'
})

//FUNCION PARA OBTENER UN USUARIO DE ACUERDO A SU ID EN LA BASE DE DATOS
const getOtrosGastos = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM producto_otros_gastos WHERE iduser = $1', [id])
    res.json(response.rows);
}

module.exports = {
    getOtrosGastos
}