package mbudget

import grails.gorm.DetachedCriteria
import groovy.transform.ToString

import org.codehaus.groovy.util.HashCodeHelper
import grails.compiler.GrailsCompileStatic

@GrailsCompileStatic
@ToString(cache=true, includeNames=true, includePackage=false)
class UtilisateurPrivilege implements Serializable {

	private static final long serialVersionUID = 1

	Utilisateur utilisateur
	Privilege privilege

	@Override
	boolean equals(other) {
		if (other instanceof UtilisateurPrivilege) {
			other.utilisateurId == utilisateur?.id && other.privilegeId == privilege?.id
		}
	}

    @Override
	int hashCode() {
	    int hashCode = HashCodeHelper.initHash()
        if (utilisateur) {
            hashCode = HashCodeHelper.updateHash(hashCode, utilisateur.id)
		}
		if (privilege) {
		    hashCode = HashCodeHelper.updateHash(hashCode, privilege.id)
		}
		hashCode
	}

	static UtilisateurPrivilege get(long utilisateurId, long privilegeId) {
		criteriaFor(utilisateurId, privilegeId).get()
	}

	static boolean exists(long utilisateurId, long privilegeId) {
		criteriaFor(utilisateurId, privilegeId).count()
	}

	private static DetachedCriteria criteriaFor(long utilisateurId, long privilegeId) {
		UtilisateurPrivilege.where {
			utilisateur == Utilisateur.load(utilisateurId) &&
			privilege == Privilege.load(privilegeId)
		}
	}

	static UtilisateurPrivilege create(Utilisateur utilisateur, Privilege privilege, boolean flush = false) {
		def instance = new UtilisateurPrivilege(utilisateur: utilisateur, privilege: privilege)
		instance.save(flush: flush)
		instance
	}

	static boolean remove(Utilisateur u, Privilege r) {
		if (u != null && r != null) {
			UtilisateurPrivilege.where { utilisateur == u && privilege == r }.deleteAll()
		}
	}

	static int removeAll(Utilisateur u) {
		u == null ? 0 : UtilisateurPrivilege.where { utilisateur == u }.deleteAll() as int
	}

	static int removeAll(Privilege r) {
		r == null ? 0 : UtilisateurPrivilege.where { privilege == r }.deleteAll() as int
	}

	static constraints = {
	    utilisateur nullable: false
		privilege nullable: false, validator: { Privilege r, UtilisateurPrivilege ur ->
			if (ur.utilisateur?.id) {
				if (UtilisateurPrivilege.exists(ur.utilisateur.id, r.id)) {
				    return ['userRole.exists']
				}
			}
		}
	}

	static mapping = {
		id composite: ['utilisateur', 'privilege']
		version false
	}
}
