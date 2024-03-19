"use client"
import AlbumListing from "./components/album-listing";
import CartList from "./components/cart-list";
import Header from "./components/header";
import { AlbumsProvider } from "./context/albums";
import { CartProvider } from "./context/cart";
import { ThemeProvider } from "./context/theme";

export default function Home() {
  return (
    <ThemeProvider>
      <AlbumsProvider>
        <CartProvider>
          <main className="">
            <Header />
            <AlbumListing />
            <CartList />
          </main>
        </CartProvider>
      </AlbumsProvider>
    </ThemeProvider>
  );
}
