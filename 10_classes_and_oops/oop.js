//*************  Object Literals ==> A single object ********

const user = {
    username : "ADNAN",
    password : "1234",
    LoginCount : 8,
    SignedIn : true,

    //method
    getUserDetails : function(){
        console.log("DETAILS OF USERS ARE TAKEN FROM DATABASE");
        //this ==> to give the current context otherewise it will give error
        console.log(`Username: ${this.username}`);
        //it will give the current context => user object
        console.log(this);    
    }
}
//user.getUserDetails()


//**************  Constructor function  ************

function User(username, loginCount, isLoggedIn){
    this.username = username;  
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    //return this  => NO NEED TO WRITE IT (IMPLICITELY DEFINED)
}

//new keyword is imp to make a new instance everytime ==> otherwise it will override values

//making its objects
const userOne = new User("ADNAN", 12, true)
const userTwo = new User("JS ", 11, false)
console.log(userOne);
console.log(userTwo);

