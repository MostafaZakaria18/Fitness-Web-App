import React, { useEffect, useState } from "react";
import "./Recipes.css";
import { useNavigate } from "react-router-dom";
import RecipeItem from "./RecipesItem";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeClick = (recipe) => {
    console.log("clicked");
    setSelectedRecipe(recipe);
  };

  const handleBack = () => {
    setSelectedRecipe(null);
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("https://dummyjson.com/recipes", {
          method: "GET",
          headers: {
            "x-rapidapi-Key":
              "5169944a18msh69db70c57f14d9bp1d0404jsnc142af4328c1",
            "x-rapidapi-host":
              "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error ! status: ${response.status}`);
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new error(
            "The API did not return JSON. Please check the endpoint."
          );
        }

        const data = await response.json();
        setRecipes(data.recipes);
        localStorage.setItem("recipes", JSON.stringify(data.recipes));
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchRecipes();
  }, []);

  if (loading) {
    return <div className="loading">Loading recipes...</div>;
  }
  if (error) {
    if (error.includes("429")) {
      return (
        <div className="error">Too many requests! Please try again later.</div>
      );
    }
    return <div className="error">Error:{error}</div>;
  }
  return (
    <div className="recipes-list-container">
      {console.log(selectedRecipe)}
      {selectedRecipe ? (
        <div>
          <button className="back-button" onClick={handleBack}>
            Back to Recipes List
          </button>
          <RecipeItem recipe={selectedRecipe} />
        </div>
      ) : (
        <div className="recipes-container">
          <h1>Healthy Recipes</h1>
          <div className="recipes-grid">
            {recipes.map((recipe) => (
              <div key={recipe.id} className="recipe-card">
                <img
                  src={recipe.image || ""}
                  alt={recipe.title}
                  className="recipe-image"
                />
                <h3>{recipe.name}</h3>
                <button className="back-button" onClick={() => handleRecipeClick(recipe)}>
                  show recipe
                </button>
                {/* <p>recipe.description</p> */}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Recipes;
