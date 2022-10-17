/*
let r = 2, t = 3; y = 5, u = 7, p = 11
console.log('Numbers are: ' + r)
console.log('Numbers are: ' + t)
console.log('Numbers are: ' + y)
console.log('Numbers are: ' + u)
console.log('Numbers are: ' + p)
for (i=2; i<=100; i++){
  if (i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i % 7 != 0 && i % 11 != 0){
    console.log('Numbers are: ' + i)
  }
}

let a = 0
for (i=1; i<=100; i++){
  a = a+i
  console.log(i)
}
console.log(a)

// pagdinivide sa 2 != 0

// console.log(`${i} * ${i} = ${i * i}`)

let a = 0, b = 0

for (i = 0; i <= 100; i++){
  if (i % 2 == 0){
    a = a + i
  }
}
for (j = 0; j <= 100; j++){
  if (j % 2 !=0){
    b = b + j
  }
}

let arr = Array()
arr.push(a, b)

console.log(arr)


let n = 5
let string = ''

for (i = 1; i <= n; i++){
  for (j = 1; j <= n; j++){

    randomChar = Math.floor(Math.random() * 10)
    string += randomChar
  }
  string += '\n'
}

console.log(string)


let a = []

while(a.length < 5){
  let num = Math.floor(Math.random() * 10)
  if (a.indexOf(num) === -1){
    a.push(num)
  }
}

a = a.join('');
console.log(a);

let ar = ''
let abcd = 'abcdefghijklmnopqrstuvwxyz0123456789'

for (i = 1; i <= 12; i++){
  let a = abcd[Math.floor(Math.random() * abcd.length)]
  ar = ar + a
}

console.log(ar);


let ar = '#'
let abcd = 'abcdef0123456789'

for (i = 1; i <= 6; i++){
  let a = abcd[Math.floor(Math.random() * abcd.length)]
  ar = ar + a
}

console.log(ar);


let arr = []

while (arr.length < 3){
  let a = Math.floor(Math.random() * 255) + 1
  arr.push(a)
}

let b = arr.join(',')
console.log(`rgb[${b}]`);


let arr = []

for (i = 1; i <= 10; i++){
  arr.push(countries[i-1].toUpperCase())
}
console.log(arr);


const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]



for (let i = 0; i < fullStack.length; i++){
  let a = fullStack[i].join('\n')
  console.log(a);
}
*/

let withLand = []

for (let i = countries.length; 0 < i; i--){
  withLand.push(countries[i-1].toUpperCase())
}

console.log(withLand);