package mbudget

class TypePersonne {
    String libelle
    Date dateCreation
    Date dateModification
    String flag
    String uuid=UUID.randomUUID().toString()

    static hasOne = [personne: Personne]


    static mapping = {
        id column: "type_personne_id"
        version false
    }
    static constraints = {
        libelle nullable: true
        dateCreation nullable: true
        dateModification nullable: true
        //uuid nullable: true
        flag nullable: true, maxSize: 4
    }
}
