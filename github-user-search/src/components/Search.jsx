import React ,{useState} from "react";
import axios from 'axios';
function Search(){
  ["login"]
  const [username, setUsername] = useState('');
  const [userData,setUserData] = useState({})
  const [loading,setLoading] = useState(false)
  const url=import.meta.env.VITE_APP_GITHUB_API_KEY

  async function fetchUserData(e){
    e.preventDefault();
    setLoading(true);
    
    try{
      const response = await axios.get(`${url}/${username}`)
    console.log("error",response.data.status);
    setUserData(response.data);
    setLoading(false);
  }catch(error){
    console.log("Error:", error)
    console.log("data:", userData)
    setUserData(null)
    setLoading(false);
  }


    
  }
  return(
    <>
    <form onSubmit={fetchUserData}>
      <input id="username" type="text" name="username" placeholder="Enter username" onChange={(e)=>setUsername(e.target.value)}/>
      <button type="submit">Submit</button>

    </form>
    {
      loading ? <h3>Loading..</h3>:!userData ?<small>Looks like we cant find the user</small>:(
        <div>
      <img src={userData.avatar_url} />
      <h2>{userData.name}</h2>
      <a href={userData.html_url}>
        Profile
      </a>
    </div>
      )
    }
    </>

  )

}

export default Search;