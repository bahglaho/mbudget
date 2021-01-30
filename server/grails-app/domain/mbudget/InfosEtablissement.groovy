package mbudget

class InfosEtablissement {
    int nombreBatiment
    int nombreLogement
    int nombreClasse
    int enFonction
    Etablissement etablissement
    Date dateCreation
    Date dateModification
    String flag
    String uuid=UUID.randomUUID().toString()

    static mapping = {
        id column: "infos_etablissement_id"
        version false
    }

    static constraints = {
        nombreBatiment nullable: true
        nombreLogement nullable: true
        nombreClasse nullable: true
        enFonction nullable: true
        dateCreation nullable: true
        dateModification nullable: true
        flag nullable: true, maxSize: 4
    }
}
