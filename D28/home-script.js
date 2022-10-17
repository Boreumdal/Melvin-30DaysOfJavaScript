const fname = document.querySelector('input#fname')
const lname = document.querySelector('input#lname')
const country = document.querySelector('input#country')
const score = document.querySelector('input#score')
const addplayer = document.querySelector('input#playerBtn')
let errCatch = document.querySelector('p#error')
let base = [] // database for players

addplayer.addEventListener('click', addPlayer)

let identity = ''

function addPlayer(){
    if (fname.value && lname.value && country.value && score.value){
        // for creation date
        let dateVar = new Date()
        let dateCreated = `${dateVar.getMonth()}/${dateVar.getDate()}/${dateVar.getFullYear()} ${dateVar.getHours()}:${dateVar.getMinutes()}`

        // capitalization of first letter in name and country
        let fnameDecompile = fname.value.split('')
        let fnameFirstLetter = fnameDecompile[0]
        fnameDecompile.splice(0, 1)
        fnameDecompile.unshift(fnameFirstLetter.toUpperCase())
        let finalFname = fnameDecompile.join('')

        let lnameDecompile = lname.value.split('')
        let lnameFirstLetter = lnameDecompile[0]
        lnameDecompile.splice(0, 1)
        lnameDecompile.unshift(lnameFirstLetter.toUpperCase())
        let finalLname = lnameDecompile.join('')

        let countryDecompile = country.value.split('')
        let countryFirstLetter = countryDecompile[0]
        countryDecompile.splice(0, 1)
        countryDecompile.unshift(countryFirstLetter.toUpperCase())
        let finalcountry = countryDecompile.join('')

        identity = idGenerator()
        base.push({
            'idKey': identity,
            'firstname': finalFname,
            'lastname': finalLname,
            'countryBase': finalcountry,
            'scoreBase': +score.value,
            'create': dateCreated
        })
        display()
    }
    else {
        errCatch.style.visibility = 'visible'
        errCatch.innerText = 'Please fill all input fields before adding player'
    }
    
}

function idGenerator(){
    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0987654321'
    let generated = ''
    for (let a = 0; a < 6; a++){
        let randomChar = Math.ceil(Math.random() * (chars.length - 1))
        generated += chars[randomChar]
    }
    return generated
}

function display(){
    errCatch.style.visibility = 'hidden'
    if (base.length < 0){
        errCatch.style.visibility = 'visible'
        errCatch.innerText = 'Error, please enter something'
    }
    else {
        document.querySelector('main').innerHTML = ''
        base.forEach(row =>{
            
            // create row div
            let rowContainer = document.createElement('div')
            rowContainer.classList.add('row')

            // create name column
            const nameContainer = document.createElement('div')
            nameContainer.className = 'name'
            //name p=name creation
            const nameFull = document.createElement('p')
            nameFull.setAttribute('id', 'fullname')
            nameFull.innerText = row.firstname + ' ' + row.lastname
            //date p=date creation
            const dateFull = document.createElement('p')
            dateFull.setAttribute('id', 'date')
            dateFull.innerText = row.create
    
            // append datefull at namefull to namecontainer
            nameContainer.append(nameFull, dateFull)
    
            // append namecontainer to rowcontainer
            rowContainer.append(nameContainer) 
    
    
            //country column
            // countrydiv creation
            const countryContainer = document.createElement('div')
            countryContainer.className = 'country'
    
            // countryp creation
            const countryP = document.createElement('p')
            countryP.innerText = row.countryBase
    
            // append countryp to countrycontainer
            countryContainer.append(countryP)
    
            //append countrycontainer to rowcontainer
            rowContainer.append(countryContainer)
    
    
            // socre column
            // scorediv creation
            const scoreContainer = document.createElement('div')
            scoreContainer.className = 'score'
    
            // scoreholder creation
            const scoreHold = document.createElement('p')
            scoreHold.innerText = row.scoreBase
    
            // append scorehold to scorecontainer
            scoreContainer.append(scoreHold)
    
            // append scorecontainer to row
            rowContainer.append(scoreContainer)


            // buttons column
            const btnContainer = document.createElement('div')
            btnContainer.className = 'btn'


            let btn1 = document.createElement('button')
            btn1.innerHTML = '<i class="fa-solid fa-trash"></i>'
            btn1.dataset.idKey = row.idKey

            btn1.addEventListener('click', () => {
                let flagIndex = 0
                for (let a = 0; a < base.length; a++){
                    if (base[a].idKey == btn1.dataset.idKey){
                        flagIndex = a
                    }
                }
                base.splice(flagIndex, 1)
                display()
            })

            btnContainer.append(btn1)

            let btn2 = document.createElement('button')
            btn2.innerHTML = '<strong>-5</strong>'
            btn2.dataset.idKey = row.idKey
            btn2.addEventListener('click', () => {
                let flagIndex = 0
                for (let a = 0; a < base.length; a++){
                    if (base[a].idKey == btn2.dataset.idKey){
                        flagIndex = a
                    }
                }
                base[flagIndex].scoreBase -= 5
                display()
            })

            btnContainer.append(btn2)

            let btn3 = document.createElement('button')
            btn3.innerHTML = '<strong>+5</strong>'
            btn3.dataset.idKey = row.idKey
            btn3.addEventListener('click', () => {
                let flagIndex = 0
                for (let a = 0; a < base.length; a++){
                    if (base[a].idKey == btn3.dataset.idKey){
                        flagIndex = a
                    }
                }
                base[flagIndex].scoreBase += 5
                display()
            })

            btnContainer.append(btn3)




















            rowContainer.append(btnContainer)

            document.querySelector('main').append(rowContainer)


        })
        identity = ''
    }
    
}




































































































































































































































































































































