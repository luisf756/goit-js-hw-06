// Tarea 5
// Escriba un script que, cuando se escriba el texto en el input de input#nombre-input (evento input), sustituya su valor actual en span#name-output. Si el input está vacío, el span debería mostrar la secuencia "Anónimo".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const inputText=document.querySelector("#name-input");
const ouputText= document.querySelector("#name-output");

inputText.addEventListener("input", writeName);

function writeName(){
    if (inputText.value == "") {
        ouputText.textContent="anonimo"
    }else{
        ouputText.textContent=inputText.value;
    }
}