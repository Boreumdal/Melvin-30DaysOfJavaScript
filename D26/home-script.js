// header p
document.querySelector('p.ncountries').textContent = 'Total number of countries: ' + countries.length
let nsearch = document.querySelector('span.nsearch')
nsearch.textContent = 'a'
nsearch.style.visibility = 'hidden'

// main funcitons
function defaultaz(){
    // display muna lahat ng country
    
    document.querySelector('main').innerHTML = ''
    for (let a = 0; a < countries.length; a++){
        let countryContainer = document.createElement('div')
        let p = document.createElement('p')
        countryContainer.className = 'country'
        p.textContent = countries[a].name
        countryContainer.append(p)
        document.querySelector('main').append(countryContainer)
    }
}

function start(){
    // getting data from input element
    document.querySelector('input#start').style.backgroundColor = 'rgb(30, 125, 33)'
    document.querySelector('input#any').style.backgroundColor = ''

    let inputElem = document.querySelector('input#search')
    let inputElemAttr = {
        'type' : 'text',
        'id' : 'search',
        'placeholder' : 'Search country...',
        'maxlength' : '1'
    }
    for (let attr in inputElemAttr){
        inputElem.setAttribute(attr, inputElemAttr[attr])
    }

    inputElem.addEventListener('input', () => {
        let input = inputElem.value
        document.querySelector('main').innerHTML = ''

        if (input){
            let countriesArray = []
            countries.forEach(data => {
                if (data.name[0] == input.toUpperCase()){
                    countriesArray.push(data.name)
                }
            })

            for (let x = 0; x < countriesArray.length; x++){
                let countryContainer = document.createElement('div')
                let p = document.createElement('p')
                countryContainer.className = 'country'
                p.textContent = countriesArray[x]
                countryContainer.append(p)
                document.querySelector('main').append(countryContainer)
            }
            nsearch.style.visibility = 'visible'
            nsearch.innerHTML = `Countries starts with <span class="letter">${input.toUpperCase()}</span> are <span class="lenLetter">${countriesArray.length}</span>`
        }
        else {
            nsearch.style.visibility = 'visible'
            nsearch.innerHTML = `Please enter a letter to begin the search`
            defaultaz()
        }
    })
}

function any(){
    document.querySelector('input#start').style.backgroundColor = ''
    document.querySelector('input#any').style.backgroundColor = 'rgb(30, 125, 33)'

    let inputElem = document.querySelector('input#search')
    inputElem.removeAttribute('maxlength')

    inputElem.addEventListener('input', f => {
        let input = inputElem.value
        document.querySelector('main').innerHTML = ''
            
        if (input){
            let found = []

            countries.forEach(data => {
                if (data.name.includes(input)){
                    found.push(data.name)
                }
            })
            found.forEach(data => {
                let countryContainer = document.createElement('div')
                let p = document.createElement('p')
                countryContainer.className = 'country'
                p.textContent = data
                countryContainer.append(p)
                document.querySelector('main').append(countryContainer)
            })
            nsearch.style.visibility = 'visible'
            nsearch.innerHTML = `Countries containing <span class="letter">${input}</span> are <span class="lenLetter">${found.length}</span>`
        }
        else {
            nsearch.style.visibility = 'visible'
            nsearch.innerHTML = `Please enter value to input field`
            defaultaz()
        }
    })
}

document.querySelector('input#start').addEventListener('click', f => {
    start()
})
document.querySelector('input#any').addEventListener('click', f => {
    any()
})

document.querySelector('input#az').addEventListener('click', f => {
    defaultaz()
    document.querySelector('input#start').style.backgroundColor = ''
    document.querySelector('input#any').style.backgroundColor = ''
    document.querySelector('input#az').style.backgroundColor = ''
})

defaultaz()









