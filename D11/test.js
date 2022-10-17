// const constants = [2.72, 3.14, 9.81, 37, 100]
// // const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
// const rectangle = {
//   width: 20,
//   height: 10,
//   area: 200,
//   perimeter: 60
// }
// const users = [
// {
//   name:'Brook',
//   scores:75,
//   skills:['HTM', 'CSS', 'JS'],
//   age:16
// },
// {
//   name:'Alex',
//   scores:80,
//   skills:['HTM', 'CSS', 'JS'],
//   age:18
// },
// {
//   name:'David',
//   scores:75,
//   skills:['HTM', 'CSS'],
//   age:22
// },
// {
//   name:'John',
//   scores:85,
//   skills:['HTML'],
//   age:25
// },
// {
//   name:'Sara',
//   scores:95,
//   skills:['HTM', 'CSS', 'JS'],
//   age: 26
// },
// {
//   name:'Martha',
//   scores:80,
//   skills:['HTM', 'CSS', 'JS'],
//   age:18
// },
// {
//   name:'Thomas',
//   scores:90,
//   skills:['HTM', 'CSS', 'JS'],
//   age:20
// }
// ]

// let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
// let [find, est, sw, den, nor] = countries
// let {width, height, area, perimeter} = rectangle

// for (let {name, scores, skills, age} of users){
//   console.log(name, scores, skills, age);
// }

// for (let {name, scores, skills, age} of users){
//   if (skills.length > 1){
//     console.log(name, scores, skills, age);
//   }
// }

// for (let {name, capital, population, languages} of countries){
//   console.log(`Name: ${name} | Capital: ${capital} | Population: ${population} | Languages: ${languages}`);
// }

// const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
// let [name, skills, [scoress, scoresss, jsScore, reactScore]] = student
// let skill = skills.slice(0, -1). join(', ')
// console.log(`Name: ${name}\nSkills: ${skill} and ${skills[skills.length-1]}\nJavascript Score: ${jsScore}\nReact Score: ${reactScore}`);

// const students = [
//   ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
//   ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
// ]

// let convertArrayToObject = arr => {
//   let resultArr = []
//   for (let i = 0; i < students.length; i++){
//     let [name, skills, scores] = arr[i]
//     resultArr.push({name: name, skills: skills, scores: scores})
//   }
//   return resultArr
// }
// console.log(convertArrayToObject(students))

// const student = {
//   name: 'David',
//   age: 25,
//   skills: {
//     frontEnd: [
//       { skill: 'HTML', level: 10 },
//       { skill: 'CSS', level: 8 },
//       { skill: 'JS', level: 8 },
//       { skill: 'React', level: 9 }
//     ],
//     backEnd: [
//       { skill: 'Node',level: 7 },
//       { skill: 'GraphQL', level: 8 },
//     ],
//     dataBase:[
//       { skill: 'MongoDB', level: 7.5 },
//     ],
//     dataScience:['Python', 'R', 'D3.js']
//   }
// }

// let newStudent = {...student}

// student.skills.frontEnd.push({skill: 'BootStrap',level: 8})
// student.skills.backEnd.push({skill: 'Express',level: 9})
// student.skills.dataBase.push({ skill: 'SQL',level: 8})
// student.skills.dataScience.push('SQL')
// console.log(newStudent);





































































































































































































































