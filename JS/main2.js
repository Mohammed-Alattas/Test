const d = new Date(2023,9,17)
console.log(d.getDate())
console.log(d.getDay()) // يرجع يوم من ايام الاسبوع من 0 الى 6
console.log(d.getMonth())
console.log(d.getFullYear())

const numb = Math.ceil(9.15) // OR -9.15 = -9
console.log(numb)

const numb2 = Math.floor(9.15) // OR -9.15 = -10
console.log(numb2)

const numb3 = Math.round(9.15)  
console.log(numb3)

const numb4 = Math.abs(-9.15)  // القيمه المطلقة
console.log(numb4)

const numbs = [4, 2, -9, 9, 7] 
const numb5 = Math.min(...numbs)
console.log(numb5)

const numb6 = Math.max(...numbs)
console.log(numb6)

const numb7 = Math.trunc(4.15)
console.log(numb7)

const numb8 = 3.12
const ee = Number.isInteger(numb8);
console.log(ee);

const str = '1.45'
const floatNoumb = parseFloat(str)
console.log(floatNoumb + 1)

const str1 = '9090'
const IntNoumb = parseInt(str1)
console.log(IntNoumb + 1)

function square (nu){
    if(isNaN(nu))
        return 'Invalid input'
    return nu * nu
}
console.log(square('A')) // 3 ==> 9

const ter = 2 ** 3; 
console.log(ter)

const numb9 = Math.pow(2, 3)
console.log(numb9)

const numb10 = 16
const sqrtNumber = Math.sqrt(numb10)
console.log(sqrtNumber)

const numb11 = 15
console.log(Math.sign(numb11)) // +num ==> 1 , -num ==> -1 , 0 ==> 0

const numb12 = 3/0
console.log(numb12) // Infinity (or -Infinity if the num is -)

const RandomNumb = Math.random(10)
console.log(RandomNumb)

const underscoreNumb = 123_456_789  // نضيف (_) عشان لا نلخبط في الرقم وما يأثر في المخرج
console.log(underscoreNumb)

const numb13 = 12
console.log(numb13.toString(2)); // binary

function sum (Fi, Se){
    return Fi + Se
}
function sub (Fi, Se){
    return `[${Fi - Se}]` // هذه للتنسيق `[${ }]`
}
// console.log(sub(2,5), sum(1,2));

function oper (Fi, Se, opCallback){
    return `[${opCallback(Fi,Se)}]` // 
}
console.log(oper(5,2,sum))
console.log(oper(5,2,sub))// without `[${}]` in sub ^^


function format (mas, formCB){
    return formCB(mas)
}
function HtmlF (mas){
    return `<div>${mas}</div>` 
}

function JsonF(mas) {
    return `{"mas": "${mas}"}`
}
console.log(format('Welocme to JavaScript', HtmlF)); // JsonF, HtmlF


const col = ["red", "green", "blue"];
col.forEach(function(cren, ind, array){
    console.log(ind,cren);
})

const age = [11, 13, 26, 15, 12]
const  adult = age.some(function(ele, ind, array) {
    return ele >= 18
})
console.log(adult);

const  adults = age.every(function(ele) {
    return ele >= 18
})
console.log(adults);

const colo = ["red", "green", "blue", "green"]
const ind = colo.indexOf('green') // lastIndexOf بحث بشكل عكسي
console.log(ind);

const nu = [11, 13, 7, 9, 15, 10, 8] 
const el = nu.find(function (el) { 
    return el % 3 === 0
})
console.log(el);// اول عنصر باقي القسمة يساوي صفر

const eve = nu.filter(function (eve) { 
    return eve % 2 === 0
})
console.log(eve);

const Pcolo = ["red", "yellw", "blue"]
const Scolo = ["green", "orange", "violet"]
const ccolo = Pcolo.concat(Scolo, 'black', 'white')
console.log(ccolo);

const slicecolo = ["black", "red", "green", "blue", "white"]
const rgbC = slicecolo.slice(1 , 4) // (نهاية القطع, بداية القطع)

console.log(rgbC);

const splicecolo = ["black", "red", "green", "blue", "white"]
splicecolo.splice(2,2) // عدد العناصر , مكان البداية
console.log(splicecolo);

//const col = ["red", "green", "blue"];
const strC = col.join(' * ')
console.log(strC);

// const nu = [11, 13, 7, 9, 15, 10, 8] 
// const colo = ["red", "green", "blue", "green"]
nu.sort()
console.log(nu);
colo.sort()
console.log(colo);
colo.reverse()
console.log(colo);

// const nu = [11, 13, 7, 9, 15, 10, 8] 

const sqNum = nu.map(function(CuV) { 
    return CuV * CuV
})
console.log(sqNum);

const strCo = 'red green blue black'
const arrCol = strCo.split(' ') // كل ما شفت مسافة خذ عنصر
// const strCo = 'red ; green ; blue ; black'
// const arrCol = strCo.split(' ; ')    
console.log(arrCol);

const fruits = ['Apple', 'Lemon', 'Mango', 'Orange'];
const index = fruits.indexOf('Lemon', 2)
console.log(index)
///////////////////////////////////////////

const car = { // Object //
    name: 'camry',
    color: 'white',
    currentSpeed: 0,
    move: function(speed) {
        //console.log(this); //  object Car تشير الى this
        this.currentSpeed = speed
        return `the ${this.name} is moving at speed of ${this.currentSpeed}km per hour`
    },
    stop: function(){
        this.currentSpeed = 0
        return `the ${this.name} is not moving`
    }
}
console.log(car.name);
car.stop()
console.log(car.move(100));
////////

class Car {
    static numbOfCars = 0
     constructor(name, color, cSpeed){ // سيتم استدعائها اذا تم استدعاء الاوبجكت
        //console.log('cons');
        this.name = name
        this.color = color
        this.cSpeed = cSpeed
        Car.incrNumOfCar()
     }
     move(speed) {
        this.cSpeed = speed
        return `the ${this.name} is moving at speed of ${this.currentSpeed}km per hour`
     }
     stop(){
        this.cSpeed = 0
        return `the ${this.name} is not moving`
     }
     static incrNumOfCar (){
        Car.numbOfCars++
     }
}
// فيه فرق بين car و Car  /////////////////
const car1 = new Car('camry', 'white', 0)
const car2 = new Car('kia', 'red', 0)
console.log(car.move(50));
console.log(car.move(70));
console.log(Car.numbOfCars);
/////////////////////////////////////

let user1 = {
    Fname: "Ahmed",
    Lname: "ali"
}
let Fullname = function() {
    console.log("hi, " + this.Fname+" "+ this.Lname);
}
Fullname.call(user1) // OR Apply

let add1 = (num1, num2) => {
    return num1 + num2
}

(function(n) {
    console.log(n);
})("Ahmed");

let student = function (na1, na2, ...names) {
    console.log(na1, na2, names);  
}
student("Ahmed", "Ali", "Reem", "Omer")
/////////

let stud1 = function (na1, na2, na3, na4) { // عكس الي قبلها
    console.log(na1, na2, na3, na4);  
}
names = ("Ahmed", "Ali", "Reem", "Omer")
stud1(...names)

