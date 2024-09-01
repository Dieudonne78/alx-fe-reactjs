import { useState } from "react";
import { Navigate } from "react-router-dom";
function protectedRoute({children}){
  const [isLoggedIn,setIsLoggedIn]=useState(false)
 if(!isLoggedIn){
  return(
   <Navigate to='/' />
  )
}

return <div>{children}</div>
}

export default protectedRoute;