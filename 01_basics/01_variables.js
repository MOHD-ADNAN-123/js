const accountId = 12212
let accountEmail = "adnan10002@gmail.com"
var accountPassword = "12345"
accountCity = "DELHI"    //DO NOT USE THIS METHOD , ALTHOUGH IT WORKS BUT NOT PREFERABLE AT ALL
let accountState;

//accountId = 2 
//WE CANNOT DO THIS AS IT WAS ASSIGNED TO A CONSTANT 


/*
prefer not to use var because of issue in block scope
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountState]);