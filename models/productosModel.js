// Prueba de la BD mientras no hay formularios
//  BD
//var pool = require('./models/bd');
//
// Para cada select insert update delete hacer una función
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