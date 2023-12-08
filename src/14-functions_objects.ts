(()=>{

  const login = (
    data: {
      email:string,
      password: string
    }
  ) => {

    console.log(data.email,data.password);
  }

  login({
    email:'nahu@gmail.com',
    password:'122314'
  })



})();
