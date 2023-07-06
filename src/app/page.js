'use client'
import { useState, useEffect } from "react";
import Menu from "../app/Menu";
import Categories from "../app/Categories";
import FoodModalForm from "../components/FoodModalForm";
import data from "../json/data.json";
import logo from './logo.jpg';
import './index.css';

const Home = () => {
  const [menuItems, setMenuItems] = useState(data.menu);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch('http://localhost:3001/menu');
      const data = await response.json();
      setCategories(data);
    };

    loadData();
  }, []);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "Tudo") {
      setMenuItems(data.menu);
      return;
    }
    const newItems = data.menu.filter(
      (item) => item.category.toLowerCase() === category.toLowerCase()
    );
    setMenuItems(newItems);
  };
  
  

  const addFood = (food) => {
    setMenuItems((prevMenuItems) => [...prevMenuItems, food]);
    setModalOpen(false);
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

      <div>
        {categories.map((category, index) => {
          return <div key={index}>{category.title}</div>;
        })}
      </div>
      <div className="container mx-auto lg:max-w-screen-lg">
      <FoodModalForm show={modalOpen} onAddFood={addFood} /> 
      <button onClick={() => setModalOpen(true)}>Adicionar Comida</button>
      </div>
    </main>
  );
};

export default Home;
