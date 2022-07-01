import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/billing-list`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  let newAmount = 0;
  for (let count of data) {
    newAmount = parseInt(newAmount) + parseInt(count?.paidAmount);
  }

  console.log(data);

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
            <p className="font-bold">Paid Total: {newAmount} </p>
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
