import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';
function Delete(){
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate();
  navigate("/")
  return(
    <div>
      <button type="submit">Delete Recipe</button>
    </div>
  )
}

export default Delete;