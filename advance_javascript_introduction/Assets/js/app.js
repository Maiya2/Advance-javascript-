const x = 5 ; 
const y = 6 ;
 
document.write(add(x,y))


//function 
// function sum (a,b){
//     return a + b ;
// }
// document.write(sum(2.,3))


//moderan_java....................
//ES5
//arrow function
//  let sumA = (a ,b)=>{
//     return a+b;
//  }
//  document.write(sumA(2,3))


//ES6
//arrow function
// let dooble = (a) =>  2*a;
// document.write(dooble(20));


//ES5
// function randem (){
//     return Math.random()
// }
// document.write(randem(1));


//ES6
// let random = () => Math.random()
// document.write(random(1))

//ES5
// document.addEventListener(`click`, function() {
//     console.log("clicked");
// });

//ES6
// document.addEventListener(`click`, () => console.log("clicked")
// );

//DESTRUCTURING ARRAY & OBJECT IN ES6..................
// const from ={
//     name : "sumaiya",
//     father : "abid",
//     age : 24 ,
// }
// let{name,father,work}=from
// console.log(name)
// console.log(father)
// console.log(24)

//JavaScript Closures..............................
//  function inti(){
//     let name = "Sumiaya";
//     function displayName(){   
//         document.write(name);     
//     }
//     displayName();
//  } 
//  inti();
 
///////////////////////////////////////////////////////////
// function show(){
//     var j = "j is a local variable of outer function";
//     function displayName(){
//         var k = "k is a local variable inner funtion"
//         document.write(k + "</br>")
//         document.write(j + "</br>")
//     }
//     displayName();
// }
// show();