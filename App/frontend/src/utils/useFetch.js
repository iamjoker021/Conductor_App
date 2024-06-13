import { useEffect, useState } from "react"

const useFetch = (url, attribute) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((response) => {
                if(response.ok){
                    return response.json();
                } else {
                    throw Error(`No ${attribute} Found`);
                }
            })
            .then((data) => {
                if(data && data.status){
                    setData(data[attribute]);
                    setError(null);
                    setIsPending(false);
                } else {
                    setError('Unable to fetch data');
                    setIsPending(false);
                }
                
            })
            .catch((error) => {
                setError(error.message);
                setIsPending(false);
            })
    }, [url])

    return { data, isPending, error };
}

export default useFetch