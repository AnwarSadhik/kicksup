import "./Showcase.css";
import { useGlobalCtx } from "../../context/global";

export default function Showcase() {
    const { products } = useGlobalCtx();

    return (
        <main id="products_wrapper">
            {products?.map((product) => {
                return (
                    <section key={product.id} className="product_wrapper">
                        <div className="product_container">
                            <img src={product.image} alt="product-img" className="product-img" />
                            <div>
                                <h2>{product.name}</h2>
                                <div className="product-footer">
                                    <p>Rs. {product.price}/-</p>
                                    ⭐⭐⭐⭐
                                </div>
                            </div>
                        </div>
                    </section>
                );
            })}
        </main>
    );
}
