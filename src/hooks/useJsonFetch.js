import { useState, useEffect } from "react";

export const useJsonFetch = (url, opts) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        setLoading(true);

        fetch(url)
            .then((response) => {
                if (!response.ok)
                    throw new Error("Network response was not ok");

                return response.json();
            })
            .then((json) => setData(json))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, [url, opts]);
    
    return [data, loading, error];
};