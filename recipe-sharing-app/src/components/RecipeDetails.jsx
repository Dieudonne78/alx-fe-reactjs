  // RecipeDetails component
  import { useRecipeStore } from './recipeStore';
  import Delete from './DeleteRecipeButton';
  import Edit from './EditRecipeForm';

  const RecipeDetails = ({ recipeId }) => {
    const recipe = useRecipeStore(state =>
      state.recipes.find(recipe => recipe.id === recipeId)
    );

    return (
      <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        <Delete />
        <Edit />
      </div>
    );
  };

  export default RecipeDetails;