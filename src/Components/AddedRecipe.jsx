const AddedRecipe = ({ addedRecipe, onCheckAded, onDelete }) => {
  // const { calories, image, label, ingredients, url, source } = addedRecipe;
  // console.log(addedRecipe);

  const {
    image,
    label,
    calories,
    ingredientLines: ingredients,
    source,
    url,
  } = addedRecipe;

  return (
    <li className="added-recipe">
      <div>
        <img src={image} alt={`${label}`} />
      </div>
      <div className="added-recipe-details">
        <h3>{label}</h3>
        <div style={{ display: "flex" }}>
          <p>{calories.toFixed(0)} calories</p>
          <hr style={{ margin: "0rem 0.5rem" }} />
          <p>{ingredients.length} ingredients</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <a href={url}>{source}</a>
          <button
            className="btn-check"
            onClick={() => onCheckAded(addedRecipe)}
          >
            Check
          </button>
          <button className="btn-del" onClick={() => onDelete(addedRecipe)}>
            ✖
          </button>
        </div>
      </div>
    </li>
  );
};

export default AddedRecipe;
