package mbudget

import grails.compiler.GrailsCompileStatic
import grails.plugin.springsecurity.annotation.Secured
import grails.rest.Resource
@GrailsCompileStatic
@Secured(['ROLE_PARAM'])
@Resource(uri = '/api/tTiers')
class TTiers {
    String id
    String tierTip
    String tierLib
    String tierAdr
    String tierTel

    static mapping = {
        table "T_Tiers"
        id column:'tier_cod', generator: 'assigned', length:12
        version false
    }

    static constraints = {
        tierTip nullable: true
        tierLib nullable: true
        tierAdr nullable: true
        tierTel nullable: true
    }
}
