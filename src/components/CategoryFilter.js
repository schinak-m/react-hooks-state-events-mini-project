import React from "react";

function CategoryFilter({categories, selectedCategory, onSelectedCategory}) {
  const categoriesBtn = categories.map((category) => {
    const className = category === selectedCategory ? 'selected' : null
    return (
      <button
        key={category}
        className={className}
        onClick={() => onSelectedCategory(category)}>
        {category}
      </button>
    )
   })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoriesBtn}
    </div>
  );
}

export default CategoryFilter;
