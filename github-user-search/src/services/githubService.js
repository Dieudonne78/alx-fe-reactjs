import axios from "axios";
["https://api.github.com/search/users?q", "location", "minRepos"]
const url=import.meta.env.VITE_APP_GITHUB_API_KEY
async function fetchUserData(e){
  e.preventDefault();

  const response = await axios.get(`"https://api.github.com"/${username}`)
  console.log(response.data);
  setUserData(response.data);
  setLoading(false);


  
}