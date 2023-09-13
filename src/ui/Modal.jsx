import { useEffect } from "react";

const spanStyle = {
  display: "inline-block",
  marginBottom: "0.2rem",
};

const Modal = ({
  selectedRecipe,
  onCloseModal,
  onAddRecipe,
  onCloseAddedModal,
  selectedAddedRecipe,
  isCheckAdded,
  isCheck,
}) => {
  const {
    image,
    label,
    calories,
    dietLabels: diet,
    healthLabels: health,
    ingredientLines: ingredients,
    cuisineType: cuisine,
    dishType,
    mealType,
    source,
    url,
    totalWeight: portion,
    totalNutrients: { CHOCDF: carbs, FAT: fat, FIBTG: fiber, PROCNT: protein },
  } = isCheck ? selectedRecipe : selectedAddedRecipe;

  useEffect(() => {
    const callback = (e) => {
      if (e.code === "Escape") {
        if (isCheck) onCloseModal((modal) => !modal);
        if (isCheckAdded) onCloseAddedModal((modal) => !modal);
      }
    };

    document.addEventListener("keydown", callback);

    return function () {
      document.removeEventListener("keydown", callback);
    };
  }, [onCloseModal, onCloseAddedModal, isCheck, isCheckAdded]);

  const handleAddRecipe = () => {
    onAddRecipe(selectedRecipe);
    onCloseModal((modal) => !modal);
  };

  function handleCloseModal() {
    return isCheck
      ? onCloseModal((check) => !check)
      : onCloseAddedModal((check) => !check);
  }

  return (
    <div className="modal-container">
      <button className="btn-close-modal" onClick={handleCloseModal}>
        ✖
      </button>
      <div className="modal">
        <div className="modal-header">
          <img src={image} alt={`For ${label}`} />
          <div className="modal-header-details">
            <h1>{label}</h1>
            <p style={{ marginTop: "1rem" }}>
              <span style={{ display: "inline-block", marginBottom: "0.2rem" }}>
                1. Short resume :
              </span>
              <br /> - This recipe is from the {cuisine} cuisine. You can serve
              this dish as {dishType} its usually served for {mealType} 🤓
            </p>
            <ul style={{ margin: "1rem 0rem" }}>
              <span style={spanStyle}>2. Diet :</span>
              {diet.map((label) => (
                <li key={label} style={{ marginLeft: "2.2rem" }}>
                  {label}
                </li>
              ))}
            </ul>
            <p>
              <span style={spanStyle}>3. Recipe details : </span>
              <br />
              <span>- {health.slice(0, -1).join(", ") + health.at(-1)}</span>
            </p>
            <p style={{ display: "inline-block", marginTop: "1rem" }}>
              4. You can check more at
            </p>
            <a href={url}> {source}</a>
          </div>
        </div>

        <div className="modal-details">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              lineHeight: "1.5rem",
            }}
          >
            <h3 style={{ marginBottom: "0.4rem" }}>Dish stats : </h3>
            <p>Portion: {`${portion.toFixed(0)} g`}</p>
            <p>{calories.toFixed(0)} kcal</p>
            <p>
              {carbs.label} - {carbs.quantity.toFixed(0)} {carbs.unit}
            </p>
            <p>
              {fat.label} - {fat.quantity.toFixed(0)} {fat.unit}
            </p>
            <p>
              {fiber.label} - {fiber.quantity.toFixed(0)} {fiber.unit}
            </p>
            <p>
              {protein.label} - {protein.quantity.toFixed(0)} {protein.unit}
            </p>
          </div>
          <div>
            <h3 style={{ marginBottom: "0.4rem" }}>Ingredients :</h3>
            <ul>
              {ingredients.map((ingr) => (
                <li key={ingr}>{ingr}</li>
              ))}
            </ul>
          </div>
        </div>
        {isCheck && (
          <button className="btn-add" onClick={handleAddRecipe}>
            + Add recipe
          </button>
        )}
      </div>
    </div>
  );
};

export default Modal;
