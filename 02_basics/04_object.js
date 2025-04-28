//********************8OBJECT*********************** */

//DECLARATION
//1
const tinder =new Object()     //SINGELTON OBJECT
//console.log(tinder)

//2
const tinderUsers ={}         //NON SINGLETON OBJECT
//console.log(tinderUsers);



//DEFINING A OBJECT
const tinderUser ={
    id : "123abc",
    name: "ADNAN",
    LoggedIn : true
}   


//WE CAN DEFINE AN OBJECT INSIDE AN OBJECT
const regularName ={
    email : "adnan@gmail.com",
    full_name :{
        first_name :"Mohd",
        Last_name :"Adnan"
    }
}
//console.log(regularName.full_name);



//TO ADD OBJECTS 

//1=> *********Object.assign**********
const obj1 ={
    1:"a",
    2:"b"
}
const obj2 ={3:"c",4:"d"};
 
const obj3 = Object.assign({},obj1,obj2);  //{} OPTIONAL BUT A GOOD PRACTICE
//console.log(obj3);


//2 ************Spread operator*********
const obj4 ={...obj1,...obj2};
//console.log(obj4);


//WHEN THE DATA COMES FROM DATABASE => IT COMES AS ARRAY OF OBJECTS

const Arr =[{1:"adnan",2:"utkarsh",3:"akshay"},
    {email:"aa",name:"aaa",id:121},
    {rno:1123,mob:9369} ]
//TO ACCESS IT
//console.log(Arr[0]);

//************************************* */

//**********IMP METHODS*************** */

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  //RETURNS KEYS IN A LIST
// console.log(Object.values(tinderUser));//RETURNS VALUES IN A LIST
// console.log(Object.entries(tinderUser)); //ARRAYS INSIDE A ARRAY (id,values)

// console.log(tinderUser.hasOwnProperty('LoggedIn'));// TO CHECK WHETHER A PROPERTY EXIST OR NOT



//***************************DE-STRUCTURE**************** */

const course ={
    coursename: "CHAI AUR CODE",
    price: "999",
    teacher:"HITESH"
}

//TO PRINT ANY PROPERTY
//console.log(course.teacher);


//************************************************************* */
//DE STRUCTURE

//IF WE WANT TO USE IT MULTIPLE TIMES WE WILL USE THIS FOR MORE READABILITY
const {teacher: t} = course
console.log(t);

//SYNTAX => const {PROPERTY : SHORTNAME(OPTIONAL)} = objectName

//****************************************************************/


//**********************JSON  =>API ************************* */
//JUST AN INTRO 
//WE WILL LEARN COMPLETE AFTER SOMETIME
//KEY ARE STRING ALSO

// {
//     "name": "ADNAN",
//     "coursename": "JS IN HINDI"
//     "price": "FREE"
// }