import { useState } from "react";
import { Navigate } from "react-router-dom";
function ProtectedRoute({children}){
  const [isLoggedIn,setIsLoggedIn]=useState(false)
 if(!isLoggedIn){
  return(
   <Navigate to='/' />
  )
}

return <div>{children}</div>
}

export default ProtectedRoute;