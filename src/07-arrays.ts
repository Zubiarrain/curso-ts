(() => {

  let prices = [1,2,5,1,4,2,5,3]; // numer []

  let array = [1,2,5,1,4,2,5,'hola',true] // (string | boolean | number) []

  let products: (string | number | boolean)[] = ['hola',true]
  products.push(12)

  prices.map(item => item * 2)
  //products.map(item => item * 2) --> tendría un error

})();
