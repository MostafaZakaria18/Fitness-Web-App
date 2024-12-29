import React from "react";
import "./RecipeItem.css";

const RecipeItem = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <h1 className="recipe-title">{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} className="recipe-image" />
      <p className="recipe-details">
        <strong>Prep Time:</strong> {recipe.prepTimeMinutes} mins | <strong>Cook Time:</strong> {recipe.cookTimeMinutes} mins | <strong>Servings:</strong> {recipe.servings}
      </p>
      <p className="recipe-meta">
        <strong>Difficulty:</strong> {recipe.difficulty} | <strong>Cuisine:</strong> {recipe.cuisine} | <strong>Calories:</strong> {recipe.caloriesPerServing} per serving
      </p>
      <p className="recipe-rating">
        <strong>Rating:</strong> {recipe.rating} ★ ({recipe.reviewCount} reviews)
      </p>
      <div className="recipe-tags">
        <strong>Tags:</strong> {recipe.tags.join(", ")}
      </div>
      <div className="recipe-ingredients">
        <h2>Ingredients:</h2>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="recipe-instructions">
        <h2>Instructions:</h2>
        <ol>
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeItem;
