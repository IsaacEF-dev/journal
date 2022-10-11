import { heroes } from "../data/HeroesData"


export const getHeroeById = (id) => {
   
    return heroes.find(hero=>hero.id===id);
}
