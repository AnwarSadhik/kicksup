import "./Showcase.css";
import { useGlobalCtx } from "../../context/global";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { data } from "../../utils/data";

export default function Showcase() {
  const { filteredProducts, setFilteredProducts } = useGlobalCtx();
  const navigate = useNavigate();

  const viewProduct = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  useEffect(() => {
    setFilteredProducts(data);
  }, []);

  return (
    <main id="products_wrapper">
      {filteredProducts.length === 0 ? (
        <p>No products match the selected filters :(</p>
      ) : (
        filteredProducts.map((product) => (
          <section key={product.id} className="product_wrapper">
            <div
              className="product_container"
              onClick={() => viewProduct(product)}
            >
              <Link to={`product/${product.id}`}>
                <img
                  src={product.image}
                  alt="product-img"
                  className="product-img"
                />
              </Link>
              <div>
                <h2>{product.name}</h2>
                <div className="product-footer">
                  <p>Rs. {product.price}/-</p>
                  <p>⭐⭐⭐⭐</p>
                </div>
              </div>
            </div>
          </section>
        ))
      )}
    </main>
  );
}
