import { useEffect, useState } from "react";
import { APP_ID, APP_KEY } from "../utils";

export const useRecipes = (query) => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    async function fetchRecipes() {
      try {
        setIsLoading(true);

        const res = await fetch(
          `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`,
          { signal: controller.signal }
        );

        if (!res.ok) throw new Error("No recipes found 🚩");

        const data = await res.json();

        setRecipes(data.hits);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }

      if (query.length < 3) {
        setRecipes([]);
        setError("");
        return;
      }
    }
    fetchRecipes();

    return function () {
      controller.abort();
    };
  }, [query]);
  return { recipes, error, isLoading };
};
