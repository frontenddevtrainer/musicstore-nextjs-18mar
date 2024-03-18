"use client"

import useAlbums from "@/app/hooks/useAlbums"
import { createContext, useContext } from "react"

export interface IAlbum {
    id: number,
    title: string,
    userId: number
}

export interface IAlbumsContext {
    albums: IAlbum[]
}

const AlbumsContext = createContext<IAlbumsContext>({ albums: [] })

const { Provider } = AlbumsContext;

const AlbumsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const { albums } = useAlbums()

    return <Provider value={{ albums }} >
        {children}
    </Provider>

}

const useAlbumsContext = () => {
    return useContext(AlbumsContext)
}

export {
    AlbumsProvider,
    useAlbumsContext
}