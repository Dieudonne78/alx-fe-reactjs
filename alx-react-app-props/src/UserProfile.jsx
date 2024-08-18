import React,{useContext} from "react";
import UserContext from "../UserContext";
const UserProfile = (props) => {
  return (
  <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
    <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
    <p>Bio: {props.bio}</p>
  </div>
  );
};

export default UserProfile;