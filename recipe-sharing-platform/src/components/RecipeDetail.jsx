import data from '../data.json'
import { useEffect,useState } from "react";
import { useParams } from 'react-router-dom';
function Recipedetail(){
  const[jsonData,setJsonData] = useState([]);
  useEffect(()=>{
    setJsonData(data);
  console.log(jsonData);

  },[])
  const {id}=useParams();
  ["useParams", "ingredients", "instructions"]
  return(
    <>
      <div className="grid grid-cols-1 grid-cols-2 grid-cols-3 md">
      {jsonData.map((data)=>(
       <Link to={`/recipe/${data.id}`}>
          <div key={data.id} className="shadow-lg rounded-lg hover:shadow-2xl ">
          <h2 className="font-semibold text-lg">{data.title}</h2>
          <img className="w-full object-cover"src={data.image}/> 
          <p className=" font-semibold text-sm">{data.summary}</p>
        </div>
       </Link>
      ))}
      </div>
    </>
  )
}

export default Recipedetail;