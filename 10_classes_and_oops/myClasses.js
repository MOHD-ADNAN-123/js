// CLASSES IN JAVASCRIPT 

// class User{
//     //Constructor
//     constructor(username,email,password){
//         this.username =username;
//         this.email=email;
//         this.password=password;
//     }

//     //Method
//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai= new User("adnan","ad@fb.com","1234");
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());


//IF WE DONT USE CLASSES 
//WE WILL DO THIS WORK USING FUNCTION LIKE GIVEN BELOW

// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

//to make methods
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
//second method
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());
