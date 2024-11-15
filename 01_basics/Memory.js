
// +++++++++++++++++++++++++++++++++++++  MEMORY ++++++++++++++++++++++++++++++++++++++++++++++

//STACK MEMORY AND HEAP MEMORY

//PRIMITIVE DATATYPE --> STACK MEMORY               NON PRIMITIVE DATATYPE --> HEAP MEMORY



//HEAP MEMORY  ---> THE REFRENCE GET COPIED 

let userOne ={                 //  ---> OBJECT ONE
    name : "adnan",
    email : "adnan1000@google.com",
}

let userTwo = userOne;

//WHEN WE CHANGE ONE VALUE, THE OTHER WILL AUTOMATICALLY CHANGE
userTwo.email= "akshay@google"
console.log(userTwo.email);
console.log(userOne.email);


//STACK MEMORY ---> VALUE GET COPIED  , ON CHANGING ONE VALUE THERE WILL BE NO EFFECT ON ANOTHER

let a=10
let b =a
b=5
console.log(a);
console.log(b);

