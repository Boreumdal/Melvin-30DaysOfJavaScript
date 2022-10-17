/*let a = []
console.log(a)

let b = ['one', 'two', 'three', 'four', 'five', 'six', 'seven']
console.log(b.length)
console.log(b[0], b[3], b[6])

let mixedDataTypes = [1, 2, 3, 'alpha', 'bravo', true, { segment: ['aa', 'ba']} ]
console.log(mixedDataTypes.length)

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies)
let lastCompany = itCompanies.length - 1
console.log(itCompanies[0], itCompanies[3], itCompanies[lastCompany])

let byOne = itCompanies.toString();
console.log(byOne.toUpperCase())
*/

let a = 'Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies'
console.log(a)

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
//let b = itCompanies.splice(2, (itCompanies.length - 1))
//console.log(b)

console.log(itCompanies.sort())
console.log(itCompanies.reverse())

console.log('Slicw')
console.log(itCompanies.slice(0, 3))
console.log(itCompanies.slice(4))
console.log(itCompanies.slice(3,4))

console.log('Splicw')
console.log(itCompanies.splice(0, 1))
console.log(itCompanies.splice(2,2))
console.log(itCompanies.splice(3,1))
console.log(itCompanies.splice())





