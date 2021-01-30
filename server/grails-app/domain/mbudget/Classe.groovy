package mbudget

class Classe {
    //TypeClasse typeClasse
    //Etablissement etablissement
    int nombreFille
    int nombreGarcon
    int fraisEcolage
    static belongsTo = [typeClasse: TypeClasse, etablissement: Etablissement]
    static constraints = {
         nombreFille nullable: true
         nombreGarcon nullable: true
         fraisEcolage nullable: true
    }
}
