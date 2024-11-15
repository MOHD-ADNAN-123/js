let score = "33"

console.log(typeof score);
//console.log(typeof (score));  CAN ALSO WRITE LIKE THIS

//TO CONVERT IT FROM STRING TO NUMBER
let value = Number(score)
console.log(typeof value);

//SIMILARLY WE HAVE String() , Boolean() etc


//IMPORTANT
let random = "abcd"
let val = Number(random)
console.log(val);     
/* THE OUTPUT IS NaN (NOT A NUMBER) WHOSE TYPE IS NUMBER(a little confusing) 
NULL --> 0
UNDEFINED --> NaN
FOR BOOLEAN -->  True-->1 , False-->0 */ 


//Boolean()
let a = 1
let Passs = Boolean(a)
console.log(Passs);

/*
 1--> true
0--> false
""--> false
"AnythingInsideIt"-->true
*/


//String()
let anynum = 10
let StringAnynum = String(anynum)
console.log(StringAnynum);
console.log(typeof StringAnynum);

