let root = document.getElementById('root')
const url = 'https://api.adviceslip.com/advice'
let advice = document.getElementById('advice')

function generateAdvice(){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        root.innerHTML = JSON.stringify(data.slip.advice)
        advice.innerHTML = `Advice #${data.slip.id}`
    })
    .catch(error => root.innerHTML = ('Error!'))
}

generateAdvice()

function changeAdvice(){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        root.innerHTML = JSON.stringify(data.slip.advice)
        advice.innerHTML = `Advice #${data.slip.id}`
    })
    .catch(error => root.innerHTML = ('Error!'))
}