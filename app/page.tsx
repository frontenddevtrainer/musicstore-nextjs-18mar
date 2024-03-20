"use client"
import Link from "next/link";
import StoreProvider from "./StoreProvider";
import AlbumListing from "./components/album-listing";
import CartList from "./components/cart-list";
import Header from "./components/header";
import { AlbumsProvider } from "./context/albums";
import { CartProvider } from "./context/cart";
import { ThemeProvider } from "./context/theme";

export default function Home() {
  return (
    <StoreProvider>
      <ThemeProvider>
        <AlbumsProvider>
          <CartProvider>
            <main className="">
              <Header />
              <AlbumListing />
              <CartList />
              <Link href={"/login"}>Login</Link>
            </main>
          </CartProvider>
        </AlbumsProvider>
      </ThemeProvider>
    </StoreProvider>
  );
}
