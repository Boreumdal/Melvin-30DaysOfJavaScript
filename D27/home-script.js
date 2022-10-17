
// h1
document.querySelector('h1#head1').textContent = 'Melvin Arellano'

//banner
let counter = 0
function toCountries(){
    document.querySelector('p#ban').innerHTML = ''
    if (counter < challenge2020.author.titles.length){
        let icon = document.createElement('span')
        icon.className = 'icon'
        let text = document.createElement('span')
        text.className = 'text'
        icon.innerText = challenge2020.author.titles[counter][0]
        text.innerText = challenge2020.author.titles[counter][1]
        
        document.querySelector('p#ban').append(icon, text)
        counter += 1
        if (counter == 5){
            counter = 0
        }
    }
}
toCountries()
setInterval(toCountries, 3000)

// main > section > text
document.querySelector('p#txt').textContent = challenge2020.author.bio

// main > section > cards
for (let a = 0; a < 3; a++){
    let div = document.createElement('div')
    div.className = 'cardpupil'
    let p = document.createElement('p')
    p.textContent = challenge2020.challenges[a].name
    div.append(p)
    document.querySelector('section.card').append(div)
}

// main > section > msg
let msg = document.createElement('span')
let p = document.querySelector('p#msg span')
msg.className = 'msg'

// queries what i teach
function keyw(){
    let randIndex = Math.floor(Math.random() * challenge2020.keywords.length) - 1
    return challenge2020.keywords[randIndex-1]
}
function rgb(){
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    document.querySelector('p#msg span').style.color = `rgb(${r},${g},${b})`
}
function setter(){
    let pspan = document.querySelector('p#msg span')
    let spanner = document.createElement('span')
    pspan.textContent = ''
    spanner.textContent = keyw()
    pspan.append(spanner)
    rgb()
}

setInterval(setter, 3000)





































































































































































































































































































