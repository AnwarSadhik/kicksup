// import React from 'react'
import "./Filters.css";
import { Filter } from "lucide-react";

export default function Filters() {
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
            <input type="checkbox" name="cost" id="cost" />
            <p>Rs. 1500-4000</p>
          </div>
          <div>
            <input type="checkbox" name="cost" id="cost" />
            <p>Rs. 4001-7000</p>
          </div>
          <div>
            <input type="checkbox" name="cost" id="cost" />
            <p>Rs. 7001+</p>
          </div>
        </div>

        <div className="colours">
          <h2>Colour</h2>
          <div className="color-container">
            <div className="box" id="red"></div>
            <div className="box" id="blue"></div>
            <div className="box" id="yellow"></div>
            <div className="box" id="green"></div>
            {/* <div className="box" id="lightgreen"></div> */}
          </div>
        </div>

        <div className="design-templates">
          <h2>Design templates</h2>
          <div>
            <input type="checkbox" name="design" id="design" />
            <p>2</p>
          </div>
          <div>
            <input type="checkbox" name="design" id="design" />
            <p>3</p>
          </div>
          <div>
            <input type="checkbox" name="design" id="cost" />
            <p>3+</p>
          </div>
        </div>

        <div className="type">
          <h2>Type</h2>
          <div>
            <input type="checkbox" name="design" id="design" />
            <p>Loafers</p>
          </div>
          <div>
            <input type="checkbox" name="design" id="design" />
            <p>Sneakers</p>
          </div>
        </div>

        <div className="btn-div">
          <button className="btn">apply</button>
        </div>
      </section>
    </main>
  );
}
