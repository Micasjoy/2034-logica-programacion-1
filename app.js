// variables
let numeroSecreto = 4;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = `vez`;
    while (numeroUsuario != numeroSecreto) {
        numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor");

        console.log(numeroUsuario);


        // Realizamos la comparación

        if(numeroUsuario== numeroSecreto){
            //Acertamos, fue verdadera la condición
            alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces}`);

            //La condición no se cumplió
        } else{
            if(numeroUsuario>numeroSecreto){
                alert('El número secreto es menor');
            } else {
                alert('El número secreto es mayor');
            }
            //Incrementamos el contador cuando no acierta por ser segundo intento
            intentos = intentos + 1;
            palabraVeces = 'veces'
        }
    }