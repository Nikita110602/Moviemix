import { useEffect,useState } from "react";
import { fetchDataFromApi } from "../utils/api";
const useFetch =(url)=>{
    const [loading,setLoading] =useState(null);
    const [data,setData] = useState(null);
    const [error,setError]= useState(null);

    useEffect(()=>{
        setLoading("llloooading.....")
        setData(null);
        setData(null);
        fetchDataFromApi(url).then((res)=>{
            setLoading(false);
            setData(res);
            setError(null);
        }).catch((err)=>{
            setLoading(false);
            setError("something wrong in at ")
        })

    },[url])
    return {data,loading,error}
}

export default useFetch;