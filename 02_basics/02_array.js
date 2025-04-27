//ARRAYS=> FURTHER CONTINUED

const Marvel =["thor","ironman","spiderman"]
const dc =["superman","batman","flash"];


// ARRAY INSIDE A ARRAY
Marvel.push(dc);   //IT WONT MERGE TWO ARRAYS    
console.log(Marvel);


//*****************CONCATINATION******************************* */
//TO CONCATINATE TWO STRINGS
const AllHero =Marvel.concat(dc);
console.log(AllHero);

//SPREAD => EASY WAY TO CONCATINATE (MOSTLY USED)
const AllNewHero =[...Marvel , ...dc];
console.log(AllNewHero);


//FLAT => TO SPREAD OUT A NESTED ARRAY IN A SINGLE ARRAY
const Arr =[1,2,3,[4,5],6,7,[8,9,[10,11]]];
const NewArr =Arr.flat(Infinity);
console.log(NewArr);


//***********************CHECK AND CONVERT INTO ARRAY**************** */

//Array.isArray()  => TO CHECK WHETHER IT IS ARRAY OR NOT
console.log(Array.isArray(dc));
console.log(Array.isArray("ADNAN"));


//****************** FROM & TO WORKS DIFFERENTLY 

//Array.from() =>TO CONVERT INTO AN ARRAY
console.log(Array.from("adnan"));
//IF NOT POSSIBLE => RETURNS EMPTY ARRAY
console.log(Array.from(100));

//Array.of() => TO CONVERT ANY SET INTO AN ARRAY
console.log(Array.of("ADNAN","adnan",100,200));



