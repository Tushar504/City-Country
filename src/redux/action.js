export const ADD_DATA="ADD_DATA"
export const SORTH="SORTH"
export const SORTL="SORTL"
export const adddata=(data)=>{
    return {
        type:ADD_DATA,
        payload:data
    }
}
export const sorth=(data)=>{
       return {
           type:SORTH,
           payload:data
       }
}

export const sortl=(data)=>{
    return {
        type:SORTL,
        payload:data
    }
}


export const getData=()=>{
    return async(dispatch, getState, api) => {
         try {
             let res=await fetch("http://localhost:8080/cities")
             let data=await res.json()
             dispatch(adddata(data))
         } 
         catch (error) {
            console.log(error)
         }
      }
}
export const postData=(data)=>{
    return async(dispatch, getState, api) => {
        try {
             await fetch("http://localhost:8080/cities",{
                    method:"POST",
                    body:JSON.stringify(data),
                    headers:{
                        'Content-Type': 'application/json'
                    }
            })
            
            dispatch(getData())
        } 
        catch (error) {
            console.log(error)
        }
     }
   

}
export const Delete=(id)=>{
    return async(dispatch, getState, api) => {
        try {
            await fetch(`http://localhost:8080/cities/${id}`,{
                    method:"DELETE",
                   
                    headers:{
                        'Content-Type': 'application/json'
                    }
            })
            
            dispatch(getData())
        } 
        catch (error) {
            console.log(error)
        }

}
}

export const Patch=(data,id)=>{
    return async(dispatch, getState, api) => {
        try {
            await fetch(`http://localhost:8080/cities/${id}`,{
                    method:"PATCH",
                    body:JSON.stringify(data),
                   
                    headers:{
                        'Content-Type': 'application/json'
                    }
            })
            
            dispatch(getData())
        } 
        catch (error) {
            console.log(error)
        }
}
}

export const Filter=(value)=>{
    if(value==="All"){
        return getData()
    }
    return async(dispatch, getState, api) => {
        try {
            let res=await fetch(`http://localhost:8080/cities?country=${value}`)
            let data=await res.json()
            dispatch(adddata(data))
        } 
        catch (error) {
           console.log(error)
        }
     }
}