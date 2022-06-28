abstract class Shoes {
    material: string
    country: string
    size: number

}

class nikePatike extends Shoes {
    pogodnaZaBasket: boolean

    automatskoPertlanje() {
        console.log("Patika se veze sama")
    }
}

class pumaPatike extends Shoes {
    daLiSuCrne: boolean
}

class adidasPatike extends Shoes {
    isFlat: boolean
}

const nikeShoes = new nikePatike()
nikeShoes.country = "Amerika"
nikeShoes.material = "Koza"
nikeShoes.size = 32
// nikeShoes.automatskoPertlanje() - ovaj metod imam!

const pumaShoes = new pumaPatike()
pumaShoes.country = "Nemacka"
pumaShoes.material = "Svila"
pumaShoes.size = 41
// pumaShoes.daLiSuCrne - imam ovde instance varijablu

const adidasShoes = new adidasPatike()
adidasShoes.country = "Amerika"
adidasShoes.material = "recikiliran materijal"
adidasShoes.size = 37
// adidasShoes.isFlat - imam ovde instance varijablu

const infoAboutShoes = (patika: Shoes) => {
    console.log(`Patika je iz ${patika.country}, napravljena je od materijala: ${patika.material} i broj patike je ${patika.size}`)
}

infoAboutShoes(nikeShoes)
infoAboutShoes(pumaShoes)
infoAboutShoes(adidasShoes)
