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
// EXERCICE 3 : 
//------------------------------------------------------------------
