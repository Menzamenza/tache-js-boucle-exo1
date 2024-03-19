//afficher la liste des boucles
let listeBoucle = [
    { nom: "Boucle For" },
    { nom: "Boucle While" },
    { nom: "Boucle Do While" },
    { nom: "Boucle For in" },
    { nom: "Boucle For Of" }
];
for (let i = 0; i < listeBoucle.length; i++) {
    
    let liste = document.createElement('li')
    let li= document.createTextNode(listeBoucle[i].nom)
    liste.appendChild(li)
    document.getElementById('ul').appendChild(liste)
}

// recuperer les div par leurs ID et les initialiser dans une variable 
let forBoucle= document.getElementById('reponse');

document.getElementById("basic-addon2").addEventListener('click', function (){
    let input = document.getElementById("inputBoucle").value.toLowerCase();
    if (input=='for') {
        
        forBoucle.innerHTML=`<p class="fw-medium">For</p>
        <p>Une boucle for répète des instructions jusqu'à ce qu'une condition donnée ne soit plus vérifiée. Elle déclare une variable i et l'initialise à zéro. Elle vérifie que i est bien inférieur au nombre d'options et, pour chaque option, effectue un test conditionnel pour savoir si l'option est sélectionnée puis passe à l'option suivante en incrémentant la variable i pour chaque itération.Elle s'utilise de la façon suivante :</p>
        <p>for (initialisation ; condition ; incrémentation) { <br>
             instructions <br>
            }</p>`
    } else if (input=='while') {

        forBoucle.innerHTML=` <p class="fw-medium">While</p>
        <p>La boucle while est une structure de contrôle en programmation utilisée pour répéter un bloc de code tant qu'une condition spécifiée est vraie.Voici sa syntaxe :</p>
        <p>while (condition) { <br>
            instructions <br>
        }</p>`
    }
    else if (input == 'dowhile' || input == 'do while') {

        forBoucle.innerHTML=`<p class="fw-medium">Do While</p>
        <p>La boucle do while est comme une boucle while, sauf que l'expression de boucle est testée 
        en bas de la boucle plutôt qu'en haut. Cela signifie que le corps de la boucle est toujours 
        exécuté au moins une fois. La syntaxe est: </p>
        <p> do { <br> 
        // instructions <br>
        } while (expression); </p>`
    }
    else if (input == 'forin' || input == 'for in') {

        forBoucle.innerHTML=`  <p class="fw-medium">For in</p>
        <p>Pour parcourir toutes les clés d’un objet, il existe une forme spéciale de boucle : for..in. C’est une chose complètement différente de la construction for connue. </p>

       <p> La syntaxe : </p>
        
       <p> for (cle in object) { <br>
          // exécute le corps pour chaque clé parmi les propriétés de l'objet
        } </p>`
    }
    else if (input == 'forof' || input == 'for of') {

        forBoucle.innerHTML=`  <p class="fw-medium">For of</p>
        <p>L'instruction for...of crée une boucle itérant sur des objets itérables tels que des tableaux, des chaînes, des cartes, des listes de nœuds, etc. Elle est similaire à l'instruction for...in, mais elle parcourt uniquement les valeurs de l'objet itérable, pas les clés.</p>

       <p> La syntaxe : </p>
        
       <p> for (variable of iterable) { <br>
          // instructions
        } </p>`
    }
    else{
        alert("Veuillez choisir parmi l'une des boucles proposées!")
    }
    
})

