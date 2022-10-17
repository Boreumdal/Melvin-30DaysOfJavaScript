


document.querySelector('input#calcBtn').addEventListener('click', f => {
    // queries info on kilo then assigned to kg variable
    let kg = +document.querySelector('input#kilo').value

    if (isNaN(kg)){ // invalid?
        console.log('Enter valid number');a
    }
    else {
        if (kg == '' || kg == null || kg == 0){
            console.log('asdasdas');
        }
        else {
            // queries select element
            let selected = document.querySelector('select#planetoptions').value
            // queries result paragraph
            let res = document.querySelector("p#result")

            //queries paragraph for planet
            let resplanet = document.querySelector('p#resultParagraph')

            // query para sa planetam
            let planetPos = document.querySelector('div.planetimg')

            // setting default to gravity
            let gravity = 0
            
            switch (selected){
                case 'sun':
                    gravity = 274
                    planetPos.style.backgroundPosition = '-153px -119px'
                    planetPos.style.backgroundSize = 'auto'
                    break
                case 'earth':
                    gravity = 9.807
                    planetPos.style.backgroundPosition = '-1974px -125px'
                    planetPos.style.backgroundSize = 'auto'
                    break
                case 'mercury':
                    gravity = 3.7
                    planetPos.style.backgroundPosition = '-581px -125px'
                    planetPos.style.backgroundSize = 'auto'
                    break
                case 'venus':
                    gravity = 8.87
                    planetPos.style.backgroundPosition = '-1040px -126px'
                    planetPos.style.backgroundSize = 'auto'
                    break
                case 'mars':
                    gravity = 3.721
                    planetPos.style.backgroundPosition = '-1507px -126px'
                    planetPos.style.backgroundSize = 'auto'
                    break
                case 'jupiter':
                    gravity = 24.79
                    planetPos.style.backgroundPosition = '-2907px -119px'
                    planetPos.style.backgroundSize = 'auto'
                    break
                case 'saturn':
                    gravity = 10.44
                    planetPos.style.backgroundPosition = '-2439px -120px'
                    planetPos.style.backgroundSize = 'auto'
                    break
                case 'uranus':
                    gravity = 8.87
                    planetPos.style.backgroundPosition = '-3397px -119px'
                    planetPos.style.backgroundSize = 'auto'
                    break
                case 'neptune':
                    gravity = 11.15
                    planetPos.style.backgroundPosition = '-3852px -121px'
                    planetPos.style.backgroundSize = 'auto'
                    break
                default:
                    console.log('Nothing');
                    break
            }
            res.textContent = Math.round((kg * gravity) * 100) / 100 + ' N'

            let selectedPlanet = selected
            let uno = selectedPlanet.split('')
            let dos = uno[0]
            uno.splice(0,1)
            uno.unshift(dos.toUpperCase())
            let finaled = uno.join('')
            resplanet.innerHTML = 'The weight of the object in ' + `<span>${finaled}</span>`
        }
        
    }
})