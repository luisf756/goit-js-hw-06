const form = document.querySelector('.login-form')

form.addEventListener('submit', event => {
    event.preventDefault();
    const datos ={};
    for (const element of form.elements){
        if(element.name){
            datos[element.name]=element.value;
        }
    }
    if(datos.email && datos.password){
        console.log(datos);
        form.reset();
    }else{
        alert('campos vacios');
    }
});