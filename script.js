let checkInvert = document.getElementById('checkInvert');

let mostraReticolo = document.getElementById('mostraReticolo');

let reticoloDiv = document.getElementById('reticolo');

let inviaParola = document.getElementById('inviaParola');

const alfabetoItaliano = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 
    'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

let reticoloLettere = [];

function creaArray(){

    let x=5;

    reticoloLettere = [];

    for(let i=0; i<x; i++){

        reticoloLettere[i] = [];

        for(let j=0; j<x; j++){

            reticoloLettere[i][j] = 'A';
        }
    }

    reticoloDiv.innerHTML = reticoloLettere.join('<br>');
}