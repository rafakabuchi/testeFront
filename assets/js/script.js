(preencher = () => {

    // DECLARAÇÃO DAS VARIÁVEIS QUE SERÃO UTILIZADAS

    // Recupera e armazena as listas vazias do HTML
    let lista1 = document.querySelector('.lista1')
    let lista2 = document.querySelector('.lista2')
    let lista3 = document.querySelector('.lista3')

    let btnOrdenaNomes = document.querySelector('.ordenaNomes')
    btnOrdenaNomes.addEventListener('click', ordenarNomes)

    let btnOrdenaCores = document.querySelector('.ordenaCores')
    btnOrdenaCores.addEventListener('click', ordenaCores)

    // Variáveis que serão utilizadas para printar as listas no HTML
    let printaLista1 = ''
    let printaLista2 = ''
    let printaLista3 = ''

    // Separa os nomes de cada grupo e armazena em uma nova variável
    const getNomes1 = nomes => nomes.nomesGrupo1
    const listaNomes1 = dadosListas
        .map(getNomes1)

    const getNomes2 = nomes => nomes.nomesGrupo2
    const listaNomes2 = dadosListas
        .map(getNomes2)

    const getNomes3 = nomes => nomes.nomesGrupo3
    const listaNomes3 = dadosListas
        .map(getNomes3)


    // Separação das cores para um novo array contendo apenas as cores
    const getCores = cor => cor.cor
    const listaCores = dadosListas
        .map(getCores)
    // console.log(listaCores)

    const getCoresOrdem = corOrdem => corOrdem.cor
    const listaCoresOrdem = dadosListas
        .map(getCoresOrdem)
        listaCoresOrdem.sort()
    // console.log(listaCoresOrdem)


    // Efetua um loop nos valores das listas e printa os dados conforme ordem default do objeto de dados
    function criaLista1 (nome, cor) {
        cor = listaCores
        for (let index = 0; index < listaNomes1.length; index++) {
            printaLista1 += ` <li class="${cor[index]}">${listaNomes1[index]}</li> `
        }
        lista1.innerHTML = printaLista1
    } criaLista1()
    function criaLista1B (nome, cor) {
        cor = listaCoresOrdem
        for (let index = 0; index < listaNomes1.length; index++) {
            printaLista1 += ` <li class="${cor[index]}">${listaNomes1[index]}</li> `
        }
        lista1.innerHTML = printaLista1
    }

    function criaLista2 (nome, cor) {
        cor = listaCores
        for(let index = 0; index < listaNomes2.length; index++) {
            printaLista2 += ` <li class="${cor[index]}">${listaNomes2[index]}</li> `
        }
        lista2.innerHTML = printaLista2
    } criaLista2()
    function criaLista2B (nome, cor) {
        cor = listaCoresOrdem
        for (let index = 0; index < listaNomes2.length; index++) {
            printaLista2 += ` <li class="${cor[index]}">${listaNomes2[index]}</li> `
        }
        lista2.innerHTML = printaLista2
    }

    function criaLista3 (nome, cor) {
        cor = listaCores
        for(let index = 0; index < listaNomes3.length; index++) {
            printaLista3 += ` <li class="${cor[index]}">${listaNomes3[index]}</li> `
        }
        lista3.innerHTML = printaLista3
    } criaLista3()
    function criaLista3B (nome, cor) {
        cor = listaCoresOrdem
        for (let index = 0; index < listaNomes3.length; index++) {
            printaLista3 += ` <li class="${cor[index]}">${listaNomes3[index]}</li> `
        }
        lista3.innerHTML = printaLista3
    }

    // FUNÇÕES DOS BOTÕES
    function ordenarNomes () {
        let getActive = document.querySelector('.active')

        if (getActive.getAttribute("title") === 'Grupo 1') {
            printaLista1 = ''
            criaLista1(listaNomes1.sort())
        }

        if (getActive.getAttribute("title") === 'Grupo 2') {
            printaLista2 = ''
            criaLista2(listaNomes2.sort())
        }

        if (getActive.getAttribute("title") === 'Grupo 3') {
            printaLista3 = ''
            criaLista3(listaNomes3.sort())
        }

    }

    function ordenaCores () {
        let getActive = document.querySelector('.active')

        if (getActive.getAttribute("title") === 'Grupo 1') {
            printaLista1 = ''
            criaLista1B( listaCoresOrdem)
        }

        if (getActive.getAttribute("title") === 'Grupo 2') {
            printaLista2 = ''
            criaLista2B(listaCoresOrdem)
        }

        if (getActive.getAttribute("title") === 'Grupo 3') {
            printaLista3 = ''
            criaLista3B(listaCoresOrdem)
        }
    }

})()

