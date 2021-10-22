const express = require('express');
const app = express();
const cors = require('cors');

//MIDDLEWARES (FUNCIONES QUE SE EJECUTAN ANTES DE LA RUTA)
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

//ROUTES 
app.use(require('./routes/routes'));


//SERVER
app.listen(3000);
console.log('Server on port 3000');