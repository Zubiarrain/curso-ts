(() => {

  let myNull = null; // tipo any
  let myUndefined = undefined; // tipo any

  let myNull2: null; // tipo null
  let myUndefined2: undefined; // tipo undefined

  let myNumber: number | null;
  myNumber = 12;

  function hi(name:string | null){
    let hello = 'Hola ';
    if (name){
      hello += 'name'
    } else {
      hello += 'nobody'
    }
    console.log(hello)
  }

  function hiV2(name:string | null){
    let hello = 'Hola ';
    hello += name?.toLocaleLowerCase() || 'nobody';
    console.log(hello)
  }

})();
