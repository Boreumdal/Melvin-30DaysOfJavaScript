/*let dog = {
    name: 'Art',
    legs: 4,
    color: 'Black',
    age: 5,
    bark: function(){
        return 'woof woof'
    }
}

console.log(dog.name, dog.color, dog.age, dog.bark());

dog.breed = 'juman'
dog.getDogInfo = function(){
    return this
}
console.log(dog.getDogInfo());
*/
/*
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}

let a = ''
let defaul = 0

for(const person in users){
    if (users[person].skills.length > defaul){
        a = person
        defaul = users[person].skills.length
    }
}

console.log(a);

for(const person in users){
    if (users[person].skills.indexOf('MongoDB') !== -1 && users[person].skills.indexOf('Express') !== -1 && users[person].skills.indexOf('React') !== -1 && users[person].skills.indexOf('Node') !== -1){
        console.log(person);
    }
}

users.Melvin = {
    email: 'melvin@melvin.com',
    skills: ['HTML', 'CSS'],
    age: 20,
    isLoggedIn: false,
    points: 30
}

console.log(Object.keys(users))
console.log(Object.values(users))
`${counName}\nCapital: ${counName}`

for (const counName in countries){
    console.log(`Name: ${countries[counName].name}\nCapital: ${countries[counName].capital}\nPopulation: ${countries[counName].population}\nLanguage: ${countries[counName].languages}`);
}
let personAccount = {
    firstName: 'Melvin',
    lastName: 'Arellano',
    incomes: {
      pilot: 5000,
      allowance: 100
    },
    expenses: {
      food: 50,
      loadNet: 100
    },
    totalIncome: function(){
      let totaled = 0
      let lenn = Object.values(personAccount.incomes).length
      for (let i = 0; i < lenn; i++){
        totaled += Object.values(personAccount.incomes)[i]
      }
      return totaled
    },
    totalExpenses: function(){
      let totaled = 0
      let lenn = Object.values(personAccount.expenses).length
      for (let i = 0; i < lenn; i++){
        totaled += Object.values(personAccount.expenses)[i]
      }
      return totaled
    },
    addIncome: function(vall){
      this.incomes.a = vall
    },
    addExpense: function(vall){
      this.expenses.add = vall
    },
    accountBalance: function(){
      return this.totalIncome() - this.totalExpenses()
    },
    accountInfo: function(){
      let infoIncome = () => {
        let inn = Object.entries(this.incomes)
        let arr = []
        for (let i = 0; i < inn.length; i++){
          let a = inn[i]
          b = a.join(': ')
          arr.push(b)
        }
        return arr
      }
      let infoExpenses = () =>{
        let out = Object.entries(this.expenses)
        let arr = []
        for (let i = 0; i < out.length; i++){
          let a = out[i]
          b = a.join(': ')
          arr.push(b)
        }
        return arr
      }
      return `Name: ${this.firstName} ${this.lastName}\nIncomes: ${infoIncome()}\nExpenses: ${infoExpenses()}\nBalance: ${this.accountBalance()}`
    },
}
console.log(personAccount.accountInfo());

const users = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
];

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

//sign up
let signUp = (username, email, password) => {
  //random id
  let randomizer = function(){
    let chars = 'abcdefghijklmnopqrstuvwxyz1234567890'
    let randomId = ''
    for (let i = 0; i < 6; i++){
      randomId += chars[Math.floor(Math.random() * chars.length)]
    }
    return randomId
  }

  //for data
  let dateSet = function() {
    let dateData = new Date()
    let mm = dateData.getMonth()
    let dd = dateData.getDate()
    let yy = dateData.getFullYear()
    let hr = dateData.getHours()
    let min = dateData.getMinutes()
    return `${mm}/${dd}/${yy} ${hr}:${min}`
  }

  let theSwitch = 1

  for (let i = 0; i < (users.length - 1); i++){
    if (username === users[i].username){
      theSwitch = 0
      console.log('Sorry account exist');
    }
    if (randomizer() === users[i]._id){
      theSwitch = 0
      console.log('Sorry account id exist');
    }
  }
  if (theSwitch == 1){
    users.push({
      _id: randomizer(),
      username: username,
      email: email,
      password: password,
      createdAt: dateSet(),
      isLoggedIn: false
    })
  }
}
signUp('asda', 'tow', 'as')
signUp('aaaa', 'towasdasd', 'asasdasd')
console.log(users);

let signIn = (userIn) => {
  let flag = 0
  for (let i = 0; i < (users.length); i++){
    let obContainer = Object.values(users[i])
    
    console.log(obContainer[1]);
    if (userIn === obContainer[1]){
      flag = 1
    }
  }
  if (flag == 1){
    console.log('signed in');
  }
  else {
    console.log('please sign in');
  }
}
signIn('aaaa')

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

let rateProduct = function(ratingProduct, rating){
  let flagId = 0
  let container = 0
  
  for (let i = 0; i < products.length; i++){
    let objectCom = Object.values(products[i])
    if (ratingProduct == objectCom[0]){
      flagId = 1
      container = i
    }
  }

  let chars = 'abcdefghijklmnopqrstuvwxyz1234567890'
  let userIdGenerator = ''
  for (let i = 0; i < 6; i++){
    userIdGenerator += chars[Math.floor(Math.random() * chars.length)]
  }

  if (flagId == 1){
    products[container].ratings.push({userId: userIdGenerator, rate: rating})
  }
}
// to rate. use functio with parameters of (id then rating 1-5)
rateProduct('aegfal', 5)
rateProduct('eedfcf', 4)

console.log(products);

console.log(products[0].ratings[0].rate)

let ratingAverage = function(productIndex){
  let ratingsContainer = products[productIndex].ratings
  let ratingsTotal = 0
  for (let i = 0; i < ratingsContainer.length; i++){
    ratingsTotal += products[productIndex].ratings[i].rate
  }
  return ratingsTotal/ratingsContainer.length
}

ratingAverage(0)
console.log(ratingAverage(0));

let likeProduct = function(productIndex){
  let chars = 'abcdefghijklmnopqrstuvwxyz1234567890'
  let userIdGenerator = ''
  for (let i = 0; i < 6; i++){
    userIdGenerator += chars[Math.floor(Math.random() * chars.length)]
  }

  
  let pushLike = 0
  let likeContainer = products[productIndex].likes
  for (let i = 0; i < likeContainer.length; i++){
    if (userIdGenerator == products[productIndex].likes[i]){
      products[productIndex].likes.splice(i, 1)
    }
    else if (userIdGenerator != products[productIndex].likes[i]){
      pushLike = 1
    }
    else {

    }
  }
  if (pushLike == 1){
    products[productIndex].likes.push(userIdGenerator)
  }
}

likeProduct(1)
console.log(products);
*/

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

console.log(products[0].ratings)








































