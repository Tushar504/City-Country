import { ADD_DATA } from "./action"
import { SORTH } from "./action"
import { SORTL } from "./action"
export const reducer=(store={data:[]},{type,payload})=>{
    switch(type){
     case ADD_DATA:
         return {...store,data:payload}

     case SORTH:
         return {...store,data:[...store.data.sort((a,b)=>{
             return b.population-a.population
         })]}

    case SORTL:
        return {...store,data:[...store.data.sort((a,b)=>{
            return a.population-b.population
        })]}
         default:
             return store
    }
}