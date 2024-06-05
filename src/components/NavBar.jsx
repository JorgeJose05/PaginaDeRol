import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-center items-center gap-8"> 
        <li>
          <Link to="/" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/razas" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
            Razas
          </Link>
        </li>
        <li>
          <Link to="/herbolario" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
            Herbolario
          </Link>
        </li>
        <li>
          <Link to="/ficha" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
            Ficha
          </Link>
        </li>
        <li>
          <Link to="/ejemplos" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
            Ejemplos
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
