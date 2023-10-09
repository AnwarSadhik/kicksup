import Cart from "../cart/Cart";
import "./Product.css";
import { ChevronLeft } from "lucide-react";

export default function Product() {
  return (
    <main id="prod-wrapper">
      <section id="prod-container">
        <div className="prod-header">
          <ChevronLeft size={40} className="left-ico" />
          <h2>your design space</h2>
        </div>
        <section className="hero-layout">
          <div className="hero">
            <img src="/assets/shoe2.png" alt="hero" />
          </div>
          <div className="hero-prod">
            <img
              src="/assets/shoe2.png"
              alt="hero-preview"
              className="hero-preview"
            />
            <img
              src="/assets/shoe2.png"
              alt="hero-preview"
              className="hero-preview"
            />
            <img
              src="/assets/shoe2.png"
              alt="hero-preview"
              className="hero-preview"
            />
          </div>

          <section id="prod-details">
            <div className="prod-name">
              <h2>KSL 01</h2>
              <span>by kicksup</span>
            </div>
            <div className="reviews">
              <p>⭐⭐⭐⭐</p>
              <p>80 reviews</p>
            </div>
            <div className="pricing">
              <div className="price-wrap">
                <h2>Rs. 2000 /-</h2>
                <p>Get an exclusive 20% off shopping with HDFC bank</p>
              </div>
            </div>
            <div className="flex front">
              <h2>Front</h2>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="flex front">
              <h2>Middle</h2>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="flex front">
              <h2>Back</h2>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="flex front">
              <h2>Sole</h2>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="flex front">
              <h2>Size</h2>
              <span>7</span>
              <span>8</span>
              <span>9</span>
              <span>10</span>
            </div>
          </section>
        </section>
        <div className="stars">
          <p>Rate product</p>
          <div className="stars_container">
            <img
              src="/assets/star_unfilled.png"
              className="star"
              alt="star_unfilled"
            />
            <img
              src="/assets/star_unfilled.png"
              className="star"
              alt="star_unfilled"
            />
            <img
              src="/assets/star_unfilled.png"
              className="star"
              alt="star_unfilled"
            />
            <img
              src="/assets/star_unfilled.png"
              className="star"
              alt="star_unfilled"
            />
            <img
              src="/assets/star_unfilled.png"
              className="star"
              alt="star_unfilled"
            />
          </div>
        </div>
        <div className="btn-divs">
          <button className="prod-btn">share design</button>
          <button className="prod-btn">add to cart</button>
        </div>
      </section>
      <div id="cart_container">
        <Cart />
      </div>
    </main>
  );
}
