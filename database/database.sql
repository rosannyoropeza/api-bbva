--PARA CREAR BASE DE DATOS
--CREATE DATABASE bbva;

--PARA CREAR TABLA A LA BASE DE DATOS
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    phone NUMERIC(30,0) NOT NULL,
    name VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
);

--PARA INSERTAR DATOS A LA TABLA DE LA BASE DE DATOS
INSERT INTO users (phone, name, password) VALUES
    (3123904846,'rosanny Oropeza', 'rosanny.oropeza82@gmail.com'),
    (3118002627,'jonathan Mangarret', 'jmangarret@gmail.com');