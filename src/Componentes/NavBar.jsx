import { navbarlinks } from "../data/data.js";
import './NavBar.css';


const NavBar = () => {
  console.log(navbarlinks); 

  return (
    <nav className="navbar">
      <div className="logo">
        <p>TvMaze</p>
      </div>

      <ul className="menu">
        {navbarlinks.map((item) => (
          <li key={item.id}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>

      <div className="extra"></div>
    </nav>
  );
};

export default NavBar;
