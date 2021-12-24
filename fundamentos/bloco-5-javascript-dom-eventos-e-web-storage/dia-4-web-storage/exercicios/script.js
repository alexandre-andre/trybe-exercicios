const temaButton = document.querySelector('#tema-button')
temaButton.addEventListener('click', mudaTema)

function mudaTema() {
    const body = document.querySelector('body');
    body.style.backgroundColor = inputColor();
}
mudaTema()

function inputColor() {
    const corTema = document.querySelector('#cor-tema');
    const inputValue = corTema.value;
    console.dir(corTema)
    corTema.value = ' '
    return inputValue
}

