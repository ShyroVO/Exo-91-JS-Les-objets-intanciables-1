let Personne = function (nom, age, animal, nomAnimal) {

    this.nom = nom;
    this.age = age;
    this.animal = animal;
    this.nomAnimal = nomAnimal;

    this.nomAge = function (){
        return this.nom + " a " + this.age + " ans et possède un " + this.animal + " du nom de " + this.nomAnimal + ". ";
    }

    this.nomAni = function (nom, age){
        this.nom = nom ;
        this.age = age;
    }

};

// Deux personnes:
let personneUn = new Personne("Clau", "68", "oiseaux", "Kiki");
let personneDeux = new Personne('Dan', '30', 'chien', 'Snoop');

let propriete1 = document.getElementsByClassName("propriete1");
let propriete2 = document.getElementsByClassName("propriete2");
let propriete3 = document.getElementsByClassName("propriete3");
let propriete4 = document.getElementsByClassName("propriete4");
let method1 = document.getElementsByClassName("method1");
let method2 = document.getElementsByClassName("method2");

propriete1[0].innerHTML = personneUn.nom;
propriete2[0].innerHTML = personneUn.age;
propriete3[0].innerHTML = personneUn.animal;
propriete4[0].innerHTML = personneUn.nomAnimal;
method1[0].innerHTML = personneUn.nomAge();
personneUn.nomAni('truc','bidule');
method2[0].innerHTML = personneUn.nomAge();

propriete1[1].innerHTML = personneDeux.nom;
propriete2[1].innerHTML = personneDeux.age;
propriete3[1].innerHTML = personneDeux.animal;
propriete4[1].innerHTML = personneDeux.nomAnimal;
method1[1].innerHTML = personneDeux.nomAge();
personneDeux.nomAni('bidule','chouette');
method2[1].innerHTML = personneDeux.nomAge();

