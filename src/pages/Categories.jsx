import React, { useEffect, useState } from 'react';
import { fetchCategories } from '../api/api';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCategories = async () => {
      setLoading(true);
      try {
        const { data } = await fetchCategories(1, 10);
        setCategories(data.categories);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    loadCategories();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading categories...</p>
      ) : (
        <ul>
          {categories.map(category => (
            <li key={category._id}>{category.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Categories;
