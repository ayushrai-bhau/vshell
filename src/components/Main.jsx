import React from 'react';
import CategoryItem from './CategoryItem';
import FruitsAndVeg from "../assets/fruits.png";
import CookingAndGhee from "../assets/Oil.png";
import MeatAndFish from "../assets/Meat.png";
import BakeryAndSnacks from "../assets/Bakery.png";
import DairyAndEggs from "../assets/Eggs.png";
import Beverages from "../assets/beverages.png";

const categories = [
  { name: 'Fresh Fruits & Vegetable', image: FruitsAndVeg, bgColor: 'bg-green-100', borderColor: 'border-green-300' },
  { name: 'Cooking Oil & Ghee', image: CookingAndGhee, bgColor: 'bg-yellow-100', borderColor: 'border-yellow-300' },
  { name: 'Meat & Fish', image: MeatAndFish, bgColor: 'bg-red-100', borderColor: 'border-red-300' },
  { name: 'Bakery & Snacks', image: BakeryAndSnacks, bgColor: 'bg-purple-100', borderColor: 'border-purple-300' },
  { name: 'Dairy & Eggs', image: DairyAndEggs, bgColor: 'bg-yellow-50', borderColor: 'border-yellow-300' },
  { name: 'Beverages', image: Beverages, bgColor: 'bg-blue-100', borderColor: 'border-blue-300' },
 
];

const Main = () => {
  return (
    <main className="container mx-auto px-6 py-4 flex-grow overflow-y-auto" style={{ maxHeight: 'calc(100vh - 300px)' }}>
      <div className="grid grid-cols-2 gap-4">
        {categories.map((category) => (
          <CategoryItem key={category.name} category={category} />
        ))}
      </div>
    </main>
  );
};

export default Main;
