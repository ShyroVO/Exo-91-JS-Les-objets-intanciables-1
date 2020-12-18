let Personne = function (nom, age, animal, nomAnimal) {

    this.nom = nom;
    this.age = age;
    this.animal = animal;
    this.nomAnimal = nomAnimal;

    this.getNomAge = function (){
        return this.nom + " a " + this.age + " ans et possède un " + this.animal + " du nom de " + this.nomAnimal;
    }

};


let personneUn = new Personne("Clau", "68", "oiseaux", "Kiki");
let personneDeux = new Personne('Dan', '30', 'chien', 'Snoop');

document.getElementById('perso1').innerHTML = personneUn.getNomAge();
document.getElementById('perso2').innerHTML = personneDeux.getNomAge();