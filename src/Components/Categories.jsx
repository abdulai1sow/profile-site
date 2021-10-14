import React from 'react'

const Categories = ({categories, filterItems}) => {
  return (
    //simple list use index
    //key to filter through the index
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type='button'
            className='filter-btn'
            key={index}
          onClick={() => filterItems(category)}
        >
          {category}
        </button>
        );
      })}
    </div>
  );
}

export default Categories;
