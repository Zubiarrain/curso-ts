(()=>{

  let myDynamicVar: any; // Se aconseja que no se use

  myDynamicVar = 100;
  myDynamicVar = 'sadasd';
  myDynamicVar = true;
  myDynamicVar = [1,5,2,4];
  myDynamicVar = {};

  const rta = (myDynamicVar as string).toLowerCase(); // casteo la variable a un string

  const rta2 = (<number>myDynamicVar).toFixed(); // otra forma de casteo

})();
