
document.body.onload = validate()

function validate(){document.querySelector('form#form').addEventListener('submit', () => {

    let regexName = /^[A-Za-z]{3,15}$/g

    // first name
    
    let fname = document.querySelector('input#fname')
    let regfname = /^[A-Za-z]{3,15}$/g.test(fname.value)
    
    if (regfname){
        fname.style.border = '2px solid var(--passed)'
        document.querySelector('p#fname').style.display = 'none'
    }
    else {
        fname.style.border = '2px solid var(--error)'
        document.querySelector('p#fname').style.display = 'block'
        document.querySelector('p#fname').innerText = 'First name must be alpha characters and contain 3-16 characters'
    }
    
    // last name
    let lname = document.querySelector('input#lname')
    let reglname = /^[A-Za-z]{3,15}$/g.test(lname.value)
    
    if (reglname){
        lname.style.border = '2px solid var(--passed)'
        document.querySelector('p#lname').style.display = 'none'
    }
    else {
        lname.style.border = '2px solid var(--error)'
        document.querySelector('p#lname').style.display = 'block'
        document.querySelector('p#lname').innerText = 'Last name must be alpha characters and contain 3-16 characters'
    }
    

    // email
    let email = document.querySelector('input#email')
    let regemail = /[A-Za-z0-9_.]+\@[a-z]+\.[a-z]+/g.test(email.value)

    if (regemail){
        email.style.border = '2px solid var(--passed)'
        document.querySelector('p#email').style.display = 'none'
    }
    else {
        email.style.border = '2px solid var(--error)'
        document.querySelector('p#email').style.display = 'block'
        document.querySelector('p#email').innerText = 'Email must be a valid address, e.g. example@example.com'
    }

    // password
    let pass = document.querySelector('input#pass')
    let regpass = /([A-Za-z0-9_.]+){6,20}$/g.test(pass.value)

    if (regpass){
        pass.style.border = '2px solid var(--passed)'
        document.querySelector('p#pass').style.display = 'none'
    }
    else {
        pass.style.border = '2px solid var(--error)'
        document.querySelector('p#pass').style.display = 'block'
        document.querySelector('p#pass').innerText = 'Password must be alphanumeric (\'@\', \'_\' and \'-\' are also allowed) and between 6-20 characters'
    }

    // telephone
    let tel = document.querySelector('input#num')
    let regtel = /(^([0-9]{3})-([0-9]{4})-([0-9]{4})$)/g.test(tel.value)

    if (regtel){
        tel.style.border = '2px solid var(--passed)'
        document.querySelector('p#tel').style.display = 'none'
    }
    else {
        tel.style.border = '2px solid var(--error)'
        document.querySelector('p#tel').style.display = 'block'
        document.querySelector('p#tel').innerText = 'A valid telephone number (11 digits and 333-3333-3334)'
    }

    // bio
    let bio = document.querySelector('input#bio')
    let regbio = /(^([a-z _-]+){8,50})$/g.test(bio.value)

    if (regbio){
        bio.style.border = '2px solid var(--passed)'
        document.querySelector('p#bio').style.display = 'none'
    }
    else {
        bio.style.border = '2px solid var(--error)'
        document.querySelector('p#bio').style.display = 'block'
        document.querySelector('p#bio').innerText = 'Bio must contain only lowercase letters, underscores, hypens and be 8 - 50 characters'
    }
})}
