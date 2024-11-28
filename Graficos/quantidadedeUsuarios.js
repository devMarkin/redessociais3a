import { getCSS } from "./common.js"

async function quantidadedeUsuarios( ) {
    const url='https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'   
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeUsuarios = Object.values(dados)

    const data = [
        {
          x: nomeDasRedes,
          y: quantidadeUsuarios,
          type: 'bar',
          marker:{
            color:getCSS('--cor-primaria')
          }
        }
      ]

    const layout = {
      plot_bgcolor:getCSS('--cor-de-fundo'),
      paper_bgcolor:getCSS('--cor-de-fundo')
    }

    const grafico = document.createElement ('div')
    grafico.className='grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)

}

quantidadedeUsuarios()