import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div class="navbar bg-base-100 lg:px-12 shadow-lg">
      <div class="flex-1">
        <a href="/" class="btn btn-ghost normal-case text-xl">
          Power Hack
        </a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal p-0">
          <li className="mr-1">
            <p className="font-bold">Paid Total:</p>
          </li>

          <li className="mr-1">
            <Link to="/" className="font-bold">
              Home
            </Link>
          </li>
          <li className="mr-1">
            <Link to="/login" className="font-bold">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
