import { useEffect, useState } from "react";

export const useLocalStorage = (key, state) => {
  const [values, setValues] = useState(() => {
    const recipes = localStorage.getItem(key);
    return recipes ? JSON.parse(recipes) : state;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(values));
  }, [key, values]);
  return [values, setValues];
};
