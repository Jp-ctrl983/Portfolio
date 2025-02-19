function composer() {
    let div = document.getElementById('div_composer')

    if (div.classList.contains('json_composer')) {
        div.classList.remove('json_composer')
    } else {
        div.classList.add('json_composer')
    }
}

function clickMenu() {
    let itens = document.getElementById('itens')

    if (itens.classList.contains('navegacao')) {
        itens.classList.remove('navegacao')
    } else {
        itens.classList.add('navegacao')
    }
}
