package mbudget

import grails.plugin.springsecurity.annotation.Secured
import grails.rest.*
import grails.converters.*
@Secured(['ROLE_PARAM'])
class TierController {
	static responseFormats = ['json', 'xml']
    def keyGenService
    def index() {
        if(params.id && TTiers.exists(params.id)){
            println"=========params.id========="+(TTiers.findById(params.id)as JSON)
            render TTiers.findById(params.id) as JSON
        }else{
            render TTiers.list() as JSON
        }
    }

    def save ()  {
        println"=========== Tier inserting Good ============="+request.JSON

        def tiers = new TTiers(request.JSON)
        //String key = tiers.getTierCode()
        tiers.id= keyGenService.getTTiersCode()
        //tiers.id=tiers.tierCode
        //tiers.save flush:true
        if(tiers.save(flush:true)){
            render tiers as JSON
        }else{
            tiers.errors.allErrors.each {
                println it}
        }
    }
}
