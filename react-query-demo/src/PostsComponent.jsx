import React from "react";
import { useQuery,useQueryClient } from "react-query";

function PostsComponent(){
  const {isPending,error,data}=useQuery({
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
     <button onClick={refetchData()}></button>
    </>
  )
}

export default PostsComponent;