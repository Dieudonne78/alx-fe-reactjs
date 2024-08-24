import { useState } from 'react'
import { Route,Routes,Router } from 'react-router-dom';
import './App.css'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails';
import RecommendationsList from './components/RecommendationsList';
import FavoritesList from './components/FavoritesList';

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
       <RecommendationsList />
       <FavoritesList />
       <RecipeList />
       <Routes>
      <Route path='/' element={<RecipeList />}/>
      <Route path='/recipe/:id' element={<RecipeDetails />}/>
    </Routes>
    <AddRecipeForm />
   </> 
  );
}

export default App
