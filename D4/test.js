let a = prompt('Enter a:', '')
let b = a.toLowerCase(), c, d, e, f

if(b == 'monday' || b == 'tuesday' || b == 'wednesday' || b == 'thursday' || b == 'friday'){
    c = b.charAt(0)
    d = c.toUpperCase()
    f = b.substring(1, b.length)

    console.log(`${d + f} is a weekday`)
}
else if (b == 'saturday' || b == 'sunday'){
    c = b.charAt(0)
    d = c.toUpperCase()
    f = b.substring(1, b.length)

    console.log(`${d + f} is a weekend`)
}
else{
    console.log('Enter valid data')
}

    
    



