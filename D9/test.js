// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const products = [
//   { product: 'banana', price: 3 },
//   { product: 'mango', price: 6 },
//   { product: 'potato', price: ' ' },
//   { product: 'avocado', price: 8 },
//   { product: 'coffee', price: 10 },
//   { product: 'tea', price: '' },
// ]
/*
let countriesForEach = countries.forEach((c) => { console.log(c) })
let namesForEach = names.forEach((n) => { console.log(n) })
let numbersForEach = numbers.forEach((num) => { console.log(num) })
let countriesCaps = countries.map((countr) => { return countr.toUpperCase() })
let countriesMap = countries.map((country) => { return country.length })
let numbersMap = numbers.map((num) => { return num * num })
let namesCaps = names.map((nam) => { return nam.toUpperCase()})
let productPrice = products.map((pricee) => { return pricee.price })
let containLand = countries.filter((coun) => { return coun.includes('land') || coun.includes('Land') })
let sixLand = countries.filter((coun) => { return coun.length == 6 })
let sixmoreLand = countries.filter((coun) => { return coun.length >= 6 })
let startsE = countries.filter((coun) => { return coun.startsWith('E') })
let pricesVal = products.filter((prod) => { return prod.price > 0 })

let getStringLists = (arr) => {
  let stringedResult = []
  arr.forEach((stringed) => {
    if (typeof stringed == 'string'){
      stringedResult.push(stringed)
    }
  })
  return stringedResult
}

let sumArray = (arr) => {
  let sum = arr.reduce((red, summ) => summ + red)
  return sum
}

let reducer = () => {
  let reducedCoun = ''
  let reducedCountry = countries.reduce((ini, sen) => {
    if (sen == 'Norway'){
      reducedCoun += sen + ' and '
    }
    else if (sen == 'IceLand'){
      reducedCoun += sen + ''
    }
    else {
      reducedCoun += sen +', '
    }
  }, 0)
  return reducedCoun + ' are north European countries'
}
console.log(reducer());

let someChecker = () => {
  return names.some((namee) => namee.length > 7)
}
console.log(someChecker());

let everyChecker = countries.every((country) => return country.toLowerCase().includes('land'))
console.log(everyChecker);

let findSix = countries.find((country) => { return country.length == 6 } ) 
console.log(findSix);

let findSixIndex = countries.findIndex((country) => { return country.length == 6 } ) 
console.log(findSixIndex);

let findNorway = countries.findIndex((country) => { return country.toLowerCase() == 'norway' } ) 
console.log(findNorway);

let findRussia = countries.findIndex((country) => { return country.toLowerCase() == 'russia' } ) 
console.log(findRussia);

let sumProducts = products.map(product => { return product.price }).filter(nums => { if (typeof nums == 'number'){ return nums }}).reduce((ac, cu) => { return ac + cu },0)
console.log(sumProducts);

let sumPrices = products.reduce((acc, cur, index, array) => {
  if (array[index].price > 0){
    acc += array[index].price
  }
  return acc
}, 0)
console.log(sumPrices);

let categorizeCountries = () => {
  let arrr = []
  let categorized = countries.map((country1) => {
    return country1.name
  }).filter((country2) => {
    if (country2.includes('land')){
      arrr.push(country2)
    }
  })
  return arrr
}
console.log(categorizeCountries());

// level 2 number 4

let getFirstTenCountries = () => {
  let arrr = []
  countries.reduce((acc, cur, index) => {
    if (index < 10){
      arrr.push(cur.name)
    }
  },0)
  return arrr
}
let getLastTenCountries = () => {
  let arrr = []
  countries.map((country) => { arrr.push(country.name) })
  arrr.splice(0, arrr.length-10)
  return arrr
}
console.log(getFirstTenCountries());
console.log(getLastTenCountries());

let manyTimes = () => {
  let arrr = []
  let chars = 'ÅABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let charsIndex = 0

  while (charsIndex !== chars.length){
    let mappedCountry = countries.filter((country) => {
      return country.name.startsWith(chars[charsIndex])
    })
    // 
    arrr.push({num: mappedCountry.length, letter: chars[charsIndex]})
    charsIndex++
  }
  let sorter = arrr.sort(function(a, b){
    return b.num - a.num
  })
  let letterResult = sorter[0]
  let letterChar = letterResult.letter
  let letterNum = letterResult.num

  let mapper = countries.filter((dataa) => {
    return dataa.name.startsWith(letterChar)
  })
  let aa = 0
  let ab = []
  while (aa !== mapper.length){
    ab.push(mapper[aa].name)
    aa++
  }
  return ab
}
console.log(manyTimes());

let containerName = countries.map(country => { return country })
containerName.sort((a, b) => {
  if (a.name < b.name) return -1
  if (a.name > b.name) return 1
  return 0;
})

let containerCapital = countries.map(country => { return country })
containerCapital.sort((a, b) => {
  if (a.capital.toLowerCase() < b.capital.toLowerCase()) return -1
  if (a.capital.toLowerCase() > b.capital.toLowerCase()) return 1
  return 0
})

let containerPopulation = countries.map(country => { return country})
containerPopulation.sort((a,b) => {
  return a.population - b.population
})

console.log(containerName);
console.log(containerCapital);
console.log(containerPopulation);
*/



// level 3 no 4
// let mostPopulatedCountries = count => {
//   let sorted = countries.sort((a, b) => {
//     return b.population - a.population
//   })
//   let resultArray = []
//   let countTimer = 0
//   while (countTimer < count){
//     resultArray.push({name: sorted[countTimer].name, population: sorted[countTimer].population})
//     countTimer++
//   }
//   return resultArray
// }
// console.log(mostPopulatedCountries(10));


// {
//   name: 'Afghanistan',
//   capital: 'Kabul',
//   languages: ['Pashto', 'Uzbek', 'Turkmen'],
//   population: 27657145,
//   flag: 'https://restcountries.eu/data/afg.svg',
//   currency: 'Afghan afghani'
// }


// let mostSpokenLanguage = count => {

//   // gathers data
//   let langs = [] // lalagyan ng randomized langs

//   countries.map(country => {
//     // arrayed languages
//     if (country.languages.length !== 1){
//       for(let i = 0; i < country.languages.length; i++){
//         langs.push(country.languages[i])
//       }
//     }
//     // single language
//     if (country.languages.length === 1){
//       langs.push(country.languages[0])
//     }
//   })

//   // tally data
//   let acc = {}
//   for (let i = 0; i < langs.length; i++){
//     let cur = langs[i]
//     if (typeof acc[cur] == "number"){
//       acc[cur] += 1 // add one pag nakita sa acc
//     }
//     else {
//       acc[cur] = 1 // setan ng value kung di nakita sa acc
//     }
//   }

//   // push to array for sort
//   let sorter = Object.entries(acc).sort((a,b) => b[1] - a[1])

//   // result
//   let tallySorter = []
//   for (let i = 0; i < count; i++){
//     let carry = {language: sorter[i][0], count: sorter[i][1]}
//     tallySorter.push(carry)
//   }
//   return tallySorter
// } 
// console.log(mostSpokenLanguage(3));

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

let statistics = {
  count: () => {
    return ages.length
  },
  sum: () => {
    return ages.reduce((acc, cur) => { return acc + cur })
  },
  min: () => {
    ages.sort((a,b) => a - b)
    return ages[0]
  },
  max: () => {
    ages.sort((a,b) => a - b)
    return ages[ages.length-1]
  },
  range: () => {
    ages.sort((a,b) => a - b)
    return ages[(ages.length - 1)] - ages[0]
  },
  mean: () => {
    let sum = ages.reduce((acc, cur) => { return acc + cur})
    return sum / ages.length
  },
  median: () => {
    ages.sort((a,b) => a - b)
    let len = ages.length
    if (len % 2 == 0){
      let first = ages[Math.floor(len/2)-1]+ages[(Math.floor(len/2))]
      return first / 2
    }
    if (len % 2 != 0) {
      return ages[Math.floor(len/2)]
    }
  },
  mode: () => {
    ages.sort((a,b) => a - b)
    let tally = {}
    // tally
    ages.reduce((acc, curr) => {
      if (tally[curr]){
        tally[curr] += 1
      }
      else {
        tally[curr] = 1
      }
    })
    // push to array then sort bottom to top
    let sorter = []
    for (let nums in tally){
      sorter.push([nums, tally[nums]])
    }
    sorter.sort((a,b) => {
      return b[1] - a[1]
    })
    // mode is in [0]
    return `(${sorter[0][0]}, ${sorter[0][1]})`
  },
  variance: () => {
    ages.sort((a,b) => a - b)
    let sum = ages.reduce((acc, cur) => { return acc + cur })
    let mean = sum / ages.length
    let first = ages.map(num => { return (num - mean) ** 2 })
    let second = first.reduce((acc, curr) => { return acc + curr})
    let third = second / (ages.length - 1)
    let fourth = Math.round(third * 100) / 100
    return fourth
  },
  std: () => {
    ages.sort((a,b) => a - b)
    let sum = ages.reduce((acc, cur) => { return acc + cur })
    let mean = sum / ages.length
    let first = ages.map(num => { return (num - mean) ** 2 })
    let second = first.reduce((acc, curr) => { return acc + curr})
    let third = second / (ages.length - 1)
    let fourth = Math.sqrt(third)
    let fifth = Math.round(fourth * 100) / 100
    return fifth
  },
  freqDist: () => {
    // tally
    let frqObj = {}
    ages.map(num => {
      if (frqObj[num]){
        frqObj[num] += 1
      }
      else {
        frqObj[num] = 1
      }
    })
    // to array
    frqArray = []
    for(let item in frqObj){
      frqArray.push([item, frqObj[item]])
    }
    // percentage
    let percentage = []
    frqArray.map(num => {
      percentage.push([num[0], (num[1] / ages.length) * 100])
    })
    return percentage
  },
  describe: () => {
    console.log('Count:', statistics.count())
    console.log('Sum: ', statistics.sum())
    console.log('Min: ', statistics.min())
    console.log('Max: ', statistics.max())
    console.log('Range: ', statistics.range())
    console.log('Mean: ', statistics.mean())
    console.log('Median: ',statistics.median())
    console.log('Mode: ', statistics.mode())
    console.log('Variance: ',statistics.variance())
    console.log('Standard Deviation: ', statistics.std())
    console.log('Frequency Distribution: ',statistics.freqDist())
  }
}
statistics.describe()