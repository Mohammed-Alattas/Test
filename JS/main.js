console.log("Welcome to JS");


const Name = "Mohammed";
console.log (Name);

let num = 5>4
console.log(num)

console.log(typeof num, typeof Name)
let JS = "JavaScript"

console.log(`       Welcome 
         to 
       ${JS}`);

console.log(`The sum is ${1 + 2}`);

let name = 'Nasser';
console.log(name.length);
 
let language = 'JavaScript';
console.log(language[4]);
console.log('A\tB\tC\tD\tE');

let colors = ["red", "green", "blue"];
console.log(colors);
console.log(colors[0]);
colors[1] = 'black';
console.log(colors[1]);
colors.push('black');
console.log(colors);

colors.pop(); // حذف اخر عنصر وحفظ القيمة المحذوفة
console.log(colors.includes('green'));
colors.unshift('111'); // ضافة عنصر جديد في بداية المصفوفة
console.log(colors);

colors.shift();// حذف أول عنصر وحفظ القيمة المحذوفة
console.log(colors);

let mas = ['Welcome', 'to', 'J3S'];
let res = mas.join(' 66 ');
console.log(res);

let age = 14;
if (age < 12){
console.log("Sorry, you are not old enough to play this game");
}
else{
console.log("Welcome to the game");  
}

let number = 1;
if (number > 0) {
console.log('+');
}else if (number < 0) {
console.log('-');
}else {
console.log('Zero');
}

const col = ["red", "green", "blue"];
let co = 2;

switch(co){
    case 1:
    console.log(col[0]);
    break;
    case 2:
    console.log(col[1]);
    break;
    case 3:
    case 6:
    case 5:    
    console.log(col[2]);
    break;
    default:
        console.log("GG");
        break;
}

for (let i = 5; i > 0; i--) {
    console.log(i);
}

for (let index = 1; index <= 5; index++) {
    if(index % 2 == 0){
        console.log("Next");
        continue;
    }
    console.log(index);
}

const COO = ["red", "green", "blue"];

for(let CO of COO ){
    console.log(CO);
}

function printNum() {
    console.log(1);
    console.log(3);
    console.log(5);
}
printNum()

function PN(aa) {
    for (let i = 1; i <= aa; i++) {
    console.log(i);
    }
}
PN(3)
PN(2)
PN(5)

function myFunc(number) {
    console.log(`${number} x ${number} = ` + number * number)
    return number * number
  }
  myFunc(2)


  function myFuncm(number) {
    console.log(number * number)
    return number 
  }
  myFuncm(2) 



