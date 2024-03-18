import { useEffect, useState } from "react"

const useAlbums = () => {
    const [albums, setAlbums] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<any>(null);
    useEffect(() => {
        const getAlbums = async () => {
            setLoading(true);
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/albums");
                const albums = await response.json();
                setAlbums(albums);
            } catch (error) {
                setError(error);
            }
            finally {
                setLoading(false);
            }
        }
        getAlbums();
    }, [])

    return { albums, loading, error }
}

export default useAlbums;