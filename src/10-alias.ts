(()=> {

  type UserID = string | number | boolean; // Creo mi propio tipo
  let userId: UserID;

  // Literal types
  type Sizes = 'S' | 'M' | 'L';
  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'S';
  shirtSize = 's'; // error

  function greeting(userId: UserID, size: Sizes) {
    if (typeof userId === 'string'){
      console.log(userId.toLowerCase())
    }
  }




})();
