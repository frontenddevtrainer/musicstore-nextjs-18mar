import useAlbums from "@/app/hooks/useAlbums";
import AddToCart from "../add-to-cart";

const AlbumListing = () => {

    const { albums } = useAlbums();

    return <ul>
        {
            albums?.map((album: any) => {
                return <li key={album.id}>{album.title}<AddToCart item={album} /></li>
            })
        }
    </ul>
}

export default AlbumListing;