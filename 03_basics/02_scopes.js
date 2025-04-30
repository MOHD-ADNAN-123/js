//***********************SCOPES******************* */

let d =40

if(true){
    let a=10            // a,b,c are defined inside if
    const b=20          //they should be used inside if only
    var c=30 
}
//console.log(a);         
//console.log(b);
// console.log(c);   //but c(var) do not follow scope

//WE ALWAYS USE LET BECAUSE OF SCOPE


// d =>GLOBAL SCOPE => CAN BE USED INSIDE AND OUTSIDE
// a,b,c =>LOCAL SCOPE => CAN BE USED INSIDE ONLY


//*************PRIORITY******* */
let check =50
if(true){
    let check=20
    console.log(check);     //20
}
console.log(check);         //50
//******************************/


//***********NESTED SCOPE************** */
function one(){
    let username="Adnan"

    function two(){
        let website="youtube"
        console.log(username);    //Adnan 
    }
    //console.log(website);         //ERROR

    two();
}
one();

//Two can access username but One cannot access website
//**************************************** */


//*****************INTERESTING********************** */

console.log(addone(5)); //CALL BEFORE DECLARATION

function addone(num){           // 1st WAY OF DEFINING
    return num+1
}

//********************** */

console.log(addtwo(8));  //CANNOT ACCESS BEFORE INITIALIZATION BECAUSE FUNCTION IS STORED IN A VARIABLE

const addtwo =function(num){    //2nd WAY OF DEFINING
    return num+1
}
//*************************************************** */