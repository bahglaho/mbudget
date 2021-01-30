package mbudget

import grails.gorm.transactions.Transactional

@Transactional
class KeyGenService {

    def getTTiersCode() {

        String pseudo = "T-"; //2 reste 4
        Integer bv = TTiers.countByIdLike("${pseudo}%");
        String code = getCode(pseudo, bv, 6, 2);
        System.out.println("****code T_Tiers=" + code);
        return code;
    }
    def sizeOfString(String chaine) {
        int val = chaine.toCharArray().length;
        return val;
    }

    def getCode(String pseudo, Integer	bv, int size, int tailleChar) {


            String tC = String.valueOf(size-tailleChar);
            if (bv == null) {
                //int numOrdT = i+1;
                String numOrd= String.format("%0"+tC+"d", 1);
                System.out.println("///////Verification requette V null");
                System.out.println("///////Verification requette V null et pseudo = "+pseudo);
                String s = pseudo + numOrd;
                System.out.println("///////Verification requette V null et pseudo + numrd = "+s);
                return s;
            } else {
                //Integer v = bv.intValue();
                bv = bv +1;
                String numOrd= String.format("%0"+tC+"d", bv);
                System.out.println("///////Verification requette V non null");
                String s = pseudo + numOrd;
                return s;
            }

    }
}
