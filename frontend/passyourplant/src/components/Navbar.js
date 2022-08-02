import '../style/index.css';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      <Link className="nav-link" to="/add-plant">Add plant</Link>
      <Link className="nav-link" to="/about">About us</Link>
    </ul>
  </div>
</nav>
    );
}

export default Navbar;