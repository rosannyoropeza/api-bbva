const { Pool } = require('pg');

//PARA CONECTAR A LA BASE DE DATOS DE POSTGRES
const pool = new Pool({
    host:'34.125.236.207',
    user:'postgres',
    password:'postgres',
    database:'bbva',
    port:'5432'
});

//FUNCION PARA OBTENER LOS PRODUCTOS DE LA BASE DE DATOS
const getPuntos = async (req, res) => {
    const id = req.params.id
    const response = await pool.query('SELECT * FROM productos_puntos WHERE iduser = $1', [id]);
    res.status(200).json(response.rows);
};

module.exports = {
    getPuntos
}