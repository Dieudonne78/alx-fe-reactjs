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
        <div key={data.id}>
          <h2>{data.title}</h2>
          <img src={data.image}/> 
          <p>{data.summary}</p>
        </div>
      ))}
    </>
  )
}

export default Homepage;