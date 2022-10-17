// countries count

addEventListener('load', f => {
    document.querySelector('p#header-p').innerText = `Currently, we have ${countries.length} countries`
})

document.querySelector('input#btnlanguage').addEventListener('click', f => {
    langClicked()
})

// languages
function langClicked() {
    document.querySelector('main').innerHTML = ''
    let counter = {}
    for (let a = 0; a < countries.length; a++){
        if (countries[a].languages.length > 1){
            for (let b of countries[a].languages){
                if (counter[b]){
                    counter[b] += 1
                }
                else {
                    counter[b] = 1
                }
            }
        }
        else {
            if (counter[countries[a].languages[0]]){
                counter[countries[a].languages[0]] += 1
            }
            else {
                counter[countries[a].languages[0]] = 1
            }
        }
    }
    let notsorted = Object.entries(counter)
    let sorted = notsorted.sort((a, b) => { return b[1] - a[1] }) // sorted

    for (let i = 0; i < 10; i++){ // row creator
        // div class= row
        let row = document.createElement('div')
        row.className = 'row'

        // title
        let title = document.createElement('div')
        title.className = 'title'
        let titlep = document.createElement('p')
        titlep.textContent = sorted[i][0]
        title.append(titlep) // append
        // proress bar
        let progress = document.createElement('div')
        progress.className = 'progress'
        let progressTag = document.createElement('progress')
        // set atr
        let attr = {
            'max' : '100',
            'value' : sorted[i][1]
        }
        for(let att in attr){
            progressTag.setAttribute(att, attr[att])
        }
        progress.append(progressTag) // append

        // count
        let countCon = document.createElement('div')
        countCon.className = 'countcontainer'
        let count = document.createElement('p')
        count.className = 'count'
        count.textContent = sorted[i][1]
        countCon.append(count) // append

        row.append(title, progress, countCon)

        document.querySelector('main').append(row)
    }
}

// population
function popuClicked(){
    document.querySelector('main').innerHTML = ''
    let counter = {}
    for (let a = 0; a < countries.length; a++){
        
        counter[countries[a].name] = countries[a].population
        
    }
    let notsorted = Object.entries(counter)
    let sorted = notsorted.sort((a, b) => { return b[1] - a[1] }) // sorted
    
    // world population
    let worldSum = 0
        sorted.forEach(p => {
            worldSum += p[1]
    })

    for (let i = 0; i < 11; i++){ // row creator
        // div class= row
        let row = document.createElement('div')
        row.className = 'row'
        // title
        let title = document.createElement('div')
        title.className = 'title'
        let titlep = document.createElement('p')
        // proress bar
        let progress = document.createElement('div')
        progress.className = 'progress'
        let progressTag = document.createElement('progress')
        
        // count
        let countCon = document.createElement('div')
        countCon.className = 'countcontainer'
        let count = document.createElement('p')
        count.className = 'count'

        // functions main
        if (i == 0){
            
            //title
            titlep.textContent = 'World'
            title.append(titlep) // append
         
            // progress
            let attr = {
                'max' : worldSum,
                'value' : worldSum
            }
            for(let att in attr){
                progressTag.setAttribute(att, attr[att])
            }
            progress.append(progressTag) // append

            // count
            count.textContent = worldSum.toLocaleString('en-US')
            countCon.append(count) // append
        }
        else {

            //title
            titlep.textContent = sorted[i-1][0]
            title.append(titlep) // append
        
            // progress
            let attr = {
                'max' : worldSum,
                'value' : sorted[i-1][1]
            }
            for(let att in attr){
                progressTag.setAttribute(att, attr[att])
            }
            progress.append(progressTag) // append

            // count
            count.textContent = sorted[i-1][1].toLocaleString('en-US')
            countCon.append(count) // append
        }

        row.append(title, progress, countCon)
        document.querySelector('main').append(row)
    }
}

document.querySelector('input#btnpopulation').addEventListener('click', f => {
    popuClicked()
})

popuClicked() // default is population
