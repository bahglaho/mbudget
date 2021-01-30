package mbudget

class BootStrap {

    def init = { servletContext ->
        log.info "Loading database..."

       /* Privilege privilege = new Privilege(authority: "ROLE_PARAM").save()
        Utilisateur utilisateur=new Utilisateur(username:"admin",password:"admin").save()
        UtilisateurPrivilege.create(utilisateur,privilege)
        Utilisateur utilisateur1=new Utilisateur(username:"abel",password:"abel").save()*/
    }
    def destroy = {
    }
}
