import { useEffect, useState } from "react"

const useAlbums = () => {
    const [albums, setAlbums] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<any>(null);
    useEffect(() => {
        const getAlbums = async () => {
            setLoading(true);
            try {
                // https://jsonplaceholder.typicode.com/albums
                const response = await fetch("http://localhost:3000/api/albums", {
                    next: {
                        tags: ["products", "offers", "sale", "432424324"]

                    }
                });
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