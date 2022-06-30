abstract class LeagueChampion {
    hunger: number;
    health: number;

    abstract eat(): void
}

interface Yorlde extends LeagueChampion {
    yordleId: number
}

interface Adcarry extends LeagueChampion {
    adcId: number
}

class Tristana implements Yorlde, Adcarry {
    hunger: number;
    health: number
    yordleId: number;
    adcId: number;

    eat(){
       this.hunger -= 1
    }
}

const tristanaAdc = new Tristana()
