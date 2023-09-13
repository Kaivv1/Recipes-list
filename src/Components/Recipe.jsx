const Recipe = ({ recipe, onCheck }) => {
  const recipeArr = Object.values(recipe);
  const recipeObj = recipeArr.at(0);
  const {
    image,
    ingredientLines: ingredients,
    label,
    calories,
    url,
    source,
  } = recipeObj;

  return (
    <li className="recipe">
      <img src={image} alt="asd" />
      <h2>{label}</h2>

      <div className="recipe-short-details">
        <p>{`${calories.toFixed(0)} calories`}</p>
        <hr style={{ margin: "0rem 0.4rem" }} />
        <p>{`${ingredients.length} ingredients`}</p>
      </div>
      <hr style={{ margin: "0.2rem 0" }} />
      <div className="recipe-action">
        <a href={url}>{source.split(".com")}</a>
        <button className="btn-check" onClick={() => onCheck(recipeObj)}>
          Check
        </button>
      </div>
    </li>
  );
};

export default Recipe;
