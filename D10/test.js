// let dSet = new Set()
// const countries = ['Finland', 'Sweden', 'Norway', 'Philippines', 'Canada']
// for (let i = 0; i <= 10; i++){
//     dSet.add(i)
// }

// dSet.delete(5)
// dSet.clear()

// for (let i = 0; i < countries.length; i++){
//     dSet.add(countries[i])
// }

// console.log(dMap);

// const a = [4, 5, 8, 9]
// const b = [3, 4, 5, 7]

// let c = [...a, ...b]
// let tres = new Set(c)
// console.log(tres);

// let filterOne = a.filter(ace => b.includes(ace))
// let filtered = new Set(filterOne)
// console.log(filtered);

// let filterOne = a.filter(ace => !b.includes(ace))
// let filtered = new Set(filterOne)
// console.log(filtered);

// const countries = ['Finland', 'Sweden', 'Norway']

// let mapped = new Map()
// let first = countries.forEach(country => {
//     mapped.set(country, country.length)
// })
// console.log(mapped);

// {
//     name: 'Afghanistan',
//     capital: 'Kabul',
//     languages: ['Pashto', 'Uzbek', 'Turkmen'],
//     population: 27657145,
//     flag: 'https://restcountries.eu/data/afg.svg',
//     currency: 'Afghan afghani'
// }

// let langs = new Set()

// for (let a = 0; a < countries.length; a++){
//     if (countries[a].languages.length > 1){
//         for (let lang of countries[a].languages){
//             langs.add(lang)
//         }
//     }
//     if (countries[a].languages.length == 1){
//         langs.add(countries[a].languages[0])
//     }
// }

// console.log('There are: ' + langs.size + ' languages')


// let langs = new Map()

// for (let a = 0; a < countries.length; a++){
//     if (countries[a].languages.length > 1){
//         for (let i = 0; i < countries[a].languages.length; i++){
//             if (langs.has(countries[a].languages[i])){
//                 langs.set(countries[a].languages[i], langs.get(countries[a].languages[i]) + 1)
//             }
//             else {
//                 langs.set(countries[a].languages[i], 1)
//             }
//         }
//     }
//     else {
//         if (langs.has(countries[a].languages[0])){
//             langs.set(countries[a].languages[0], langs.get(countries[a].languages[0]) + 1 )
//         }
//         else {
//             langs.set(countries[a].languages[0], 1)
//         }
//     }
// }

// let sorter = [...langs.entries()].sort((a, b) => b[1] - a[1])

// let result = count => {
//     let mainArr = []
//     sorter.map((surr) => {
//         mainArr.push({[surr[0]]: surr[1]})
//     })

//     let resultArr = []
//     for (let a = 0; a < count; a++){
//         resultArr.push(mainArr[a])
//     }

//     return resultArr
// }
// console.log(result(10))
















