(()=> {

  let userId: string | number;
  userId = 26;
  userId = 'sada';

  function greeting(myText: string | number) {
    if (typeof myText === 'string'){
      myText.toLowerCase()
    } else {
      myText.toFixed()
    }
  }


})();
