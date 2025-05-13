const code =["js","ruby","java","cpp"]

//ARRAY HAVE A PREDEFINED FOREACH FOR ITERATIONS

// code.forEach(function (item) {
//     console.log(item);
// } )

//ARROW FUNCTION CAN ALSO BE USED    () => {}
// code.forEach((val)=>{
//     console.log(val);
// })

//WE CAN ALSO PASS FUNCTION WHICH IS ALREADY DEFINED AS A PARAMETER IN THE FOREACH
function greet(items){
    console.log(items);
}
code.forEach(greet)


//multiple values 
code.forEach((
    item,index,arr)=>{
    console.log(item,index,arr); 
})