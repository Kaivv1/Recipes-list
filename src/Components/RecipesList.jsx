import Recipe from "./Recipe";

const RecipesList = ({ recipes, onCheck }) => {
  return (
    <div className="recipe-list-container">
      <h1>Recipe results</h1>
      <ul className="recipe-list">
        {recipes.map((recipe) => (
          <Recipe recipe={recipe} key={recipe.recipe.uri} onCheck={onCheck} />
        ))}
      </ul>
    </div>
  );
};

export default RecipesList;
