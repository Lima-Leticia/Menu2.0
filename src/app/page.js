"use client";
import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import FoodModalForm from "../components/FoodModalForm";
import items from "../json/data";
import logo from "../logo.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';


// const allCategories = ["tudo", ...new Set(items.map((item) => item.category))];

const Home = () => {
  
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(
    () => {
      const loadData = async () => {
        const response = await fetch('http://localhost:3001/menu');
        const data = await response.json();

        setCategories(data);

        console.log(categories);
      }

      loadData();
    }, []);

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
        {/* <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        /> */}
        {/* <Menu items={menuItems} /> */}
      </section>
      <div>
        {
          categories.map( (category, index) => {
            return(
              <div key={index}>{category.title}</div>
            );
          })
        }
      </div>
      <div className='container mx-auto lg:max-w-screen-lg'>
      <FoodModalForm />
      </div>
    </main>
    
  );
};

export default Home;
