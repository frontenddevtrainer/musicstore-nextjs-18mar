import Characters from "./characters";
import { Suspense } from "react";
// RSC
const OrderPage = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const { results } = await response.json();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Characters characters={results} />
    </Suspense>
  );
};

export default OrderPage;
