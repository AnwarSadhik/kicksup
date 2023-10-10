import { useState } from "react";
import "./Filters.css";
import { Filter } from "lucide-react";
import { useGlobalCtx } from "../../context/global";
import { data } from "../../utils/data";

export default function Filters() {
  const { products, filteredProducts, setFilteredProducts } = useGlobalCtx();

  const initialFilters = {
    cost: null,
    color: null,
    design: null,
    type: null,
  };

  const [filters, setFilters] = useState(initialFilters);

  const handleFilterChange = (category, filterName) => {
    const updatedFilters = { ...filters };

    if (category === "color" || category === "type") {
      if (updatedFilters[category] === filterName) {
        updatedFilters[category] = null;
      } else {
        updatedFilters[category] = filterName;
      }
    } else if (category === "design") {
      if (updatedFilters.design === filterName) {
        updatedFilters.design = null;
      } else {
        updatedFilters.design = filterName;
      }
    } else if (category === "cost") {
      if (updatedFilters.cost === filterName) {
        updatedFilters.cost = null;
      } else {
        updatedFilters.cost = filterName;
      }
    }

    setFilters(updatedFilters);
  };

  const applyFilters = () => {
    const filtered = products.filter((product) => {
      let isMatch = true; // Assume the product matches initially

      // Check the cost filter
      if (filters.cost) {
        const price = product.price;
        if (filters.cost === "cost1500to4000") {
          if (price < 1500 || price > 4000) {
            isMatch = false; // Product does not match the cost filter
          }
        } else if (filters.cost === "cost4001to7000") {
          if (price < 4001 || price > 7000) {
            isMatch = false; // Product does not match the cost filter
          }
        } else if (filters.cost === "cost7001plus") {
          if (price < 7001) {
            isMatch = false; // Product does not match the cost filter
          }
        }
      }

      // Check the color filter
      if (filters.color && product.color !== filters.color) {
        isMatch = false; // Product does not match the color filter
      }

      // Check the design filter
      if (filters.design && product.design !== filters.design) {
        isMatch = false; // Product does not match the design filter
      }

      // Check the type filter
      if (filters.type && product.type !== filters.type) {
        isMatch = false; // Product does not match the type filter
      }

      return isMatch;
    });

    setFilteredProducts(filtered);
  };

  if (!filters) {
    setFilteredProducts(data);
  }

  console.log("filters", filters);
  console.log(filteredProducts);

  return (
    <main id="filters">
      <section className="container">
        <div className="header">
          <h2>Filters</h2>
          <Filter size={30} />
        </div>

        <div className="cost">
          <h2>Cost</h2>
          <div>
            <input
              type="checkbox"
              name="cost"
              id="cost1500to4000"
              checked={filters.cost === "cost1500to4000"}
              onChange={() => handleFilterChange("cost", "cost1500to4000")}
            />
            <p>Rs. 1500-4000</p>
          </div>
          <div>
            <input
              type="checkbox"
              name="cost"
              id="cost4001to7000"
              checked={filters.cost === "cost4001to7000"}
              onChange={() => handleFilterChange("cost", "cost4001to7000")}
            />
            <p>Rs. 4001-7000</p>
          </div>
          <div>
            <input
              type="checkbox"
              name="cost"
              id="cost7001plus"
              checked={filters.cost === "cost7001plus"}
              onChange={() => handleFilterChange("cost", "cost7001plus")}
            />
            <p>Rs. 7001+</p>
          </div>
        </div>

        <div className="colours">
          <h2>Colour</h2>
          <div className="color-container">
            <div
              className={`color-option black-bg ${
                filters.color === "black" ? "selected" : ""
              }`}
              onClick={() => handleFilterChange("color", "black")}
            >
              <input
                type="checkbox"
                name="color"
                id="black"
                checked={filters.color === "black"}
                onChange={() => {}}
              />
            </div>
            <div
              className={`color-option brown-bg ${
                filters.color === "brown" ? "selected" : ""
              }`}
              onClick={() => handleFilterChange("color", "brown")}
            >
              <input
                type="checkbox"
                name="color"
                id="brown"
                checked={filters.color === "brown"}
                onChange={() => {}}
              />
            </div>
            <div
              className={`color-option grey-bg ${
                filters.color === "grey" ? "selected" : ""
              }`}
              onClick={() => handleFilterChange("color", "grey")}
            >
              <input
                type="checkbox"
                name="color"
                id="grey"
                checked={filters.color === "grey"}
                onChange={() => {}}
              />
            </div>
            <div
              className={`color-option white-bg ${
                filters.color === "white" ? "selected" : ""
              }`}
              onClick={() => handleFilterChange("color", "white")}
            >
              <input
                type="checkbox"
                name="color"
                id="white"
                checked={filters.color === "white"}
                onChange={() => {}}
              />
            </div>
          </div>
        </div>

        <div className="design-templates">
          <h2>Design templates</h2>
          <div>
            <input
              type="checkbox"
              name="design"
              id="design2"
              checked={filters.design === "2"}
              onChange={() => handleFilterChange("design", "2")}
            />
            <p>2</p>
          </div>
          <div>
            <input
              type="checkbox"
              name="design"
              id="design3"
              checked={filters.design === "3"}
              onChange={() => handleFilterChange("design", "3")}
            />
            <p>3</p>
          </div>
          <div>
            <input
              type="checkbox"
              name="design"
              id="design4"
              checked={filters.design === "4"}
              onChange={() => handleFilterChange("design", "4")}
            />
            <p>4</p>
          </div>
        </div>

        <div className="type">
          <h2>Type</h2>
          <div>
            <input
              type="checkbox"
              name="type"
              id="loafers"
              checked={filters.type === "loafer"}
              onChange={() => handleFilterChange("type", "loafer")}
            />
            <p>Loafers</p>
          </div>
          <div>
            <input
              type="checkbox"
              name="type"
              id="sneakers"
              checked={filters.type === "sneaker"}
              onChange={() => handleFilterChange("type", "sneaker")}
            />
            <p>Sneakers</p>
          </div>
        </div>
        <div className="btn-div">
          <button className="btn" onClick={applyFilters}>
            apply
          </button>
        </div>
      </section>
    </main>
  );
}
