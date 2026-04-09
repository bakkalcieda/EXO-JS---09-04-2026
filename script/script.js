//-------------------------------------------------------------------
// EXERCICE 1 - Longueur d'une chaîne 
//-------------------------------------------------------------------
function afficherLongueur(chaine) {
    
    // je récuple nombre de caractères de la chaîne
    var longueur = chaine.length;
    
    // j'affiche le résultat dans le div "resultat"
    document.getElementById("resultat").innerHTML = "La chaîne contient " + longueur + " caractère(s).";
    
    // j'affiche le résultat dans la console
    console.log("La chaîne contient " + longueur + " caractère(s.");
    
    // je renvoie la longueur
    return longueur;
}
//----------------------------------------------------------------
//  EXERCICE 2 : Conversion Celsius → Fahrenheit
//-----------------------------------------------------------------
function convertir() {
    // on récupère la valeur tapée par l'utilisateur
    let celsius = document.getElementById('celsius').value;
    
    // on applique la formule de conversion : °F=(°C×1.8)+32
    let fahrenheit = (celsius * 9/5) + 32;
    
    // on affiche le résultat dans le div
    document.getElementById('resultat2').innerText = celsius + "°C = " + fahrenheit + "°F";
}
//------------------------------------------------------------------
// EXERCICE 3 : Convertisseur de prix HTVA vers prix avec TVA  
//------------------------------------------------------------------

function convertirTVA () {
    
    let htva = document.getElementById('htva').value;
    
    // je calcule la TVA (21% Belgique)
    let tvac = htva * 1.21;
    
    // j'arrondit à 2 décimales avec Math.round
    tvac = Math.round(tvac * 100)/100;
    
    // J'affiche le résultat méthode = 1 concaténation 
    //document.getElementById('resultat3').innerText = "Prix HTVA : " + htva + " €  →  Prix TVAC : " + tvac + "€";
    //j'affiche le resultat méthode 2 = template littéeale 
    document.getElementById('resultat3').innerText = `Prix HTVA : ${htva}€  →  Prix TVAC : ${tvac}€`;
    
}

/* Math.round = > 121.000001  ×  100  =  12100.0001
Math.round(12100.0001)  =  12100
12100  /  100  =  121.00 */

