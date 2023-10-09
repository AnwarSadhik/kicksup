// import React from 'react'
import "./Cart.css";
import { ShoppingBag } from "lucide-react";
import { MapPin } from "lucide-react";
import { CalendarDays } from "lucide-react";
import { useGlobalCtx } from "../../context/global";

export default function Cart() {
  const { cart,removeItemFromCart } = useGlobalCtx();

  return (
    <main id="cart-wrapper">
      <div className="cart-header">
        <h2>CART</h2>
        <ShoppingBag size={30} />
      </div>
      {cart ? (
        <section id="cart_product">
            {cart?.map((c) => {
                return (
                  <section id="cart" key={c.id}>
                    <img src={c.image} alt="cart-img" />
                    <div>
                      <h2>{c.name}</h2>
                      <p>Rs. {c.price}/-</p>
                    <button className="btn" onClick={() => removeItemFromCart(c.id)}>remove item</button>
                    </div>
                  </section>
                )
            })}
        </section>
      ) : (
        <div className="empty_cart">
          <p>
            it&apos;s empty here <br /> go shop some stuff
          </p>
        </div>
      )}

      <div className="cart-footer">
        <div className="footer-container">
          <div className="footer">
            <MapPin />
            Home
          </div>
          <div className="footer">
            <CalendarDays />
            select date
          </div>
        </div>
        <button className="btn">order now</button>
      </div>
    </main>
  );
}
