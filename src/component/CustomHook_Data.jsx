import { useState,useEffect } from "react";


const useFetch = (url)=>{
    
    const [Data,setData] = useState(null)
    
    useEffect(()=>{
        fetch(url).then((res)=>res.json()).then((data)=>setData(data))
    },[])


    return [Data]
}


export default useFetch