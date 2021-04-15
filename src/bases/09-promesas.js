 import { getHeroeById } from "../bases/08-import-export";
 
//  const promesa = new Promise( (resolve,reject) =>{
//    setTimeout( () =>{
//      const heroe = getHeroeById(1)
//       resolve(heroe)
//       //reject("No se encontro el Heroe")
//    })

//  },200)

//  promesa.then( (heroe) => {
//     console.table(heroe)
//  } ).catch(error =>{
//    console.error(error)
//  })

const getHeroeByIdAsync = (id) =>{
  return new Promise( (resolve,reject) =>{
    setTimeout( () =>{
      const heroe = getHeroeById(id)
        if(heroe === undefined){
          reject("No se encontro el Heroe")
        }else{
          resolve(heroe)
        }
       
    },200)
 
  })

}

getHeroeByIdAsync(6).then( heroe =>{
  console.table(heroe)
}).catch(error => { console.error(error) })