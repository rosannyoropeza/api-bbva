const pool  = require('../conection/conectionPg');
//FUNCION PARA OBTENER UN USUARIO DE ACUERDO A SU ID EN LA BASE DE DATOS
const getViajes = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM productos_viajes WHERE iduser = $1', [id])
    res.json(response.rows);
};

module.exports = {
    getViajes
}