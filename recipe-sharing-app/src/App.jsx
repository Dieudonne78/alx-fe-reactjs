import { useState } from 'react'
import { Route,Routes } from 'react-router-dom';
import './App.css'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails';

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
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
