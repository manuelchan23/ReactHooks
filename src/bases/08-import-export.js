//import {} from './data/heroes';
import {heroes} from '../data/heroes'

const getHeroeById = (id) =>{
  return heroes.find(heroe =>  heroe.id === id);
}

const getHeroeByOwner  = (owner) => {
  return heroes.filter ((heroe) => heroe.owner === owner)
}

// console.log(getHeroesById(2));

// console.table(getHeroeByOwner("Marvel"));

export{
  getHeroeById,
  getHeroeByOwner
}