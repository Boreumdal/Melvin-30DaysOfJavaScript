const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// fetch(countriesAPI)
//     .then(incoming => { incoming.json()})
//     .catch(err => { console.log(err);})

// let data = async () => {
//     try {
//         let acq = await fetch(countriesAPI)
//         let countries = await acq.json()

//         // render name capital languages population and area
//         let resultArr = []
//         for (let a = 0; a < countries.length; a++){
//             resultArr.push({name: countries[a].name, capital: countries[a].capital, langs: countries[a].languages, population: countries[a].population, area: countries[a].area})
//         }
//         console.log(resultArr);
//     }
//     catch (error){
//         console.log(error);
//     }
// }
// data()

// let renderCat = async () => {
//     try {
//         let catFetch = await fetch(catsAPI)
//         let catData = await catFetch.json()
//         let catNames = []
//         for (let cat of catData){
//             catNames.push(cat.name)
//         }
//         console.log(catNames);
//     }
//     catch (err){
//         console.log(err+'imerror');
//     }
// }
// renderCat()

// let renderCatAgain = async () => {
//     try {
//         let dataFetch = await fetch(catsAPI)
//         let cats = await dataFetch.json()
//         let resultWeight = []
//         for (let a = 0; a < cats.length; a++){
//             let val = Object.values(cats[a].weight.metric)
//             let valMin = +val[0]
//             let valMax = +val[val.length-1]
//             let defaultVal = 0
//             let counter = 0
//             while (valMin <= valMax){
//                 defaultVal += valMin
//                 valMin++
//                 counter++
//             }
//             let average = defaultVal / counter
//             resultWeight.push({'name': cats[a].name, 'average weight': average})
//         }
//         console.log(resultWeight);
//     }
//     catch (err){
//         console.log(err);
//     }
// }
// renderCatAgain()

// let largestCountries = async () => { // by population
//     try {
//         let parseCountries = await fetch(countriesAPI)
//         let countries = await parseCountries.json()
        
//         // render one by one
//         let countriesRender = []
//         for (let a = 0; a < countries.length; a++){
//             countriesRender.push([countries[a].name, countries[a].population])
//         }
//         countriesRender.sort((a, b) => {
//             return b[1] - a[1]
//         })
//         let resultArr = []
//         for (let a = 0; a < 10; a++){
//             let rank = a + 1
//             resultArr.push({rank: rank, country: countriesRender[a][0], population: countriesRender[a][1]})
//         }
//         console.log(resultArr);
//     }
//     catch (err){
//         console.log(err);
//     }
// }
// largestCountries()

// let officialLangs = async () => {
//     let parseCountries = await fetch(countriesAPI)
//     let countries = await parseCountries.json()

//     let languages = []
//     for (let a = 0; a < countries.length; a++){
//         for (let b = 0; b < countries[a].languages.length; b++){
//             if (languages.indexOf(countries[a].languages[b].name) == -1){
//                 languages.push(countries[a].languages[b].name)
//             }
//         }
//     }
//     console.log('The total number of official languages are: ', languages.length);
//     console.log(languages);
// }
// officialLangs()


























































































































































































































































































