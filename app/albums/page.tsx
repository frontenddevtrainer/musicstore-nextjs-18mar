

const AlbumsPage = async () => {

    const response = await fetch("http://localhost:3000/api/albums", {
        next: {
            tags: ["products", "offers", "sale", "432424324"]

        }
    });
    const albums = await response.json();

    return <div>
        {JSON.stringify(albums)}
    </div>

}

export default AlbumsPage;