// making calibri as default font
document.body.style.fontFamily = 'Calibri, sans-serif'
// making titles h1 h2
let head1 = document.createElement('h1')
let head2 = document.createElement('h3')
let head3 = document.createElement('p')
let div = document.createElement('div')

// heading 1
head1.textContent = 'Number Generator'
head1.setAttribute('style', 'padding: 0; margin: 4px 0; text-align: center')
document.body.append(head1)

// heading 2
head2.textContent = '30DaysOfJavaScript:DOM Day 2'
head2.setAttribute('style', 'padding: 0; margin: 0; text-align: center; text-decoration: underline')
document.body.append(head2)

// heading 3
head3.textContent = 'Melvin Arellano'
head3.setAttribute('style', 'padding: 0; margin: 4px 0 10px;text-align: center;')
document.body.append(head3)
document.body.append(div)

// styling div
div.style.margin = 'auto'
div.style.width = '60%'
div.style.flexWrap = 'wrap'
div.style.display = 'flex'
div.style.justifyContent = 'center'
// nums
for (let a = 0; a < 102; a++){
    let num = document.createElement('span')
    num.textContent = a
    num.style.padding = '6px'
    num.style.margin = '1px'
    if (a % 2 == 0){ // even
        num.style.backgroundColor = '#20bf72'
        document.querySelector('div').appendChild(num)
    }
    if (a % 2 != 0){ // odd
        num.style.backgroundColor = '#fddb3a'
        document.querySelector('div').appendChild(num)
    }
    let switchInput = 0 // prime backend
    for (let b = 2; b < a; b++){
        if (a % b === 0){
            switchInput = 1
            break
        }
    }
    if (a > 1 && switchInput == 0){ // prime
        num.style.backgroundColor = '#fd5e53'
        document.querySelector('div').appendChild(num)
    }
}
let numSpan = document.querySelectorAll('span')
for (let indvidualNum of numSpan){
    indvidualNum.style.width= '30px'
    indvidualNum.style.padding = '20px 50px'
    indvidualNum.style.height = '30px'
    indvidualNum.style.color = 'white'
    indvidualNum.style.textAlign = 'center'
    indvidualNum.style.fontSize = '30px'
    indvidualNum.style.fontWeight = '900'
}