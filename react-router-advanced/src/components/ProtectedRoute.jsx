import { useState } from "react";
import { Navigate } from "react-router-dom";
function ProtectedRoute({children}){
  const [useAuth,setUseAuth]=useState(false)
 if(!useAuth){
  return(
   <Navigate to='/' />
  )
}

return <div>{children}</div>
}

export default ProtectedRoute;