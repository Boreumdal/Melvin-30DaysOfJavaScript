let main = document.createElement('main')
let mainspan = document.createElement('span')
addEventListener('keydown', v => {
    let header = document.querySelector('span#msg')
    let letter = document.querySelector('span#letter')
    header.textContent = `You pressed `
    letter.textContent = v.key
    main.append(mainspan)
    document.body.append(main)
    mainspan.innerText = v.keyCode
})