const test = 'I Love JavaScript'
const regex = /JavaScript/ // يبحث عن هذه الكلمة فوق
const containsRegex = regex.test(test)
console.log(containsRegex);

// const test = 'I Love JavaScript'
const regex1 = /JavaScript/ // تبديل الكلام
let newString = test.replace(regex1, 'Python')
console.log(newString);

// const test = 'I Love JavaScript'
let regex2 = test.search(/JavaScript/) // موقع بداية الكلمة
console.log(regex2);



// console.log(1)
// console.log(2)
// setTimeout(() => {
//     console.log(3)
// },000)
// console.log(3)
// console.log(4)
// console.log(5)

// console.log('Start')
// function userInfo(name, callback) {
//     setTimeout(() => {
//         console.log('received')
//         callback(name)
//     },000)  // <---  3000
// }
// let UN = userInfo('Ahmed', name =>{
//     console.log(`name is ${name}`)
// })

// console.log('End')

// console.log('Start')
// const newU = new Promise ((res, rej) => {
//     setTimeout(() => {
//         const userI = {
//         name: ' Ali',
//         age: '19'
//         }
//         res(userI)
//     },000)  // <---  3000
// })
// newU.then(res =>{
//     console.log('received');
//     console.log(res);
// })

// console.log('End')


// console.log('Start')
// setTimeout(() => {
//     console.log('***')
// }, 000) // <-- 1000
// console.log('End')



let ages = [25, 30, 32]
let [FAge, SAge, TAge] = ages
console.log(FAge, SAge, TAge);

let color = ["red", "yellw", "blue"]
let[,Fc,Sc] = color
console.log(Fc,Sc);

let numb = [1, 2, [3,4]]
let [fi, se, th] = numb
console.log(fi,se,th[0]);

let fir = 5, sec = 7;
[fir, sec] = [sec,fir]  //  [2,1]..[fir,fir]..[sec,sec]
console.log(fir,sec);

let colo = ['red', 'green'];
[colo[0], colo[1]] = ['black', 'yellw', 'blue'] 
console.log(colo);

let stud = { // Object //
    name: 'Ali',
    age: '25'
}  

//////////////////
let{name:Yname, age: Yage}= stud
console.log(Yname,Yage);
// نفس الشي //
let{name, age}= stud
console.log(name,age);
////////////////////////

let stud1 = { // Object //
    name:{
      Fname:  'Ali',
      Lname: 'Ahmed'
    } ,
    age: '25' // 'age' ممكن 
}
let {name:{Lname:YLname}} = stud1
console.log(YLname);

let numb1 = [1, 2, 3, 4, 5];
let [f, s, ...t] = numb1
console.log(f,s,t);

let first = [1, 2, 3]
let seco = [4,5]
let third = [...first,...seco]
console.log(third);

function sum(ffi, sse, ...other) {
    console.log(...other); // OR ...other
    return ffi + sse
}
console.log(sum(1,2,6,80,25));

 let numb2 = [1, 2];
let [ffii, ssee, ...others] = numb2
console.log(ffii,ssee, others );

let stud2 = { // Object //
    na: 'Ali',
    age: '25'
}  
let {na, nickname = 'Unknown yet' } = stud2
console.log(na, nickname);
