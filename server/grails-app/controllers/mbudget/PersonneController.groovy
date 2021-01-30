package mbudget


import grails.rest.*
import grails.converters.*
import grails.compiler.GrailsCompileStatic
import grails.converters.JSON
import grails.plugin.springsecurity.annotation.Secured
import grails.rest.Resource
//@Secured(['ROLE_PARAM'])
//@Resource(uri = '/api/etablissement')
class PersonneController  {
    def index = {
        if(params.id && Personne1.exists(params.id)){
            println"=========params.id========="+(Personne1.findById(params.id)as JSON)
            render Personne1.findById(params.id) as JSON
        }else{
            render Personne1.list() as JSON
        }
    }

    def save = {
        println"===========personne============="+request.JSON
        def personne = new Personne1(request.JSON)

        if(personne.save()){
            render personne as JSON
        }else{

        }
    }
}
