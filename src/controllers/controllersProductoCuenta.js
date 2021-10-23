const { Pool } = require('pg');

//PARA CONECTAR A LA BASE DE DATOS DE POSTGRES
const pool = new Pool({
    host:'34.125.236.207',
    user:'postgres',
    password:'postgres',
    database:'bbva',
    port:'5432'
})

//FUNCION PARA OBTENER LOS PRODUCTOS DE LA BASE DE DATOS
const getProductosCuentas = async (req, res) => {
    const id = req.params.id
    const response = await pool.query('SELECT * FROM producto_cuenta');
    res.status(200).json(response.rows[0]);
}

const createProductosCuentas = async (req, res) => {
    const { idUser, tipoCuenta, numeroCuenta, saldoCuenta } = req.body;

    const responseUser = await pool.query('SELECT * FROM users WHERE id = $1', [idUser])
    if(!responseUser.rows){
        res.json({
            error: `Usuario no encontrado`
        });
        return;
    }
    const response = await pool.query('INSERT INTO producto_cuenta (iduser, tipo_de_cuenta, numero_de_cuenta, saldo_de_cuenta)VALUES ($1, $2, $3, $4)', [idUser, tipoCuenta, numeroCuenta, saldoCuenta]);
            res.json({
                message: 'Producto agregado exitosamente'
            });
    
};

module.exports = {
    getProductosCuentas,
    createProductosCuentas
}