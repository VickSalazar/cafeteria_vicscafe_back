var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config(); // Requiero de la dependencia para utilizar la base de datos

// BD
var pool = require('./models/bd');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/admin/login'); // login.js

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin/login', loginRouter);

// Prueba de la BD mientras no hay formularios
// Select
/*
pool.query('select * from productos ').then(function
  (resultados) {
  console.log(resultados)
});
*/

// Insert - Chequeo desde phpMyAdmin si se insertó
/*
var obj = {
  nombre: 'GREEK SUMMER',
  tipo_producto: 'TÉ',
  marca: 'AGATHA LIVING TEA',
  proveedor: 'AGUSTINA RUIZ',
  pais_origen: 'ARGENTINA',
  region_origen: '-',
  varietal: '-',
  beneficio: '-',
  notas: 'TÉ VERDE SENCHA, FLORES DE AZAHAR, CÁSCARA DE NARANJA, SALVIA, FLORES DE ACIANO Y MIEL NATURAL',
  altitud: '-',
  precio_pesos_arg: '3000',
  peso_gramos: '60'
}

pool.query('insert into productos set ?', [obj]).then
  (function (resultados) {
    console.log(resultados)
  });
 */


// Update - Chequeo desde phpMyAdmin si se modificó
/*
var id = 5;
var obj = {
  precio_pesos_arg: '3200',
  proveedor: 'Agustina Reina'
}

pool.query("update productos set ? where id=?", [obj, id]).then(function (resultados) {
  console.log(resultados);
});
*/


// Delete - Chequeo desde phpMyAdmin si se eliminó
/*
var id = 5;

pool.query("delete from productos where id = ?", [id]).then(function (resultados) {
  console.log(resultados);
});
*/

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
