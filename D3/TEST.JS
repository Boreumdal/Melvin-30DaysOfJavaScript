/*let firstName = 'Melvin', lastName = 'Arellano', country = 'PH', city = 'Binangonan', age = 21, isMarried = false, year;
console.log (typeof firstName, typeof lastName, typeof country, typeof city, typeof age, typeof isMarried, typeof year)

console.log('10'==10);
console.log(parseInt('9.8')==10);

let a = 0, b = 0n, c = false;
console.log(true);
console.log('t'==='t');
console.log(a == 0);

let aa, ba = null, ca = '';
console.log(aa);
console.log(ba);
console.log('' === 0);

console.log('Start Here');
console.log(4>3);
console.log(4>=3);
console.log(4<3);
console.log(4<=3);
console.log(4==4);
console.log(4===4);
console.log(4!=4);
console.log(4!==4);
console.log(4!='4');
console.log(4=='4');
console.log(4 === '4');
let ab = 'jargon', ac = 'python';
console.log(ab.length != ac.length)

console.log('Start Here');
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));

console.log((!(ab.includes('on')))&&(!(ac.includes('on'))));

let dat = new Date();
console.log(dat.getFullYear());
console.log(dat.getMonth() + 1);
console.log(dat.getDate());
console.log(dat.getDay());
console.log(dat.getHours());
console.log(dat.getMinutes());
console.log(Date.now());

let baseA = prompt('Enter base:', '');
let heightA = prompt('ENter height', '');
let areaTri = 0.5 * +baseA * +heightA;

console.log('The area of triangle is: ' + areaTri);

let sideA = prompt('Enter S1:', '');
let sideB = prompt('Enter S2:', '');
let sideC = prompt('Enter S3:', '');

let peri = +sideA + +sideB + +sideC;

console.log(peri);

let len = prompt('Enter length:', '');
let wid = prompt('Enter width:', '');

console.log('The area of the rectangle is: ' + (+len * +wid));
console.log('The perimeter of the reactangle is: ' + (2 * (+len + +wid)));

let rar = prompt('Enter radius:', '');
const pi = 3.14;

console.log('The area of the circle is: ' + (pi * (+rar * +rar)));
console.log('The circumference of the circle is: ' + (2 * pi * +rar));

let a1 = 2, a2 = 6, b1 = 2, b2 = 10;
let slope = (b2 - b1)/(a2 - a1);

console.log('The slope is: ' + slope);

let x = -3;
let y = (x*x)+(6*x)+9;

console.log(y);

let a = prompt('Enter hours: ','');
let b = prompt('Enter rate per hour', '');
let d = +a * +b
console.log('Your weekly earning is ' + d);

let a = 'Melvin'
let b = 'Arellano'
a.length > b.length
    ? console.log(`Your first name, ${a} is longer than your family name, ${b}`)
    : console.log(`Your family name, ${b} is longer than your first name, ${a}`)


let myAge = 250
let yourAge = 25
let sub = myAge - yourAge;

myAge > yourAge
    ? console.log(`I am ${sub} year older than you`)
    : console.log('Hi')



const today = 2022
let year = prompt('Enter birth year:', '')
let age = today - +year;

age >= 18
    ? console.log(`You are ${age}. You are old enough to drive`)
    : console.log(`You are${age}. You will be allowed to drive after ` + (18 - age) + 'years')



let s = 60;
let m = 60 * s;
let d = 24 * m;
let y = 365 * d;
let a = prompt('Enter', '');

console.log(+a * y);


let a = new Date();
let year = a.getFullYear()
let month = a.getMonth()
let day = a.getDate()
let hour = a.getHours()
let min = a.getMinutes()

console.log(`${year}-${month}-${day} ${hour}:${min}`);
console.log(`${day}-${month}-${year} ${hour}:${min}`);
console.log(`${day}/${month}/${year} ${hour}:${min}`);


let a = new Date();
let hr = a.getHours()
let min = a.getMinutes()
let year = a.getFullYear()
let month = a.getMonth() + 1
let day = a.getDate()

hr < 10
    ? hr = '0' + hr
    : hr = hr

min < 10 
    ? min = '0' + min
    : min = min

console.log(`${year}-${month}-${day} ${hr}:${min}`)
*/






















