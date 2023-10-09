// import React from 'react'
import "./Store.css"
import Filters from "../../components/filters/Filters";
import Showcase from "../../components/showcase/Showcase";
import Cart from "../../components/cart/Cart";

export default function Store() {
  return (
    <main className="store_wrapper">
      <section id="store_container">
        <Filters />
        <Showcase />
        <section id="cart_section">
        <Cart />
        </section>
      </section>
    </main>
  );
}
