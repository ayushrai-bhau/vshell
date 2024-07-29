import React from 'react';

const CategoryItem = ({ category }) => {
  return (
    <div
      className={`p-4 rounded-3xl ${category.bgColor} ${category.borderColor} border-2 shadow flex flex-col justify-center items-center`}
      style={{ height: '220px' }}
    >
      <img src={category.image} alt={category.name} className="w-24 h-24 object-cover rounded-md" />
      <h2 className="mt-2 text-center text-lg font-semibold">{category.name}</h2>
    </div>
  );
};

export default CategoryItem;
