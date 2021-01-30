package mbudget

class Personne {
    String nom
    String prenom
    String nationalite
    Date dateNaissance
    String adresse
    String telephone1
    String telephone2
    String email
    String diplome
    Date dateService
    String numAutorisation
    Date dateAutorisation
    String function
    TypePersonne typePersonne
    Etablissement etablissement
    Date dateCreation
    Date dateModification
    String flag
    String uuid=UUID.randomUUID().toString()

    static mapping = {
        id column: "personne_id"
        version false
    }

    static constraints = {
        nom nullable: true
        prenom nullable: true
        nationalite nullable: true
        dateNaissance nullable: true
        adresse nullable: true
        telephone1 nullable: true
        telephone2 nullable: true
        email nullable: true,email:true
        diplome nullable: true
        dateService nullable: true
        numAutorisation nullable: true
        dateAutorisation nullable: true
        function nullable: true
        typePersonne nullable: false
        etablissement nullable: true
        dateCreation nullable: true
        dateModification nullable: true
        uuid nullable: false
        flag nullable: true, maxSize: 4
    }

}
