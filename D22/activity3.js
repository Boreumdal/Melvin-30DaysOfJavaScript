// preparing css for html body
document.body.setAttribute('style', 'font-family: Calibri, sans-serif; margin: 0; padding: 0;')

// heading section
// h1
let h1 = document.createElement('h1')
let h1Vals = `${challenge2020.challengeTitle} in <span id="2020">${challenge2020.challengeYear}</span>` 
h1.innerHTML = h1Vals
let yearSelector = h1.querySelector('span')
yearSelector.style.fontSize = '60px'
yearSelector.style.padding = '0'
yearSelector.style.margin = '0'
function rand1(){
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    let rgb = `rgb(${r},${g},${b})`
    yearSelector.style.color = rgb
    yearSelector.style.transition = '.5s'
}
setInterval(rand1, 1000)

// h3
let h3 = document.createElement('h3')
h3.textContent = challenge2020.challengeSubtitle
h3.style.textDecoration = 'underline'

// date
let spanDate = document.createElement('p')
let monthsArray = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let dateToday = new Date()
let mins = ''
let hours = ''
if (dateToday.getMinutes() < 10){
    mins = '0' + dateToday.getMinutes()
}
else {
    mins = dateToday.getMinutes()
}
if (dateToday.getHours() < 10){
    hours = '0' + dateToday.getHours()
}
else {
    hours = dateToday.getHours()
}
let today = `${monthsArray[dateToday.getMonth()]} ${dateToday.getDate()}, ${dateToday.getFullYear()} ${hours}:${mins}`
spanDate.textContent = today
spanDate.style.padding = '6px 10px'
function rand2(){
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    let rgb = `rgb(${r},${g},${b})`
    spanDate.style.backgroundColor = rgb
    spanDate.style.transition = '.5s'
}
setInterval(rand2, 1000)

// centralizing headers
h1.style.textAlign = 'center'
h3.style.textAlign = 'center'
spanDate.style.textAlign = 'center'
spanDate.style.width = 'fit-content'
spanDate.style.margin = 'auto'

document.body.append(h1, h3, spanDate)

// the divs
let divContainer = document.createElement('div')
divContainer.style.backgroundColor = 'lightblue'
divContainer.style.width = '55%'
divContainer.style.display = 'flex'
divContainer.style.flexDirection = 'column'
divContainer.style.margin = '20px auto'
divContainer.setAttribute('style', 'width: 55%; display: flex; flex-direction: column; margin: 20px auto;')

for (let a = 0; a < challenge2020.challenges.length; a++){
    let row = document.createElement('div')
    switch (a){
        case 0:
            row.style.backgroundColor = '#20bf72' // green
            break
        case 1:
            row.style.backgroundColor = '#fddb3a' // yellow
            break
        default:
            row.style.backgroundColor = '#fd5e53' // red
    }
    row.style.margin = '5px'
    row.style.display = 'flex'
    row.style.flexDirection = 'row'
    row.style.minHeight = '40px'
    row.style.alignItems = 'center'
    row.style.justifyContent = 'space-between'
    row.style.padding = '16px 40px'
    row.innerHTML = `
    <div style="width: 45%;">
        <span>${challenge2020.challenges[a].name}</span>
    </div>
    <div style="width: 45%;">
        <details>
            <summary>${challenge2020.challenges[a].topics[0]}</summary>
        </details>
    </div>
    <div style="width: 10%;">
        <span style="float: right;">${challenge2020.challenges[a].status}</span
    </div>`
    for (let b = 0; b < challenge2020.challenges[a].topics.length; b++){
        let detailQ = row.querySelector('details')
        detailQ.innerHTML += `<span>${challenge2020.challenges[a].topics[b]}</span>`
        let spans = detailQ.querySelectorAll('span')
        for (let item of spans){
            item.style.display = 'block'
        }
    }
    divContainer.append(row)
    
}
document.body.append(divContainer)

// title and social links
let author = document.createElement('h1')
authorContent = challenge2020.author.firstName + ' ' + challenge2020.author.lastName
author.textContent = authorContent
author.style.textAlign = 'center'
author.style.padding = '0'
author.style.margin = '0'

// links container
let authorLinksContainer = document.createElement('div')
authorLinksContainer.style.display = 'flex'
authorLinksContainer.style.justifyContent = 'center'

// individual links
for (let a = 0; a < challenge2020.author.socialLinks.length; a++){
    let val = challenge2020.author.socialLinks[a].fontawesomeIcon
    let links = document.createElement('div')
    links.innerHTML = val // giving value
    let valStyle = links.querySelectorAll('i') // select every i para sa style
    for (let item of valStyle){
        item.setAttribute('style', 'font-size: 32px; margin: 4px;')
    }
    authorLinksContainer.appendChild(links) // append sa container
}
document.body.append(author, authorLinksContainer) // append lahat

// bio
let bioContainer = document.createElement('div')
bioContainer.setAttribute('style', 'width: 58%; margin: 40px auto;')
let bio = document.createElement('p')
bio.textContent = challenge2020.author.bio
bio.style.textAlign = 'center'
bioContainer.append(bio)
document.body.append(bioContainer)

// mga list
let mainContainer = document.createElement('div') // main div
mainContainer.setAttribute('style', 'width: 60%; display: flex; flex-direction: row; justify-content: space-around; margin: auto;')


// let keys = Object.keys(challenge2020.author)
// let aaaa = [] // TO BE CONTINUED


// titles
let container = document.createElement('div') // singular div

let titleTitle = document.createElement('p')
titleTitle.setAttribute('style', 'font-size: 18px; font-weight: 900;')
titleTitle.innerText = 'Titles'//keys[2]
container.append(titleTitle)


for (let a = 0; a < challenge2020.author.titles.length; a++){
    let titleContainer = document.createElement('span')
    titleContainer.setAttribute('style', 'display: block;')
    titleContainer.innerText = challenge2020.author.titles[a][0] + ' ' + challenge2020.author.titles[a][1]
    container.append(titleContainer)
}
mainContainer.append(container)

// skills
let container1 = document.createElement('div')
let titleTitle1 = document.createElement('p')
titleTitle1.setAttribute('style', 'font-size: 18px; font-weight: 900;')
titleTitle1.innerText = 'Skills' //keys[5]
container1.append(titleTitle1)

for (let a = 0; a < challenge2020.author.skills.length; a++){
    let skillsContainer = document.createElement('span')
    skillsContainer.setAttribute('style', 'display: block;')
    skillsContainer.innerText = challenge2020.author.skills[a]
    container1.append(skillsContainer)
}
mainContainer.append(container1)

// qualifications
let container2 = document.createElement('div')
let titleTitle2 = document.createElement('p')
titleTitle2.setAttribute('style', 'font-size: 18px; font-weight: 900;')
titleTitle2.innerText = 'Qualifications' //keys[3]
container2.append(titleTitle2)

for (let a = 0; a < challenge2020.author.qualifications.length; a++){
    let qualificationContainer = document.createElement('span')
    qualificationContainer.setAttribute('style', 'display: block;')
    qualificationContainer.innerText = challenge2020.author.qualifications[a]
    container2.append(qualificationContainer)
}
mainContainer.append(container2)
document.body.append(mainContainer)

// keywords

let keywordsMainContainer = document.createElement('div')
keywordsMainContainer.setAttribute('style', 'width: 55%; margin: 40px auto;')
let keywordsMainTitle = document.createElement('p')
keywordsMainTitle.setAttribute('style', 'font-size: 18px; font-weight: 900; padding: 0; margin: 0;')
keywordsMainTitle.textContent = 'Keywords'
keywordsMainContainer.append(keywordsMainTitle)

// keywords words
let keywordsContainer = document.createElement('div')
keywordsContainer.setAttribute('style', 'padding: 10px 20px; display: flex; flex-flow: row wrap')

for (let key of challenge2020.keywords){
    let keyword = document.createElement('span')
    keyword.textContent = '# ' + key
    keyword.style.fontWeight = '600'
    keyword.style.margin = '3px 8px'
    keyword.style.padding = '4px 9px'
    keyword.style.borderRadius = '45px'
    keywordsContainer.append(keyword)
    
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    let rgb = `rgb(${r},${g},${b})`
    // if ( r && g && b < 150){
    //     keyword.style.color = '#fff'
    // }
    keyword.style.backgroundColor = rgb

}
keywordsMainContainer.append(keywordsContainer)
document.body.append(keywordsMainContainer)


