let root = document.getElementById('root') // Pegando o elemento que irá renderizar o advice da API
const url = 'https://api.adviceslip.com/advice' // Armazenando o endpoint da API em uma variável
let advice = document.getElementById('advice') // Pegando o elemento que irá renderizar o número do advice da API

// Função que gera a API através de um fetch

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

// Função que muda a frase toda vez que é clicado o botão
// (a função é chamada na <button> do index.html através do evento onclick)

function changeAdvice(){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        root.innerHTML = JSON.stringify(data.slip.advice)
        advice.innerHTML = `Advice #${data.slip.id}`
    })
    .catch(error => root.innerHTML = ('Error!'))
}