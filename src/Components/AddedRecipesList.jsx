import Summary from "../ui/Summary";
import AddedRecipe from "./AddedRecipe";

const AddedRecipesList = ({ addedRecipes, onCheck, onCheckAded, onDelete }) => {
  return (
    <div className="added-recipes-container">
      <Summary addedRecipes={addedRecipes} />
      <ul className="added-recipes-list">
        {addedRecipes.map((addedRecipe) => (
          <AddedRecipe
            key={addedRecipe.label}
            addedRecipe={addedRecipe}
            onCheck={onCheck}
            onCheckAded={onCheckAded}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default AddedRecipesList;
