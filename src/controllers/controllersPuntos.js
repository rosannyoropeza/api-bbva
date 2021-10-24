const pool  = require('../conection/conectionPg');

//FUNCION PARA OBTENER LOS PRODUCTOS DE LA BASE DE DATOS
const getPuntos = async (req, res) => {
    const id = req.params.id
    const response = await pool.query('SELECT * FROM productos_puntos WHERE iduser = $1', [id]);
    res.status(200).json(response.rows);
};

module.exports = {
    getPuntos
}