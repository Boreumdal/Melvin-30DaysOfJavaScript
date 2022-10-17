
// assigning html to js vars
let input = document.querySelector('input')
let btn = document.querySelector('button')

btn.addEventListener('click', v => {
    let result = document.querySelector('.result')
    result.innerHTML = ''
    let err = document.querySelector('#error')
    // error catching
    if (isNaN(+input.value)){
        err.textContent = 'Enter a valid number'
        err.style.color = 'red'
    }
    else if (+input.value == null || +input.value == '' || +input.value == undefined){
        err.textContent = 'Input field is empty'
        err.style.color = 'red'
    }
    else {
        if (+input.value >= 1000){
            err.textContent = 'Don\'t destroy ur browser. Enter value below 1000'
            err.style.color = 'red'
        }
        else {
            let value = +input.value
            let result = document.querySelector('.result')
            
            for (let a = 0; a < value+1; a++){
                let container = document.createElement('div')
                let contained = document.createElement('p')
                contained.textContent = a
                if (a % 2 == 0){
                    container.style.backgroundColor = '#20bf72'
                }
                if (a % 2 != 0){
                    container.style.backgroundColor = '#fddb3a'
                }
                // PRIME
                let anchor = 1
                for (let i = 2; i < a; i++){
                    if (a % i == 0){
                        anchor = 0
                        break
                    }
                }
                if (a > 1 && anchor == 1){
                    container.style.backgroundColor = '#fd5e53'
                }
                container.append(contained)
                result.appendChild(container)
            }
        }
        
    }
})








































































































































































































































































































































