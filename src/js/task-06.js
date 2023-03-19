const input = document.querySelector('input')

input.addEventListener('blur', checket)

function checket(){
    let cantSimbol= this.value.length;
    let reglaCantidadSimbolos =this.dataset.length;
    if (cantSimbol == reglaCantidadSimbolos) {
        input.setAttribute('class', 'valid')
    } else {
        input.setAttribute('class', 'invalid')
    }
    console.log(cantSimbol);
}