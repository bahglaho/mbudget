package mbudget


import grails.rest.*
import grails.converters.*
import grails.compiler.GrailsCompileStatic
import grails.converters.*
import grails.plugin.springsecurity.annotation.Secured
import grails.rest.Resource

//@GrailsCompileStatic
@Secured(['ROLE_PARAM'])
class TTiersController {
    static responseFormats = ['json', 'xml']

    def index() {
        if(params.id && TTiers.exists(params.id)){
            println"=========params.id========="+(TTiers.findById(params.id)as JSON)
            render TTiers.findById(params.id) as JSON
        }else{
            render TTiers.list() as JSON
        }
    }

    def save () {
        println"=========== Tier inserting ============="+request.JSON

        def tiers = new TTiers(request.JSON)
       // String key = tiers.getTierCode()
        //tiers.id="T004"
        //tiers.id=tiers.tierCode

        if(tiers.save()){
            render tiers as JSON
        }else{
            tiers.errors.allErrors.each {
                println it
            }
        }
    }
}
