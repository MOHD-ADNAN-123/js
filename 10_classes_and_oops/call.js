function setUserName(username){
    this.username =username;
}

function createUser(username ,email,password){
    this.email=email;
    this.password=password;
    setUserName.call(this,username); //YOU HAVE TO USE .CALL METHOD WHICH TAK THIS AS A FIRST PARAMETER
}

//IT WONT SHOW YOU THE USERNAME WHILE PRINTING

const chai =new createUser("chai","chai@fb.com","123");
console.log(chai);


//WHEN YOU USE .CALL METHOD ==> NOW IT WILL SHOW 
//YOU HAVE TO USE this AS A FIRST PARAMETER