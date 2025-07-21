//******** CREATING A PROMISE ********

const promisesOne = new Promise(function(resolve, reject){
    //Do an async task
    //like DB calls,cryptography,network
    setTimeout(function(){
        console.log("Async task is complete");
        resolve() //connect resolve(parameter) with then
    },1000)
})

//*****CONSUMING A PROMISE */
promisesOne.then(function(){   //then is linked with resolve 
    console.log("Promised consumed"); 
})


//*** NOT NECESSARY TO STORE IT IN A VARIABLE => CAN BE USED DIRECTLY ***
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("WORK IS COMPLETE");
        resolve()
    },1000)
}).then(function(){
    console.log("PROMISE IS CONSUMED");
})


// ************DATA PASSING TO THE THEN BLOCK FROM RESOLVE BLOCK**************

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        //data is given generally in the form of object ==> {}
        resolve({username: "chai", email : "hello@gmail.com"})  //data is passed to then block
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})


//*********  USING REJECT IN CASE OF ANY ERROR ==> catch block
const promiseFour =new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =true;
        if(!error){
            resolve({name :"ADNAN" , password : "JS"});
        }
        else{
            reject('ERROR : SOMETHING WENT WRONG')
        }
    },2000)
})


//***********CHAINING OF THEN************
// WHEN OUR THEN BLOCK RETURN SOME VALUE ==> WE CANT STORE IT ANY CONST/VARIABLE => WE USE ANOTHER THEN(CHAIN OF THEN) TO PASS/STORE THE VALUE

promiseFour
.then(function(data){
    console.log(data);
    return data.name;  //returning some values
})
.then(function(username){  //parameter store the return value
    console.log(username);
})
.catch(function(err){   //Incase of rejection
    console.log(err); 
})
.finally(function(){   //always run 
    console.log("The promise is either resolved or rejected");
})


//************ ANOTHER METHOD ==> async/await *************
const promiseFive =new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =true;
        if(!error){
            resolve({username:"Javascript" , password : "123"});
        }
        else{
            reject('ERROR : JS WENT WRONG')
        }
    },2000)
})

//**** IMPORTANT  
//async function waits for the promiseFive to finish 
//then store its resolved value in response
async function consumePromiseFive(){
   try {
        const response =await promiseFive   //Incase of error => there will be no data in thr response  ==> it wont work  ==> WE USE TRY AND CATCH
        console.log(response);
   } catch (error) {
        console.log(error);
   }
}
//calling async method
consumePromiseFive();



//NEED TO UNDERSTAND AGAIN

// // async function getAllUsers(){
// //     try {
// //         const response = await fetch('https://jsonplaceholder.typicode.com/users')

// //         const data = await response.json()
// //         console.log(data);
// //     } catch (error) {
// //         console.log("E: ", error);
// //     }
// // }

// //getAllUsers()

// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => console.log(error))