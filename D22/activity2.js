// Preparing body
document.body.setAttribute('style', 'padding: 0; margin: 0; font-family: Calibri, sans')

// creating heading
let h1 = document.createElement('h1')
let p1 = document.createElement('p')
let p2 = document.createElement('p')
let p3 = document.createElement('p')
// h1
h1.textContent = 'WORLD COUNTRIES LIST'
h1.style.letterSpacing = '8px'
h1.style.textAlign = 'center'
h1.style.margin = '0px'
h1.style.padding = '10px'
// p1
let p1Inject = `Total Number of Countries: ${countries.length}`
p1.textContent = p1Inject
p1.style.fontWeight = '900'
p1.style.textAlign = 'center'
p1.style.margin = '1px'
p1.style.fontSize = '16px'
// p2
p2.textContent = '30DaysOfJavascript:DOM Day 2'
p2.style.textAlign = 'center'
p2.style.margin = '2px'
p2.style.fontSize = '13px'
// p3
p3.textContent = 'Melvin Arellano'
p3.style.textAlign = 'center'
p3.style.margin = '1px 0 10px'
p3.style.fontSize = '13px'

// append everything
document.body.append(h1, p1, p2, p3)

// NEXT DIV
// creating containers to html
let div1 = document.createElement('div')
document.body.append(div1)
div1.classList.add = 'divisor'
div1.style.width = '800px'
div1.style.margin = 'auto'
div1.style.display = 'flex'
div1.style.flexDirection = 'row'
div1.style.flexWrap = 'wrap'
div1.style.justifyContent = 'center'

div1.style.overflow = 'hidden'

for (let a = 0; a < countries.length; a++){
    let box = document.createElement('div')
    box.innerHTML = `<span>${countries[a].name}</span>`
    div1.append(box)
    box.style.borderRadius = '4px'
    box.style.backgroundColor = 'white'
    box.style.width = '160px'
    box.style.height = '160px'
    box.style.margin = '6px'
    box.style.position = 'relative'
    box.style.boxShadow = '0px 0px 5px #b0b0b0'
    
}

let span = document.querySelectorAll('span')
    for (let item of span){
        item.setAttribute('style', 'text-transform: uppercase; font-size: 15px; text-align: center; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)')
    }
console.log(span);






























