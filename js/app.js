function composer() {
    let div = document.getElementById('div_composer')

    if (div.classList.contains('json_composer')) {
        div.classList.remove('json_composer')
    } else {
        div.classList.add('json_composer')
    }
}
