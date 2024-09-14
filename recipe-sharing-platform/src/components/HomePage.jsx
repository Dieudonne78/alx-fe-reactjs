import { useEffect,useState } from "react";
import data from '../data.json'
function Homepage(){
  const[jsonData,setJsonData] = useState([]);
  useEffect(()=>{
    setJsonData(data);
  console.log(jsonData);

  },[])
  return(
    <>
      {jsonData.map((data)=>(
        <div key={data.id} className="shadow-lg rounded-lg hover:shadow-2xl ">
          <h2 className="font-semibold text-lg">{data.title}</h2>
          <img className="w-full object-cover"src={data.image}/> 
          <p className=" font-semibold text-sm">{data.summary}</p>
        </div>
      ))}
    </>
  )
}

export default Homepage;