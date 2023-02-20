import {useState} from "react";


export const useFeching=(callback)=>{

    const[isLoading,setIsLoading]=useState(false);
    const[error,setError]=useState('')


    const feaching=async()=>{
        try{
            setIsLoading(true)
            await callback()
        }catch (e){
            setError(e.message)
        }finally{
            setIsLoading(false)
        }
    }
    return[feaching,isLoading,error]
}



/*
const fetch=async()=>{
    setIsLoading(true)
    await callback()
     if(callback===null){

         setError(e.message)

     }
    else{
         setIsLoading(false)

     }



}*/
