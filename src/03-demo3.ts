// Se usa una funcion anónima autoejecutada para encerrar las variables en un scope y que no se produzca un choque en la declaracion de variables con el mismo nombre entre distintos archivos
(() =>{

  let myProductName = 'Product 1';
  let myProductPrice = 123;

})()

