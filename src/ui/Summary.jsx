const Summary = ({ addedRecipes }) => {
  return (
    <h1 className="summary">
      Added {addedRecipes.length}{" "}
      {`${addedRecipes.length === 1 ? "recipe" : "recipes"}`}
    </h1>
  );
};

export default Summary;
