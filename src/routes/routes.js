const { Router } = require('express');
const router = Router();
const { getUsers, createUser, getUserById, deleteUser, updateUser } = require('../controllers/controllers');

//METODO PARA OBTENER LOS USUARIOS DE LA BASE DE DATO SEGUN LA RUTA
router.get('/users', getUsers);

//METODO PARA OBTENER UN USUARIO DE LA BASE DE DATO SEGUN LA RUTA
router.get('/users/:id', getUserById);

//METODO PARA CREAR UN USUARIO DATOS SEGUN LA RUTA SEGUN LA RUTA
router.post('/users', createUser);

//METODO PARA ACTUALIZAR UN USUARIO EN LA BASE DE DATO SEGUN LA RUTA
router.put('/users/:id', updateUser);

//METODO PARA ELIMINAR UN USUARIO EN LA BASE DE DATO SEGUN LA RUTA
router.delete('/users/:id', deleteUser);

module.exports = router;