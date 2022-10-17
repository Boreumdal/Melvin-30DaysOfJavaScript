/*const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
let a = prompt('Enter','')
let b = a.toLowerCase()
if (shoppingCart.includes(b)){
    console.log(a)
}
else if(b == 'honey') {
    shoppingCart.reverse()
    shoppingCart.shift()
    shoppingCart.reverse()
    console.log(shoppingCart)
}
else {
    
    if (b == 'meat'){
        shoppingCart.unshift('Meat')
        shoppingCart.splice(3, 1, 'Green Tea')
        console.log(shoppingCart)
    }
    else {
        shoppingCart.reverse()
        shoppingCart.unshift(a)
        shoppingCart.reverse()
        console.log(shoppingCart)
    }
}


let a = prompt('Enter','')
let b = a.toLowerCase()

if (countries.includes(b)){
    console.log('ETHIOPIA')
}
else{
    countries.unshift(a)
    console.log(countries)
    console.log(countries[1])
}


const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
let fullStack = frontEnd.concat(backEnd)


console.log(fullStack)


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

console.log(ages.sort());

let a = ages.length
let b = a % 2

if (b == 0){
    let c = a / 2
    console.log('The median is: ' +(ages[c]+ages[c-1]) / 2)
}
else {
    let c = ((a / 2)+ .5) - 1
    console.log('The median is: ' + ages[c])
}

let j = eval(ages.join('+'))/ages.length

console.log('Mean is: ' + j)
console.log('Range is: ' + (ages[ages.length-1] - (ages[0])));

let k = ages[0] - j
let g = ages[ages.length-1] - j
let p = Math.abs(k + g)
console.log('Wew: ' + Math.round(p * 100) / 100)

let we = [1, 2, 3,8 ,9,2,2,3,4,5, 6, 7, 6,5]
we.sort()
console.log(we);
let t = we.length/2
console.log(we.length);
console.log(t);
if (we.length % 2 == 0){
    console.log(we[t-1]+ ' and ' + we[t]);
}
else {
    console.log(we[Math.ceil(t-1)]); aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
}*/ 

let a = countries.length / 2
countries.sort()

if ((countries.length % 2) == 0){
    // EVEN 246
    let b = a - 1

    console.log(countries[b] + ' AND ' + countries[a]);
}
else {
    let d = Math.floor(a)
    console.log(countries[d])
}


if ((countries.length % 2) == 0){
    //EVEN 2468
    let r = countries.splice(a, a) // 2nd half
    let t = countries // remaining 1st half

    console.log(t);
    console.log(r);
}
else {
    let d = Math.floor(a)
    console.log(d);

    let g = countries.splice(d+1,d) //second half
    let h = countries

    console.log(h);
    console.log(g);

}























