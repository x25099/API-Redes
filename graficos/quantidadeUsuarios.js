import { getCSS, tickConfig } from "./common.js"

async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const rest = await fetch(url)
    const dados = await rest.json()

    const nomeDasRedes = Object.keys(dados)
    const quantidadeUsuarios= Object.values(dados)

    const data = [
        {
            x: nomeDasRedes,
            y: quantidadeUsuarios,
            type: 'bar',
            marker: {
                color: getCSS('--cor-pimaria')
            }
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--cor-defundo'),
        paper_bgcolor: getCSS('--cor-defundo'),
        title: {
            text: "Redes Sociais Analisadas",
            x: 50,
            font: {
                color: getCSS('--cor-primaria'),
                family: getCSS('--fonte'),
                size: 30,
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: "Nome das redes sociais",
                font: {
                    color: getCSS('--cor-secundaria')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: "Bilhoes de usuários ativos",
                font: {
                    color: getCSS('--cor-secundaria')
                }
            }
        }
    }
    
    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)
}
 
quantidadeUsuarios()