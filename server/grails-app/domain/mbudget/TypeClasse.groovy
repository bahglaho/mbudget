package mbudget

class TypeClasse {
    String libelle
    Date dateCreation
    Date dateModification
    String flag
    String uuid=UUID.randomUUID().toString()


    static mapping = {
        id column: "type_classe_id"
        version false
    }
    static constraints = {
        libelle nullable: true
        dateCreation nullable: true
        dateModification nullable: true
        uuid nullable: false
        flag nullable: true, maxSize: 4
    }
}
