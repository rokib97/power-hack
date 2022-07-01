import { useContext } from "react";
import { Link } from "react-router-dom";
import { RequireContext } from "../../App";
const Header = () => {
  const { auth, Total } = useContext(RequireContext);
  return (
    <div class="navbar bg-base-100 lg:px-12 shadow-lg">
      <div class="flex-1">
        <a href="/" class="btn btn-ghost normal-case text-xl">
          Power Hack
        </a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal p-0">
          {auth && (
            <li className="mr-1">
              <p className="font-bold">Paid Total: {Total}</p>
            </li>
          )}
          {auth ? (
            <li className="mr-1">
              <Link to="/login" className="font-bold">
                Logout
              </Link>
            </li>
          ) : (
            <li className="mr-1">
              <Link to="/login" className="font-bold">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
