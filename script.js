const figurasProdutos = [
    {
    nome: "Clock",
    imagem: "assets/img/painting/clock.jpg",
    valor: "R$ 350,00",
    type: "paitings"
    },
    {
    nome: "gamepad",
    imagem: "assets/img/painting/gamepad.jpg",
    valor: "R$ 200,00",
    type: "paitings"
    },
    {
    nome: "personagem de filmes",
    imagem: "assets/img/painting/personagem.jpg",
    valor: "R$ 59,90",
    type: "paitings"
    },
    {
     nome: "Clock",
    imagem: "assets/img/painting/clock.jpg",
    valor: "R$ 350,00",
    type: "paitings"
    },
    {
    nome: "gamepad",
    imagem: "assets/img/painting/gamepad.jpg",
    valor: "R$ 200,00",
    type: "paitings"
    },
    {
    nome: "personagem de filmes",
    imagem: "assets/img/painting/personagem.jpg",
    valor: "R$ 59,90",
    type: "paitings"
    },
    {
    nome: "gamers",
    imagem: "assets/img/actions/animewoman.jpg",
    valor: "R$ 390,00",
    type: "actions"
    },
    {
    nome: "Boneco Animes",
    imagem: "assets/img/actions/dragonballpersonagem.jpg",
    valor: "R$ 450,00",
    type: "actions"
    },
    {
    nome: "Filmes",
    imagem: "assets/img/actions/starwarspersonagem.jpg",
    valor: "A definir",
    type: "actions"
    },
    {
    nome: "gamers",
    imagem: "assets/img/actions/animewoman.jpg",
    valor: "R$ 390,00",
    type: "actions"
    },
    {
    nome: "Boneco Animes",
    imagem: "assets/img/actions/dragonballpersonagem.jpg",
    valor: "R$ 450,00",
    type: "actions"
    },
    {
    nome: "Filmes",
    imagem: "assets/img/actions/starwarspersonagem.jpg",
    valor: "A definir",
    type: "actions"
    }
]

let figure = []
let figureActions = []

function separateItens(list) {
    for (let i = 0; i < list.length; i++){
        if (list[i].type == "paitings") {
            figure.push(figurasProdutos[i])
            
        }
        else if(list[i].type == "actions"){
            figureActions.push(figurasProdutos[i])
        }
    }
    
}
separateItens(figurasProdutos)

let secaolistPaitings = document.querySelector('.products')
for(let i = 0; i < figure.length; i++){
    let liLista = document.createElement('li')
    let ancora = document.createElement('a')
    let imageFigurePaitings = document.createElement('img')
    let paragrafo = document.createElement('p')
    let valor = document.createElement('p')

    secaolistPaitings.appendChild(liLista)
    liLista.append(ancora,paragrafo,valor)
    ancora.appendChild(imageFigurePaitings)


    imageFigurePaitings.src = figure[i].imagem
    paragrafo.innerText = figure[i].nome
    valor.innerText = figure[i].valor
}

let secaolistActions = document.querySelector('.products-2')
for(let i = 0; i < figure.length; i++){
    let liLista = document.createElement('li')
    let ancora = document.createElement('a')
    let imageFigureActions = document.createElement('img')
    let paragrafo = document.createElement('p')
    let valor = document.createElement('p')

    secaolistActions.appendChild(liLista)
    liLista.append(ancora,paragrafo,valor)
    ancora.appendChild(imageFigureActions)


    imageFigureActions.src = figureActions[i].imagem
    paragrafo.innerText = figureActions[i].nome
    valor.innerText = figurasProdutos[i].valor
}
