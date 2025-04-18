import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/modificar-datos">Modificar datos personales</Link>
        </li>
        {/* Otras opciones del menú */}
      </ul>
    </nav>
  );
};

export default Menu;
