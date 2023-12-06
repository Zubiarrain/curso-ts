let myProductName = 'Product 1'; // --> Deduce que es un string sin decírselo (inferencia)
let myProductPrice = 123;


myProductName = 'change';
myProductName.toLowerCase();
myProductPrice.toFixed();

const myProductStock = 1000; // --> No infiere su tipo, sino su valor ya que este no cambia
