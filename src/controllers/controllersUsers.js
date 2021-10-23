const { Pool } = require('pg');

//PARA CONECTAR A LA BASE DE DATOS DE POSTGRES
const pool = new Pool({
    host:'34.125.236.207',
    user:'postgres',
    password:'postgres',
    database:'bbva',
    port:'5432'
})

//FUNCION PARA OBTENER LOS USUARIOS DE LA BASE DE DATOS
const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM users');
    res.status(200).json(response.rows);
}

//FUNCION PARA OBTENER UN USUARIO DE ACUERDO A SU ID EN LA BASE DE DATOS
const getUserById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id])
    res.json(response.rows[0]);
}

//FUNCION PARA CREAR USUARIOS EN LA BASE DE DATOS
const createUser = async (req, res) => {
    const { phone, name, password} = req.body;
    const response = await pool.query('INSERT INTO users (phone, name, password) VALUES ($1, $2, $3)', [phone, name, password]);
    console.log(response);
    res.json({
        message: 'User added successfully',
        body: {
            users: { phone, name,  password}
        }
    });
};

//FUNCION PARA ACTUALIZAR UN USUARIO EN LA BASE DE DATOS DE ACUERDO A SU ID
const updateUser = async (req, res) => {
    const id = req.params.id;
    const { phone, name,  password } = req.body;
    const response = await pool.query('UPDATE users SET phone = $1, name = $2,  password = $3 WHERE id = $4', [
        phone, 
        name,  
        password,
        id
    ])
    console.log(response);
    res.json('User updated successfully');
};

//FUNCION PARA ELIMINAR UN USUARIO EN LA BASE DE DATOS
const deleteUser = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM users WHERE id = $1', [id]);
    console.log(response);
    res.json(`User ${id} delete successfully`);
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}