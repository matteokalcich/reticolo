let checkInvert = document.getElementById('checkInvert');

let mostraReticolo = document.getElementById('mostraReticolo');

let reticoloDiv = document.getElementById('reticolo');

let inviaParola = document.getElementById('inviaParola');

const alfabetoItaliano = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 
    'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

let reticoloLettere = [];


mostraReticolo.addEventListener('click', showReticolo);

checkInvert.addEventListener('change', function() {

    if (this.checked) {

        alert('Selezionata');

    } else {

        alert('Non selezionata');

    }

});

inviaParola.addEventListener('click', sendParola);

function showReticolo() {

    let result = [];

    for (let i = 0; i < reticoloLettere.length; i++) {

        result[i] = '';

        for (let j = 0; j < reticoloLettere[i].length; j++) {

            result[i] += '<input type="button" value="'+reticoloLettere[i][j]+'" readonly>';
            
        }
    }

    
    reticoloDiv.innerHTML = result.join('<br>');

}

function leggiTextArea() {
    
    let textArea = document.getElementById('inputText').value;

    return textArea;
}

function radioBtnNumber(index) {
    
    return document.getElementsByName('numero')[index];

}

function radioBtnSelectedAndNumber() {
    
    let radioBtn = document.getElementsByName('radioBtn');
    
    let result = [];
    for (i = 0; i < radioBtn.length; i++) {

        if (radioBtn[i].checked){

            if(radioBtnNumber(i).value > 0){

                console.log('Radio button: ' + radioBtn[i].value + ', Numero: ' + radioBtnNumber(i).value);
                result[0] = radioBtn[i].value;
                result[1] = radioBtnNumber(i).value;
                return result;
            }

            

        }
    }

    return null;

}

function sendParola(){

    let radioBtn = radioBtnSelectedAndNumber();
    let textArea = leggiTextArea();
    
    if(radioBtn[0] != null && !textArea == ''){

        switch (radioBtn[0]) {

            
            case 'radioRiga':

                creaParolaRiga(textArea, radioBtn[1]);
                
                break;

            case 'radioColnna':

                break;


            case 'radioPrimaDiagonale':


                break;


            case 'radioSecondaDiagonale':

                break;
        
            default:
                break;
        }
    }

}

function creaParolaRiga(parola, nRiga) {
    
    alert('Parola: ' + parola);

    let result = [];

    //i = righe j = colonne

    for (let i = 0; i < 5; i++) {

        result[i] = '';

        for (let j = 0; j < 5; j++) {

            if(i == nRiga){

                reticoloLettere[i][j] = parola[j].char;
                console.log(parola[j]);
                result[i] += '<input type="button" value="'+parola[j].toUpperCase()+'" readonly>';

            } else {

                //randomico tutto

                try { //nel caso in cui il reticolo sia vuoto
                    
                    result[i] += '<input type="button" value="'+reticoloLettere[i][j]+'" readonly>';
                
                    //console.log(result[i]);

                } catch (error) {
                    
                }
            }
            
            
        }
    }

    reticoloDiv.innerHTML = result.join('<br>');


}