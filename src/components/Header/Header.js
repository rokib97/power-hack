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
          <li>
            <p>Paid Total: </p>
          </li>

          <li>
            <a>Login</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
