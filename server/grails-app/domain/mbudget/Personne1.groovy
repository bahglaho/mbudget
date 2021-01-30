package mbudget

class Personne1 {
    String persNom
    String persPrenom
    String persTel
    String persAdresse
    String persEmail

    static mapping = {
        id column: "pers_id"
        version false
    }
    static constraints = {
        persTel nullable: true
    }
}
