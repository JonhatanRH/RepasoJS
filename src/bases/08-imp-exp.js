//import heroes, { owners } from "../data/heroes";
import heroes from "../data/heroes";

//console.log( heroes );
/*
const getHeroesById = (id) => {
    return heroes.find( ( heroe ) => {
        if( heroe.id === id ){
            return true;
        }else {
            return false;
        }
    });
}
*/

export const getHeroesById = (id) => heroes.find( ( heroe ) => heroe.id === id );
//console.log( getHeroesById(2) );

//find?, filter
export const getHeroesByOwner = ( owner ) => heroes.filter( ( heroe ) => heroe.owner === owner );
//console.log( getHeroesByOwner( 'DC' ) );
