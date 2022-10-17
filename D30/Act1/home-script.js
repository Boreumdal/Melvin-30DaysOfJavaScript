document.body.onload = renderlink()

async function renderlink(){
    // countries array
    let countriesFull = []
    let countriesNotSorted = []
    
    let fetching = await fetch('restapi.txt')
    let gathered = await fetching.json()

    gathered.forEach(country => {
        // language undefine fix
        let languageContainer = [] // call
        if (country.languages != undefined){
            languageContainer.push(Object.values(country.languages))
        }
        if (country.languages == undefined){
            languageContainer.push(['No language'])
            
        }

        // no capital fix
        let capital = ''
        if (country.capital){
            capital = country.capital[0]
        }
        if (!country.capital){
            capital = 'No official capital'
        }

        countriesFull.push({
            'name': country.name.common,
            'capital': capital,
            'languages': languageContainer,
            'flag': country.flags.png,
            'population': country.population
        })
    })

    document.querySelector('p#countriesCount').innerText = `Cuurently, we have ${countriesFull.length} countries`

    countriesFull.forEach(a => {
        countriesNotSorted.push(a)
    })

    let countriesSorted = countriesNotSorted.sort((a,b) => {
        if (a.name > b.name) { return 1 }
        if (a.name < b.name) { return -1 }
        else { return 0 }
    })

    document.body.onload = main(countriesSorted , countriesNotSorted)

    
}

function main(arr, arrsorted){

    let worldCount = 0
    arr.forEach(country => {
        worldCount += country.population
    })

    document.querySelector('div.lower').innerHTML = ''
    let countriesFull = arr
    let input = document.querySelector('input#search')

    walanglaman(countriesFull)


    let one = 0
    let two = 0
    let three = 0
    document.querySelector('button#name').addEventListener('click', () => {
        
        document.querySelector('button#name').style.background = 'gray'
        document.querySelector('button#capital').style.background = '#2ed573'
        document.querySelector('button#population').style.background = '#2ed573'
        one += 1
        two = 0
        three = 0

        if (one == 1){
            countriesFull.sort((a, b) => {
                if (a.name > b.name) { return 1 }
                if (a.name < b.name) { return -1 }
                else { return 0 }
            })
            upper(countriesFull)
            displayCard(countriesFull)
        }
        else {
            one = 0
            countriesFull.sort((a, b) => {
                if (a.name > b.name) { return -1 }
                if (a.name < b.name) { return 1 }
                else { return 0 }
            })
            upper(countriesFull)
            displayCard(countriesFull)
        }
        

    })
    document.querySelector('button#capital').addEventListener('click', () => {
        
        document.querySelector('button#name').style.background = '#2ed573'
        document.querySelector('button#capital').style.background = 'gray'
        document.querySelector('button#population').style.background = '#2ed573'

        two += 1
        one = 0
        three = 0

        if (two == 1){
            countriesFull.sort((a, b) => {
                if (a.capital > b.capital) { return 1 }
                if (a.capital < b.capital) { return -1 }
                else { return 0 }
            })
            upper(countriesFull)
            displayCard(countriesFull)
        }
        else {
            two = 0
            countriesFull.sort((a, b) => {
                if (a.capital > b.capital) { return -1 }
                if (a.capital < b.capital) { return 1 }
                else { return 0 }
            })
            upper(countriesFull)
            displayCard(countriesFull)
        }
        
    })
    document.querySelector('button#population').addEventListener('click', () => {
        document.querySelector('button#name').style.background = '#2ed573'
        document.querySelector('button#capital').style.background = '#2ed573'
        document.querySelector('button#population').style.background = 'gray'

        three += 1
        one = 0
        two = 0

        if (three == 1){
            countriesFull.sort((a, b) => {
                return a.population - b.population
            })
            upper(countriesFull)
            displayCard(countriesFull)
        }
        else {
            three = 0
            countriesFull.sort((a, b) => {
                return b.population - a.population
            })
            upper(countriesFull)
            displayCard(countriesFull)
        }

    })

    input.addEventListener('input', () => {
        if (input.value){
            countriesFull = maylaman(arrsorted, input.value)
        }
        if (!input.value){
            walanglaman(arrsorted)
        }
    })

    function walanglaman(arr){
        document.querySelector('p#return').style.visibility = 'hidden'
        upper(arr)
        displayCard(arr)
    }

    function maylaman(arr, input){
        let temparr = arr
        let temparra = []
        
        temparr.forEach(data => {
            if (data.name.toLowerCase().includes(input.toLowerCase())){
                temparra.push(data)
            }
            
        })
        // dom return p
        document.querySelector('p#return').innerText = `${temparra.length} countries satisfied the search criteria`
        document.querySelector('p#return').style.visibility = 'visible'

        if (temparra.length == 0){
            document.querySelector('div.main-container').innerHTML = ''
            document.querySelector('div.lower').innerHTML = ''
            document.querySelector('div.main-container').innerHTML = '<p>No data found</p>'
            document.querySelector('div.lower').innerHTML = '<p>No data found</p>'
        }
        else {
            upper(temparra)
            displayCard(temparra)
        }
        
        return temparra
    }

    function upper(arr){
        let upperArray = arr

        autoGraph(upperArray, 0)

        function autoGraph(arr, num){
            let temp = []
            arr.forEach(data => { temp.push(data) })
            
            temp.sort((a, b) => {
                return b.population - a.population
            })

            displayGraph(temp, num)
            displayCard(upperArray)
        }

        document.querySelector('input#byPopulation').addEventListener('click', () => {
            autoGraph(arr, 0)
        })

        document.querySelector('input#byLanguage').addEventListener('click', () => {
            
            let tally = {}
            upperArray.forEach(lang => {
                let language = lang.languages[0]
                if (language.length > 1){
                    for (let a of language){
                        if (tally[a]){
                            tally[a] += 1
                        }
                        else {
                            tally[a] = 1
                        }
                    }
                }
                if (language.length == 1){
                    if (tally[language[0]]){
                        tally[language[0]] += 1
                    }
                    else {
                        tally[language[0]] = 1
                    }
                }
            })

            let finalLang = []
            Object.entries(tally).forEach(data => {
                finalLang.push({
                    'name': data[0],
                    'population': data[1]
                })
            })

            autoGraph(finalLang, 1)
        })
    }

    function displayGraph(arrayCountries, num){
        document.querySelector('div.lower').innerHTML = ''
        // attr max value
        let curHighest = 0
        
        arrayCountries.forEach(data => { // for max value of max attr
            if (curHighest < data.population){
                curHighest = data.population
            }
            else {
                curHighest = curHighest
            }
        })
        // if longer than 10, cut to d arrray to 10
        if (arrayCountries.length > 10){
            let temporaryArray = []
            if (num == 0){
                for (let temp = 0; temp < 11; temp++){
                    if (temp == 0){
                        temporaryArray.push({
                            'name': 'World',
                            'population': worldCount
                        })
                    }
                    else {
                        temporaryArray.push(arrayCountries[temp-1])
                    }
                    
                }
            }
            else {
                for (let temp = 0; temp < 10; temp++){
                    temporaryArray.push(arrayCountries[temp])
                }
            }
            
            temporaryArray.forEach(item => { 
                grapher(item, num)
                displayCard(item)
            })
        }
        else {
            arrayCountries.forEach(item => { 
                grapher(item, num)
                displayCard(item)
            })
        }
        
        function grapher(data, num){
            // creates row
            let row = document.createElement('div')
            row.className = 'row'

            // country name
            let rowData = document.createElement('div')
            rowData.className = 'row-content-data'
            rowData.innerText = data.name

            // country progress
            let rowProg = document.createElement('div')
            rowProg.className = 'row-content-prog'

            let progressInRow = document.createElement('progress')

            if (num == 1){
                let rowProgAttr = {
                    'max' : curHighest,
                    'value' : data.population
                }
                for (let attr in rowProgAttr){
                    progressInRow.setAttribute(attr, rowProgAttr[attr])
                }
            }
            else {
                let rowProgAttr = {
                    'max' : worldCount,
                    'value' : data.population
                }
                for (let attr in rowProgAttr){
                    progressInRow.setAttribute(attr, rowProgAttr[attr])
                }
            }
            
            
            rowProg.append(progressInRow)

            // cpuntry count
            let rowNum = document.createElement('div')
            rowNum.className = 'row-content-coun'
            rowNum.innerText = data.population.toLocaleString()

            row.append(rowData, rowProg, rowNum)
            document.querySelector('div.lower').append(row)
        }
    }

    function displayCard(arraa){
        document.querySelector('div.main-container').innerHTML = ''
        let temparr = arraa
        for (let a = 0; a < temparr.length; a++){
            card(temparr[a])
        }
    }

    function card(data){

            let card = document.createElement('div')
            card.className = 'card'

            let cardheading = document.createElement('div')
            cardheading.className = 'heading'

            let cardimg = document.createElement('img')
            cardimg.src = data.flag

            let cardtitle = document.createElement('p')
            cardtitle.innerText = data.name

            cardheading.append(cardimg, cardtitle)

            card.append(cardheading)


            let carddetails = document.createElement('div')
            carddetails.className = 'details'

            let detailCapital = document.createElement('p')
            detailCapital.innerText = `Capital: ${data.capital}`


            // languages arr to text
            let curLanguage = ''
            let detailLanguages = document.createElement('p')
            if (data.languages[0].length == 1){
                curLanguage = `Language: ${data.languages[0][0]}`
            }
            if (data.languages[0].length == 2){
                curLanguage = `Languages: ${data.languages[0][0]} and ${data.languages[0][1]}`
            }
            if (data.languages[0].length > 2){
                let maylang = ''
                for (let a = 0; a < data.languages[0].length; a++){
                    if (a == data.languages[0].length - 2){
                        maylang += `${data.languages[0][data.languages[0].length - 2]} and ${data.languages[0][data.languages[0].length - 1]}`
                    }
                    if (a < data.languages[0].length - 2) {
                        maylang += `${data.languages[0][a]}, `
                    }
                }
                curLanguage = `Languages: ${maylang}`
            }
            detailLanguages.innerText = curLanguage

            let detailPopulation = document.createElement('p')
            detailPopulation.innerText = `Population: ${data.population.toLocaleString()}`

            carddetails.append(detailCapital, detailLanguages, detailPopulation)

            card.append(carddetails)

            document.querySelector('div.main-container').append(card)
        
    }
    
}















































































































































































































































































































































































































































































































































