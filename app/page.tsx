"use client"
import AlbumListing from "./components/album-listing";
import CartList from "./components/cart-list";
import Header from "./components/header";
import { CartProvider } from "./context/cart";

export default function Home() {
  return (
    <CartProvider>
      <main className="">
        <Header />
        <AlbumListing />
        <CartList />
      </main>
    </CartProvider>
  );
}
