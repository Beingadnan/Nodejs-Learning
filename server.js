// // // let add=(a,b)=> {return a+b}
// // // console.log(add(1,10))

// // // (function(){
// // //     console.log("Adnan akaha");
// // // })();

// // function add(a,b,call){
// //     console.log(a+b);
// //     call();
// // }
// // add(1,2,()=>{
// //     console.log("successfully");
// // })

// var fs=require('fs');
// var os=require('os');

// var user=os.userInfo();
// console.log(user);
// console.log(user.username)

// fs.appendFile('greeting.txt',"Hi"+user.username,()=>{
//     console.log("Done")
// })
const notes=require('./Notes.js');
const _=require('lodash');

let age=notes.age;
console.log(age)

let add=notes.add(81,9)
console.log(add)

let data=["adnan","adnan",1,2,1,2,"adnan"];
console.log(_.uniq(data))

let str=12;
console.log(_.isString(str))

