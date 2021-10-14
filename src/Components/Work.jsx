import React, { useState } from 'react'
import Projects from './Projects'
import Categories from './Categories'
import items from './Data'
import Home from './Home'

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function Work() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  //original list
  //set to show all list
  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems);
  }
  return (
    <main>
      {/* <Home /> */}
      <section className='project-section' id='work'>
        <div className='title'>
          <h2>Projects</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Projects items={menuItems} />

      </section>
    </main>
  );
}

export default Work;