window.addEventListener('load', ()=> { /* Escuchar cuando se carga*/
    /*Dos constantes para guardar los elementos necesarios*/ 
    const display = document.querySelector('.calculator-display');
    const keypadButtons = document.getElementsByClassName('keypad-button');

    /* Otra constante para convertir htmlcollection a array*/
    const keypadButtonsArray = Array.from(keypadButtons);

    /* Iteramos el nuevo array de botones */
    keypadButtonsArray.forEach( (button) => {
        
        /* Un listener para cada boton (imprime los numeros que son)*/
        button.addEventListener('click', ()=> {
            calculadora(button, display);
        })
    })
});

function calculadora(button, display) {
    switch (button.innerHTML){
        case 'C':
            borrar(display);
        break;

        case '=':
            calculadora(display);
            break;

        default:
            actualizar(display, button);
            break;
    }
}

function calcular(display) {
    display.innerHTML = eval(display.innerHTML) /*Toma el string, lo resuelve y lo guarda*/
}

function actualizar(display, button) {
    if(display.innerHTML == 0) {
       display.innerHTML = '';
    }
    /*Colocar cada numero en la pantalla */
    display.innerHTML = display.innerHTML + button.innerHTML;
}

function borrar(display) {
    display.innerHTML = 0;
}
