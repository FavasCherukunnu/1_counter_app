import React, { useEffect, useState } from 'react';
import { fetchCategories } from '../api/api';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const { data } = await fetchCategories(1, 10);  // Example pagination
        setCategories(data.categories);
      } catch (err) {
        console.error(err);
      }
    };
    loadCategories();
  }, []);

  return (
    <div>
      <ul>
        {categories.map(category => (
          <li key={category._id}>
            <h3>{category.name}</h3>
            <p>{category.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
