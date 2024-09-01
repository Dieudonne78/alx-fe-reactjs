import React from "react";
import { useQuery,useQueryClient } from "react-query";

function PostsComponent(){
  ["isLoading", "isError", "fetchPosts"]
  const {isLoading,isError,fetchPosts}=useQuery({
    queryKey:'fetch-post',
    queryFn:()=> fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res)=>res.json())
      .then((response)=>console.log(response))
  })
  const queryClient = useQueryClient()
  const refetchData=()=>{
   queryClient.invalidateQueries('fetch-post')
  }
  return(
    <>
    <h2>Fetch post component</h2>
     <button onClick={refetchData()}></button>
    </>
  )
}

export default PostsComponent;
