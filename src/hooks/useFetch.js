import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [callFetch, setCallFetch] = useState(false)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try{
                const res = await fetch(url)
                const json = await res.json()
                setData(json)
            }
            catch(e){
                console.log(e.message)
                setError('houve algum erro ao carregar')
            }
            setLoading(false)
        }
        fetchData()
    }, [url, callFetch]);

    return {data, loading, error};
}