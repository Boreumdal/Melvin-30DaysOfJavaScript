

function randomizer(){
    document.querySelector('p').innerHTML = ''
    let sentence = '30 DAYS OF JAVASCRIPT CHALLENGE 2020 MELVIN ARELLANO'
    let sentenceSplit = sentence.split('')

    sentenceSplit.forEach(letter => {

        let r = Math.floor(Math.random() * 255)
        let g = Math.floor(Math.random() * 255)
        let b = Math.floor(Math.random() * 255)
        let rgb = `rgb(${r},${g},${b})`

        let span = document.createElement('span')
        span.innerText = letter
        span.style.color = rgb
        document.querySelector('p').append(span)
    })

    let fonts = ['Helvetica', 'Arial', 'Arial Black', 'Verdanay', 'Tahoma', 'Trebuchet MS', 'Impact', 'Gill Sans', 'Bradley Hand', 'Brush Script MT', 'Luminari', 'Comic Sans MS']
    let fontsIndex = Math.floor(Math.random() * fonts.length)

    document.body.style.fontFamily = fonts[fontsIndex]

    let rBody = Math.floor(Math.random() * 255)
    let gBody = Math.floor(Math.random() * 255)
    let bBody = Math.floor(Math.random() * 255)
    let rgbBody = `rgb(${rBody},${gBody},${bBody})`

    document.querySelector('main').style.backgroundColor = rgbBody
}

setInterval(randomizer, 5000)