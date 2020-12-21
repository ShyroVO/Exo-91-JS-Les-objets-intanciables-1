let Personne = function (nom, age, animal, nomAnimal) {

    this.nom = nom;
    this.age = age;
    this.animal = animal;
    this.nomAnimal = nomAnimal;

    this.nomAge = function (){
        return this.nom + " a " + this.age + " ans et possède un " + this.animal + " du nom de " + this.nomAnimal + ". ";
    }

    this.nomAnimal = function (){
        return this.nomAnimal + " est un " + this.nomAnimal + ". ";
    }

};

// Deux personnes:
let personneUn = new Personne("Clau", "68", "oiseaux", "Kiki");
let personneDeux = new Personne('Dan', '30', 'chien', 'Snoop');

