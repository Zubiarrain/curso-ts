import { addProduct, calcStock, products } from "./product.service";

addProduct({
  title: 'P1',
  createdAt: new Date(),
  stock:5
});

addProduct({
  title: 'P2',
  createdAt: new Date(),
  stock:6
});

console.log(products);
console.log(calcStock());
