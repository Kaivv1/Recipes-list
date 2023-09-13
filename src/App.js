import "./App.css";
import React, { useEffect, useState } from "react";
import Search from "./Components/Search";
import Navbar from "./ui/Navbar";
import Logo from "./ui/Logo";
import { useRecipes } from "./hooks/useRecipes";
import Main from "./ui/Main";
import Container from "./ui/Container";
import RecipesList from "./Components/RecipesList";
import NumResults from "./ui/NumResults";
import Loader from "./ui/Loader";
import GreetMessage from "./ui/GreetMessage";
import Modal from "./ui/Modal";
import AddedRecipesList from "./Components/AddedRecipesList";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [query, setQuery] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState({});
  const [selectedAddedRecipe, setSelectedAddedRecipe] = useState({});
  const { recipes, isLoading, error } = useRecipes(query);
  const [isCheck, setIsCheck] = useState(false);
  const [isCheckAdded, setIsCheckAdded] = useState(false);
  const [addedRecipes, setAddedRecipes] = useLocalStorage("addedRecipes", []);
  const isAdded = addedRecipes.includes(selectedRecipe);

  useEffect(() => {
    if (isCheck === false) {
      setSelectedRecipe({});
    }
  }, [isCheck]);

  const handleCheck = (recipe) => {
    setSelectedRecipe(recipe);
    setIsCheck((check) => !check);
  };

  const handleAddedCheck = (recipe) => {
    setSelectedAddedRecipe(recipe);
    setIsCheckAdded((check) => !check);
  };

  const handleAddedRecipe = (recipe) => {
    if (isAdded) {
      alert("You already have this recipe in your list.");

      return;
    } else {
      setAddedRecipes((addedRecipes) => [...addedRecipes, recipe]);
    }
  };

  const handleDeleteRecipe = (recipeid) => {
    setAddedRecipes((recipes) =>
      recipes.filter((recipe) => recipe !== recipeid)
    );
  };

  return (
    <div className="app">
      {isCheck && (
        <Modal
          selectedRecipe={selectedRecipe}
          onCloseModal={setIsCheck}
          onAddRecipe={handleAddedRecipe}
          isCheck={isCheck}
        />
      )}
      {isCheckAdded && (
        <Modal
          onCloseAddedModal={setIsCheckAdded}
          selectedAddedRecipe={selectedAddedRecipe}
          isCheckAdded={isCheckAdded}
        />
      )}
      <Navbar>
        <Logo />
        <Search query={query} onChangeQuery={setQuery} />
        <NumResults recipes={recipes} />
      </Navbar>

      <Main>
        {recipes.length === 0 ? (
          <GreetMessage />
        ) : (
          <Container>
            {isLoading ? (
              <Loader />
            ) : (
              <RecipesList recipes={recipes} onCheck={handleCheck} />
            )}
          </Container>
        )}
        <Container>
          {isLoading ? (
            <Loader />
          ) : (
            <AddedRecipesList
              addedRecipes={addedRecipes}
              onCheck={handleCheck}
              onCheckAded={handleAddedCheck}
              onDelete={handleDeleteRecipe}
            />
          )}
        </Container>
      </Main>
    </div>
  );
}

export default App;
