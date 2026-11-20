import { useState } from 'react';
import './css/style.css';

const dataSets = {
  fruits: ['Apple', 'Banana', 'Cherry'],
  veggies: ['Carrot', 'Broccoli', 'Spinach'],
  grains: ['Rice', 'Oats', 'Quinoa']
};

export default function DynamicList() {
  const [activeCategory, setActiveCategory] = useState('fruits');

  const currentArray = dataSets[activeCategory];

  return (
    <div>
      <button onClick={() => setActiveCategory('fruits')}>Fruits</button>
      <button onClick={() => setActiveCategory('veggies')}>Vegetables</button>
      <button onClick={() => setActiveCategory('grains')}>Grains</button>

      <ul>
        {currentArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}