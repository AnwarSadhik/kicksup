import "./Showcase.css";
import { useGlobalCtx } from "../../context/global";
import { useNavigate,Link } from "react-router-dom";

export default function Showcase() {
    const { products } = useGlobalCtx();
    const navigate = useNavigate();

    const viewProduct = (product) => {
        navigate(`/product/${product.id}`, { state: { product } });
    }

    return (
        <main id="products_wrapper">
            {products?.map((product) => {
                return (
                    <section key={product.id} className="product_wrapper">
                        <div className="product_container" onClick={() => viewProduct(product)}>
                            <Link to={`product/${product.id}`}>
                            <img src={product.image} alt="product-img" className="product-img" />
                            </Link>
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
