const pool  = require('../conection/conectionPg');

//FUNCION PARA OBTENER LOS PRODUCTOS DE LA BASE DE DATOS
const getTarjetas = async (req, res) => {
    const id = req.params.id
    const response = await pool.query('SELECT * FROM productos_tarjetas WHERE iduser = $1', [id]);
    res.status(200).json(response.rows[0]);
};

module.exports = {
    getTarjetas
}