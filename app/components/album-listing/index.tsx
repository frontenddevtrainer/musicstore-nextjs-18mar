import useAlbums from "@/app/hooks/useAlbums";
import AddToCart from "../add-to-cart";
import { useAlbumsContext } from "@/app/context/albums";

const AlbumListing = () => {

    const { albums } = useAlbumsContext()

    return <ul>
        {
            albums?.map((album: any) => {
                return <li key={album.id}>{album.title}<AddToCart item={album} /></li>
            })
        }
    </ul>
}

export default AlbumListing;