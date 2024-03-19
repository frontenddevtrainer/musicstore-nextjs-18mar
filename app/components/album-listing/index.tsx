"use client"
// import useAlbums from "@/app/hooks/useAlbums";
import { useEffect } from "react";
import AddToCart from "../add-to-cart";
// import { useAlbumsContext } from "@/app/context/albums";
import { useDispatch, useSelector } from "react-redux"
import { fetchAlbums } from "@/lib/store/actions/cart";
import { AppState } from "@/lib/store";

const AlbumListing = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAlbums() as any)
    }, [])

    const { items, loading } = useSelector((state: AppState) => {
        return state.albums
    })

    if (loading) {
        return <div>Loading...</div>
    }


    return <ul>
        {
            items && items?.map((album: any) => {
                return <li key={album.id}>{album.title}<AddToCart item={album} /></li>
            })
        }
    </ul>
}

export default AlbumListing;