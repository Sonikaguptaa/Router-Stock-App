import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div
      style={{ display: "flex", justifyContent: "flex-end" }}
      className="nav"
    >
      <Link style={{ margin: "20px" }} to="/stocks">
        <div>Home</div>
      </Link>
      <Link style={{ margin: "20px" }} to="/about">
        <div>About</div>
      </Link>
      <Link to="/stocks/:symbol"></Link>
      <Link to="/stocks">
        <div style={{ margin: "20px" }}>Dashboard</div>
      </Link>
    </div>
  );
}

export default NavBar;
