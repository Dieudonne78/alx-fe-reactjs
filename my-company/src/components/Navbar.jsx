import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div style={{display:'flex',justifyContent:'center',gap:'10px'}}>
      <Link to='/'>Home</Link>
      <Link to='/About'>About</Link>
      <Link to='/Services'>Services</Link>
      <Link to='/Contact'>Contact</Link>

    </div>
  );
}

export default Navbar;