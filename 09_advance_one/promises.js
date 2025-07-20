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