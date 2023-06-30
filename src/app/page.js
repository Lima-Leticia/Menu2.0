"use client";
import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import FoodModalForm from "../components/FoodModalForm";
import items from "../json/data";
import logo from "../logo.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';

const allCategories = ["tudo", ...new Set(items.map((item) => item.category))];

const Home = () => {
  
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "tudo") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <img src={logo} alt="logo" className="logo" />
          <h2>Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <Menu items={menuItems} />
      </section>
      <div className='container mx-auto lg:max-w-screen-lg'>
      <FoodModalForm />
      </div>
    </main>
    
  );
};

export default Home;