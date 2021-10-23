const { Router } = require('express');
const router = Router();
const { getUsers, createUser, getUserById, deleteUser, updateUser } = require('../controllers/controllersUsers');
const { getProductosCuentas, createProductosCuentas } = require('../controllers/controllersProductoCuenta');
const { getPuntos } = require('../controllers/controllersPuntos');
const { getTarjetas } = require('../controllers/controllersTarjetas');
const { getServicios } = require('../controllers/controllersServicios');
const { getComidas } = require('../controllers/controllersComidas');
const { getTransporte } = require('../controllers/controllersTransporte');
const { getRenta } = require('../controllers/controllersRenta');
const { getViajes } = require('../controllers/controllersViajes');
const { getOtrosIngresos } = require('../controllers/controllersOtrosIngresos');
const { getOtrosGastos } = require('../controllers/controllersOtrosGastos');

//METODO PARA OBTENER LOS DATOS DE LA BASE DE DATO SEGUN LA RUTA
router.get('/users', getUsers);
router.get('/productos/:id', getProductosCuentas);
router.get('/puntos/:id', getPuntos);
router.get('/tarjetas/:id', getTarjetas);
router.get('/servicios/:id', getServicios);
router.get('/comidas/:id', getComidas);
router.get('/transporte/:id', getTransporte);
router.get('/renta/:id', getRenta);
router.get('/viajes/:id', getViajes);
router.get('/ingresos/:id', getOtrosIngresos);
router.get('/gastos/:id', getOtrosGastos);


//METODO PARA OBTENER UN USUARIO DE LA BASE DE DATO SEGUN LA RUTA
router.get('/users/:id', getUserById);

//METODO PARA CREAR UN USUARIO DATOS SEGUN LA RUTA SEGUN LA RUTA
router.post('/users', createUser);
router.post('/productos',createProductosCuentas);

//METODO PARA ACTUALIZAR UN USUARIO EN LA BASE DE DATO SEGUN LA RUTA
router.put('/users/:id', updateUser);

//METODO PARA ELIMINAR UN USUARIO EN LA BASE DE DATO SEGUN LA RUTA
router.delete('/users/:id', deleteUser);

module.exports = router;