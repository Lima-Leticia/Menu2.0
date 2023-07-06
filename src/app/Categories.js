import React from "react";

const Categories = ({ categories, filterItems, activeCategory }) => {
  const allCategories = ["Tudo", "Lanches", "Sorvetes", "Pizzas", "Bebidas"];

  return (
    <div className="btn-container">
      {allCategories.map((category) => (
        <button
          key={category}
          className={`filter-btn ${activeCategory === category ? "active" : ""}`}
          onClick={() => filterItems(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
