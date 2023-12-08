(()=> {

  type Sizes = 'S' | 'M' | 'L';

  type Product = {
    title:string,
    createdAt:Date,
    stock:number,
    size?:Sizes,
  };

  const products: any[] = [];

  const addProduct = (data: Product) => {
    products.push(data)
  }

  addProduct({
    title:'P1',
    createdAt: new Date(),
    stock:10
  })

  console.log(products)

})();
