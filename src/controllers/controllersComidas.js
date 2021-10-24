const pool  = require('../conection/conectionPg');

//FUNCION PARA OBTENER UN USUARIO DE ACUERDO A SU ID EN LA BASE DE DATOS
const getComidas = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM producto_comida WHERE iduser = $1', [id])
    res.json(response.rows);
}

module.exports = {
    getComidas
}