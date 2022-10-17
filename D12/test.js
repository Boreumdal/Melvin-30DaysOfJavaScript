// let sentence = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.'
// let extraction = sentence.match(/-?\d+/g)

// // convert sa num
// let extractedToNum = extraction.map(num => { return +num })

// let distance = nums => {
//   console.log('Points:', extraction)
//   console.log('Sorted Points:', extractedToNum.sort((a, b) => { a - b}));
//   console.log('Distance:', nums[nums.length - 1] - nums[0])
// }
// distance(extractedToNum)

// let is_valid_variable = inText => {
//   if (/[a-zA-Z]+/g.test(inText)){
//     if (/-/g.test(inText)){
//       return false
//     }
//     if (/[0-9!#%^&*()?]/g.test(inText[0])){
//       return false
//     }
//     else {
//       if (/[a-zA-Z0-9$_][a-zA-Z0-9$_]*/g.test(inText)){
//         return true
//       }
//     }
//   }
// }

// console.log(is_valid_variable('first_name'));

// M1 -----------------------------------
// const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

// let paragraph1 = paragraph.match(/\w+/gi)

// // data
// let data = {}
// for (let a = 0; a < paragraph1.length; a++){
//   let holder = paragraph1[a]
//   if (Object.keys(data).indexOf(holder) == -1){
//     data[holder] = 1
//   }
//   else {
//     data[holder] += 1
//   }
// }

// let srt = Object.entries(data)
// srt.sort((a,b) => {
//   return b[1] - a[1]
// })

// let tenMostFrequentWords = l => {
//   let mainContainer = []
//   if (l > 0){
//     for (let a = 0; a < l; a++){
//       mainContainer.push({word: srt[a][0], count: srt[a][1]})
//     }
//   }
//   else {
//     for (let a = 0; a < srt.length; a++){
//       mainContainer.push({word: srt[a][0], count: srt[a][1]})
//     }
//   }
//   return mainContainer
// }

// console.log(tenMostFrequentWords());


// M2 -----------------------------------
// const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

// let paragraph1 = paragraph.match(/\w+/gi)

// let carrier = []
// for (let a = 0; a < paragraph1.length; a++){
//   let holder = paragraph1[a]
//   if (carrier.indexOf(holder) == -1){
//     carrier.push(holder)
//   }
// }

// let dataArray = []
// for (let a = 0; a < carrier.length; a++){
//   let regex = new RegExp(carrier[a], 'g')
//   let aa = paragraph.match(regex)
//   dataArray.push([carrier[a], aa.length])
// }

// dataArray.sort((a,b) => {
//   return b[1] - a[1]
// })

// let tenMostFrequentWords = dat => {
//   let resultArray = []
//   if (typeof dat == 'number'){
//     for (let a = 0; a < dat; a++){
//       resultArray.push({word: dataArray[a][0], count: dataArray[a][1]})
//     }
//   }
//   else {
//     for (let a = 0; a < dataArray.length; a++){
//       resultArray.push({word: dataArray[a][0], count: dataArray[a][1]})
//     }
//   }
//   return resultArray
// }

// console.log(tenMostFrequentWords())

sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

let cleanText = t => {
  let regex = /[^a-zA-Z?!. ]/g
  let cleaned = t.replace(regex,'')
  return cleaned
}

let mostFrequentWords = data => {
  let chopData = data.split(' ')
  let courier = {}
  for (let a = 0; a < chopData.length; a++){
    let hold = chopData[a]
    if (Object.keys(courier).indexOf(hold) == -1){
      courier[hold] = 1
    }
    else {
      courier[hold] += 1
    }
  }
  let arrayCourier = Object.entries(courier)
  arrayCourier.sort((a,b) => { b[1] - a[1] })

  let result = []
  for (let a = 0; a < 3; a++){
    result.push({word: arrayCourier[a][0], count: arrayCourier[a][1]})
  }
  return result
}

console.log(mostFrequentWords(cleanText(sentence)))