let root = document.getElementById('root') // Pegando o elemento que irá renderizar o advice da API
const url = 'https://api.adviceslip.com/advice' // Armazenando o endpoint da API em uma variável
let advice = document.getElementById('advice') // Pegando o elemento que irá renderizar o número do advice da API
let css = document.getElementById('css')
let LightBtn = document.getElementById('light')
let DarkBtn = document.getElementById('dark')
// Função que gera o advice através de um fetch

function generateAdvice(){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        root.innerHTML = JSON.stringify(data.slip.advice)
        advice.innerHTML = `Advice #${data.slip.id}`
    })
    .catch(error => root.innerHTML = ('Error!'))
}

// Chamando a função de gerar frase

generateAdvice()

function changeToDarkMode(){
    css.setAttribute('href', 'darkmode.css')
}

LightBtn.addEventListener('click', changeToDarkMode)

function changeToLightMode(){
    css.setAttribute('href', 'style.css')
}

DarkBtn.addEventListener('click', changeToLightMode)