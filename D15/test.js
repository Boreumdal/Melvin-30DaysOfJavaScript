// class Statistics {
//     constructor (){ 
//         this.ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
//         this.sortedAges = this.ages.sort((a, b) => { return a - b })
//     }

//     count (){
//         return this.ages.length
//     }

//     sum (){
//         let total = 0
//         for (let num of this.ages){
//             total += num
//         }
//         return total
//     }

//     min (){
//         return this.sortedAges[0]
//     }

//     max (){
//         return this.sortedAges[this.ages.length-1]
//     }

//     range (){
//         return this.sortedAges[this.ages.length-1] - this.sortedAges[0]
//     }

//     mean (){
//         return Math.ceil(this.sum() / this.count())
//     }

//     median (){
//         if (this.count() % 2 === 0){
//             return (this.sortedAges[(this.count() / 2) - 1] + this.sortedAges[(this.count() / 2)]) / 2
//         }
//         else {
//             return this.sortedAges[Math.ceil((this.count() / 2) - 1)]
//         }
//     }

//     mode (){
//         let tagged = {}, one = 0, two = ''
//         for (let i = 0; i < this.sortedAges.length; i++){
//             let item = this.sortedAges[i]
//             if (tagged[item]){
//                 tagged[item] += 1
//             }
//             else {
//                 tagged[item] = 1
//             }

//             if (one < tagged[item]){
//                 one = tagged[item]
//                 two = item
//             }

//         }
//         return  {'mode': two, 'count': one}
//     }

//     variance (){
//         let temporary = []
//         let sumOfSquared = 0
//         let populationMinusOne = this.sortedAges.length - 1
//         let mean = this.mean()
//         for (let item of this.sortedAges){
//             temporary.push((item - mean)**2)
//         }
//         for (let item of temporary){
//             sumOfSquared += item
//         }
//         return sumOfSquared / populationMinusOne
//     }

//     std (){
//         let vr = this.variance()
//         let sd = Math.round(Math.sqrt(vr) * 100) / 100
//         return sd
//     }

//     freqDist (){
//         let temp = {}
//         for (let item of this.sortedAges){
//             if (temp[item]){
//                 temp[item] += 1
//             }
//             else {
//                 temp[item] = 1
//             }
//         }
//         let tempArray = Object.entries(temp).sort((a, b) => { return b[1] - a[1] })
//         let result = []
//         for (let a = 0; a < tempArray.length; a++){

//             let percentage = (tempArray[a][1] / this.count()) * 100

//             result.push([tempArray[a][0], percentage + '.0'])
//         }
//         return result
//     }

//     describe (){
//         console.log('Count:', this.count())
//         console.log('Sum: ', this.sum())
//         console.log('Min: ', this.min())
//         console.log('Max: ', this.max())
//         console.log('Range: ', this.range())
//         console.log('Mean: ', this.mean())
//         console.log('Median: ',this.median())
//         console.log('Mode: ', this.mode())
//         console.log('Variance: ',this.variance())
//         console.log('Standard Deviation: ', this.std())
//         console.log('Frequency Distribution: ',this.freqDist())
//     }
// }

// let statistics = new Statistics()
// // console.log('Count:', statistics.count())
// // console.log('Sum: ', statistics.sum())
// // console.log('Min: ', statistics.min())
// // console.log('Max: ', statistics.max())
// // console.log('Range: ', statistics.range())
// // console.log('Mean: ', statistics.mean())
// // console.log('Median: ',statistics.median())
// // console.log('Mode: ', statistics.mode())
// // console.log('Variance: ',statistics.variance())
// // console.log('Standard Deviation: ', statistics.std())
// // console.log('Frequency Distribution: ',statistics.freqDist())
// console.log(statistics.describe());

class PersonAccount {
    constructor (fname, lname){
        this.first = fname
        this.last = lname
        this.incomes = []
        this.expenses = []
    }
    
    totalIncome (){
        let totalIn = 0
        for (let item of this.incomes){
            totalIn += item[0]
        }
        console.log(this.first,', your total income is', totalIn);
    }
    
    totalExpense (){
        let totalOut = 0
        for (let item of this.expenses){
            totalOut += item[0]
        }
        console.log(this.first,', your total expense is', totalOut);
    }

    accountInfo (){
        console.log('Hello,', this.first, this.last)
        console.log('%cYour incomes are: ', 'color: lightgreen');
        for (let data of this.incomes){
            console.log(data[1], ':', data[0]);
        }
        console.log('%cYour expenses are: ', 'color: lightgreen');
        for (let data of this.expenses){
            console.log(data[1], ':', data[0]);
        }
        let totalInn = 0
        let totalExx = 0
        for (let data of this.incomes){
            totalInn += data[0]
        }
        for (let data of this.expenses){
            totalExx += data[0]
        }
        console.log('Your account balance is: ', totalInn - totalExx);
    }

    addIncome (income, description){
        return this.incomes.push([income, description])
    }

    addExpense (income, description){
        return this.expenses.push([income, description])
    }

    accountBalance (){
        let totalInn = 0
        let totalExx = 0
        for (let data of this.incomes){
            totalInn += data[0]
        }
        for (let data of this.expenses){
            totalExx += data[0]
        }
        console.log('Your account balance is: ', totalInn - totalExx);
    }

}

let p1 = new PersonAccount('Melvin', 'Arellano')

p1.addIncome(1000, 'pulot')
p1.addIncome(1000, 'panalo')
p1.addExpense(100, 'kuryente')
p1.addExpense(100, 'mainte')
p1.addExpense(60, 'load')

console.log(p1.accountInfo());


































































































































































































































































































































































































































































































































