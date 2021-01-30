package mbudget

import grails.plugin.springsecurity.annotation.Secured
import grails.rest.Resource

@Secured(['ROLE_PARAM'])
@Resource(uri = '/api/etablissement')
class Etablissement {
    String libelle
    String code
    String iep
    String codeIep
    String dren
    Boolean autonomie
    String numeroDecisionCreation
    String dateDecisionCreation
    String numeroDecisionOuverture
    String dateDecisionOuverture
    String adressePostal
    String telephone
    String email
    String cell
    Date dateCreation
    Date dateModification
    String flag
    String uuid=UUID.randomUUID().toString()


    static hasMany = [classes : Classe]
    static hasOne = [infosEtablissement: InfosEtablissement,personne: Personne]

    static mapping = {
        id column: "etablissement_id"
        version false
    }

    static constraints = {
        libelle nullable: true
        code nullable: true
        iep nullable: true
        codeIep nullable: true
        dren nullable: true
        autonomie nullable: true
        numeroDecisionCreation nullable: true
        dateDecisionCreation nullable: true
        numeroDecisionOuverture nullable: true
        dateDecisionOuverture nullable: true
        adressePostal nullable: true
        telephone nullable: true
        email nullable: true,email: true
        cell nullable: true
        personne nullable: true
        infosEtablissement nullable: true
        dateCreation nullable: true
        dateModification nullable: true
        flag nullable: true, maxSize: 4
        uuid nullable: true

    }
}
