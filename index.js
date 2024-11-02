const express = require('express')  // Cette constante va importer Express (maintenant que nous l'avons installé dans notre nodemule donc ce ex monExpress est un serveur (donc back end). REQUIRE = Exclusivement fait pour node / Dans le navigateur html on utilisait immport/export désomais dans node on utilise "require". 
const app = express()               // Il a un export par defaut qui est une fonction puisqu'on peut l'appeler ici avec deux parenthèses et donc le retour de cette fonction sera le retour de qqch que l'on va mettre dans une application qui s'appelle "app". Cette app a par exemple une propriét settings, unsuscribe, une propriété get qui est une fonction etc (d'apres le console log de app); EN RESUME : On se fabrique donc ici notre app en invoquant la fonction "express".

const PORT = 3002;                   // La propriété listen qui a pour valeur 3000 (c'est le numéro du port)

function sayHi(req, res) {          
res.send('Hello World')
}

app.get("/", sayHi)                  // Cette app a une propriété qui s'appelle get. C'est une fonction qui accepte deux arguments. Le 1er sera un chemin (une string ici representé par "/"), puis il y'a une virgule, puis le reste c'est le deuxième argument qui est une fonction. Ca veut dire que a chaque fois que qqn fait une requete get sur le chemin "/" (autrement dit à la racine) eh bien on va executer une fonction qui renvoi ici "Hello World". Aores modification ile st dit ici quand qqn fait une requete get sur le slash (sur la racine), execute la fonction sayHi (sayHi c'est une fonction et comme toutes les fonctions "express" va l'appeller avec deux paramatres. Il va lui passer la requete (en 1er parametre) et la réponse (en 2ème parametre) (req et res)). Avec la requete on peut voir ce que l'utilisateur nous a envoyé et avec la répons eon peut renvoyer une réponse. 


app.listen(PORT, function() {
console.log(`Server is running on PORT: ${PORT}`);
});                    // cette app a aussi une propriété listen. NB : entre parenthèse il etait marqué 3000 mais on l'a remplacé par port afin que tout soit plus explicite et ausis plus facile a modifier peut etre. 3000 c'est le numéro du port.


// Pour tester le caractère operationnelle de l'envoie (et reception) de requete et de retour (ou envoi) d'une réponse (la réponse étant ici "Hello World") nous telechargons l'extension "REST CLIENT" .REST CLIENT permet d'envoyer des requetes en restant dans VSCode; Pour l'utiliser on va se créer un ficihier .http "requests.http" et dedans on fait une requete GET (en l'occurence : GET http://localhost:3000)