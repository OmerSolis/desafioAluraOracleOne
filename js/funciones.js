function validaTexto(texto) {
    texto = texto.trim();
    console.log("entró acá. Texto-->" + texto);
    if (texto == '') {
        console.log("texto vacío");

        return {
            'result': false,
            'mensaje': 'El texto no puede ser vacío'
        };
    }

    const regex = /^[a-z\s]+$/;

    var enMinusculas = regex.test(texto);


    if (!(enMinusculas)) {
        return {
            'result': false,
            'mensaje': 'El texto no puede tener acentos, números, mayúsculas ni caracteres especiales.'
        };
    }

    return {
        'result': true,
        'mensaje': 'Texto OK'
    }

}

function encriptar() {
    var texto = document.getElementById("texto").value;

    var validacion = validaTexto(texto);
    console.log(validacion);
    if (validacion.result) {
        var texto_salida = "";
        for (var i = 0; i < texto.length; i++) {
            var letra = texto.charAt(i);
            switch (letra) {
                case 'e':
                    texto_salida = texto_salida + "enter";
                    break;
                case 'i':
                    texto_salida = texto_salida + "imes";
                    break;
                case 'a':
                    texto_salida = texto_salida + "ai";
                    break;
                case 'o':
                    texto_salida = texto_salida + "ober";
                    break;
                case 'u':
                    texto_salida = texto_salida + "ufat";
                    break;
                default:
                    texto_salida = texto_salida + letra;
            }
        }
        document.getElementById("texto_encriptado").textContent = texto_salida;
        document.getElementById("contenedor_resultado").style.visibility = "hidden";
        document.getElementById("boton_copiar").style.visibility = "inherit";
    } else {
        console.log(validacion);
        document.getElementById("contenedor_resultado").style.visibility = "inherit";
        document.getElementById("texto_encriptado").textContent = '';
        document.getElementById("texto_resultado_1").innerHTML = validacion.mensaje;
        document.getElementById("boton_copiar").style.visibility = "hidden";
    }
}

function desencriptar() {
    var texto = document.getElementById("texto").value;

    var validacion = validaTexto(texto);
    console.log(validacion);
    if (validacion.result) {
        var texto_salida = "";
        var i = 0;
        while (i < texto.length) {
            if (texto.substr(i, 5) === "enter") {
                texto_salida = texto_salida + "e";
                i += 5;
            } else if (texto.substr(i, 5) === "imes") {
                texto_salida = texto_salida + "i";
                i += 5;
            } else if (texto.substr(i, 2) === "ai") {
                texto_salida = texto_salida + "a";
                i += 2;
            } else if (texto.substr(i, 4) === "ober") {
                texto_salida = texto_salida + "o";
                i += 4;
            } else if (texto.substr(i, 4) === "ufat") {
                texto_salida = texto_salida + "u";
                i += 4;
            } else {
                texto_salida = texto_salida + texto.charAt(i);
                i++;
            }
        }
        document.getElementById("texto_encriptado").textContent = texto_salida;
        document.getElementById("contenedor_resultado").style.visibility = "hidden";
        document.getElementById("boton_copiar").style.visibility = "inherit";
    } else {
        console.log(validacion);
        document.getElementById("contenedor_resultado").style.visibility = "inherit";
        document.getElementById("texto_encriptado").textContent = '';
        document.getElementById("texto_resultado_1").innerHTML = validacion.mensaje;
        document.getElementById("boton_copiar").style.visibility = "hidden";
    }
}

async function copiar() {
    // Seleccionar el textarea por su id
    const textarea = document.getElementById('texto_encriptado');

    try {
        textarea.select();
        textarea.setSelectionRange(0, 99999); 
        // Copiar el texto al portapapeles
        await navigator.clipboard.writeText(textarea.value);

    } catch (err) {
        console.error('Error al copiar el texto: ', err);
    }
}

