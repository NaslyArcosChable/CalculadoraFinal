let operacionelegida = ""; 

function operacioncal(op) {
    operacionelegida = op;
}

function calcular() {
    let primernumero = parseFloat(document.getElementById('primernumero').value);
    let segundonumero = parseFloat(document.getElementById('segundonumero').value);
    let resultado;

    switch(operacionelegida) {
        case "suma":
            result = primernumero + segundonumero;
            break;
        case "resta":
            result = primernumero - segundonumero;
            break;
        case "multiplicacion":
            result = primernumero * segundonumero;
            break;
        case "division":
            result = primernumero / segundonumero;
            break;
        case "raiz":
            result = Math.sqrt(primernumero);
            break;
        default:
            result = "Operación no permitida";
            break;
    }

    document.getElementById('totalf').value = result;
}