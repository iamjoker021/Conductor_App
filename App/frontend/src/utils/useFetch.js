import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch(url)
            .then((response) => {
                if(response.ok){
                    return response.json();
                } else {
                    throw Error('No Cities Found');
                }
            })
            .then((data) => {
                console.log('This is data: ',data.city_list);
                setData(data.city_list);
                setError(null);
                setIsPending(false);
            })
            .catch((error) => {
                setError(error.message);
                setIsPending(false);
            })
    }, [])

    return { data, isPending, error }
}

export default useFetch