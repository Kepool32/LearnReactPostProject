import {useMemo} from "react";

export const GetPageCount=(totalPages,limit)=>{

    return Math.ceil(totalPages/limit)

}




export const useGetPagesArray=(totalPages)=>{

const PagesArray=useMemo(()=>{
    console.log(totalPages)
    let result=[]
    for(let i=0;i<totalPages;i++){
        result.push(i+1)
    }
    return result

},[totalPages])

    return PagesArray;
}
