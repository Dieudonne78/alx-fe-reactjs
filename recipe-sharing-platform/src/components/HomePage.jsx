import { useEffect,useState } from "react";
import data from '../data.json'
import { Link } from "react-router-dom";
function Homepage(){
  const[jsonData,setJsonData] = useState([]);
  useEffect(()=>{
    setJsonData(data);
  console.log(jsonData);

  },[])
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

export default Homepage;