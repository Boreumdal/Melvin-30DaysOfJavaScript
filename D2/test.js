/*let challenge = '30 Days Of JavaScript';

console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substr(0,2));
console.log(challenge.substring(3));
console.log(challenge.includes("Script"));
console.log(challenge.split());
console.log(challenge.split(" "));

let challenge1 = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';

console.log(challenge1.split(", "));
console.log(challenge1.split());

console.log(challenge.replace("JavaScript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt('J'));
console.log(challenge.indexOf('a')); // SEARCH
console.log(challenge.lastIndexOf('a'));

let challenge3 = 'You cannot end a sentence with because because because is a conjunction';

console.log(challenge3.indexOf('because'));
console.log(challenge3.lastIndexOf('because'));
console.log(challenge3.search('because'));

console.log(challenge.trim());
console.log(challenge.startsWith('3'));
console.log(challenge.endsWith('t'));
console.log(challenge.match('a'));

let challenge5 = '30 Days of', challenge6 = 'JavaScript';

console.log(challenge5.concat(challenge6));
console.log(challenge.repeat(2));*/

// LEVEL 2

/*
console.log("The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.");
console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"')

let num1 = '10';
num1 = +num1;
console.log(typeof num1 == typeof 10);

let flo1 = parseFloat('9.8');
console.log(flo1 == 10);
console.log(Math.ceil(flo1) == 10);

let varA = 'jargon', varB = 'python';
console.log(varA.includes('on') == varB.includes('on'));

let varC = 'I hope this course is not full of jargon';
console.log(varC.includes('jargon'))

console.log(Math.floor(Math.random() * 100 + 1));

console.log(Math.floor(Math.random() * (100 - 50 + 1) + 50));

console.log(Math.floor(Math.random() * 255 + 1));

let varD = 'JavaScript';

console.log(varD.charAt(Math.random() * 10));

console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125')

let varE = 'You cannot end a sentence with because because because is a conjunction';

console.log(varE.substr(31, 23));*/

// L 3

let vr1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(vr1.split('love').length);


let vr2 = 'You cannot end a sentence with because because because is a conjunction';
let vr3 = /because/gi;
console.log(vr2.match(vr3).length);

let sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

console.log(sentence.replace(/[^\w\s]/g, ''));

let st1 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let regex = /\d+/g;
let st2 = st1.match(regex);
let st3 = (+st2[0])+(+st2[1])+(+st2[2]);

console.log(st3);



























