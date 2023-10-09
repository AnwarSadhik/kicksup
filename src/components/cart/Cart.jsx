// import React from 'react'
import "./Cart.css";
import { ShoppingBag } from "lucide-react";
import { MapPin } from "lucide-react";
import { CalendarDays } from "lucide-react";

export default function Cart() {
  return (
    <main id="cart-wrapper">
      <div className="cart-header">
        <h2>CART</h2>
        <ShoppingBag size={30} />
      </div>
      <div className="empty_cart">
        <p>
          it&apos;s empty here <br /> go shop some stuff
        </p>
      </div>
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
