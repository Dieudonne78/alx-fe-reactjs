
import { useContext } from "react";
import context from "./UserContext";
function UserDetails() {
  const userdata=useContext(context)
  return (
    <div>
      <p>Name: {userdata.name}</p>
      <p>Email: {userdata.email}</p>
    </div>
  );
}

export default UserDetails;