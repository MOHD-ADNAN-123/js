const accountId = 12212
let accountEmail = "adnan10002@gmail.com"  //LET AND VAR IS USED FOR VARIABLE 
var accountPassword = "12345"              //PREFERABLY LET
accountCity = "DELHI"    //DO NOT USE THIS METHOD , ALTHOUGH IT WORKS BUT NOT PREFERABLE AT ALL
let accountState;         // WE CAN DEFINE IT AFTERWARDS

//accountId = 2 
//CONST VALUE CANNOT BE CHANGED


/*
prefer not to use var because of issue in block scope
*/


//TO PRINT ONE VALUE
console.log(accountId);
//TO PRINT MULTIPLE VALUE
console.table([accountId,accountEmail,accountPassword,accountState]);