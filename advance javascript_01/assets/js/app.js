//wong........

// let a , b ;
// [a,b]=[34,556];
// console.log(a,b);

//wong......

// [a,b,c,d] = [1,2,3,4,5,6,7,8]
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

//wong.......

// ({a,b,c}={a:34, b:35, c:67, d:88, e:34})
// console.log(a,b,c)

//object Destructuring.........

// let laptop = {
//     model : " hp",
//     year : 2022,
//     gendr : "male",
//     net : 1233
// }

// console.log(` My system is ${laptop.model}
//  and my manu yera is ${laptop.year}
//  my laptop gender is ${laptop.gendr}`) 

//  let {model, year, gendr, net} = laptop
//  console.log(` My system is ${model} and my manu yera is ${year}my laptop gender is ${gendr}`) ;

//Destructuring object...................................
// let bioData = {
//     Name : "Sumaiya",
//     year :    1997,
//     gendr : "female",
//     Number: 2611828,
//     hobbies: {
//         first: "mehendi Artist",
//         second : "travaling",
//     }
// }

//  let {Name, year, gendr:gendrs, Number,hobbies} = bioData
//  document.write(` My name is ${Name} and my Age yera is ${year} my gender is ${gendrs} my contant number is ${Number} my hobbies is ${hobbies.first}`) ;

 //Destructuring Arrays.....................................

// const myleg = ['js','c++','php','javascript','phython'];

// //  let top1 = myleg[0];
// //  let top2 = myleg[1];
// //  let top3 = myleg[2];
// //  document.write(`my frvt language is ${top2}`);
//.................................................................>

// const myleg = ['js','c++','php','javascript','phython'];

// let [top1,top2,top3,top4,top5] = myleg;
// document.write(`my first fav lang is ${top1} and 2nd lang is ${top5}`) ;
//.........................................................................>

// const myleg = ['js','c++','php','javascript','phython'];

// let [top1,,,,top5] = myleg 
// document.write(`my first fav lang is ${top1} and 2nd lang is ${top5}`)

