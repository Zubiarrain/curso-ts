(()=>{

  let productPrice = 100; // Inferido
  productPrice = 12;
  console.log('productPrice', productPrice);

  let customerAge: number = 28;
  customerAge = customerAge + 1;
  console.log('customerAge', customerAge)

  let productInStock: number;
  console.log('productInStock',productInStock) // Ya advierte que no está asignada

  if (productInStock > 10) { // avisa el error
    console.log('is greater')
  }

  let discount = parseInt('asdas');
  console.log('discount',discount); // --> NaN: entra en categoría de number

  let hex = 0xfff;
  console.log('hex',hex)

  let bin = 0b1010;
  console.log('bin',bin)
})();
