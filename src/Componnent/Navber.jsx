const Navber = () => {
  return (
    <div className="shadow">
      <div className="navbar bg-base-100 w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2  mt-2 "
            >
              <li>
              <a>Home</a>
            </li>
            <li><a>FAQ</a></li>

            <li>
              <a>Changelog</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Download</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            </ul>
          </div>
          <a className="btn btn-ghost lg:text-2xl font-bold ">CS — Ticket System</a>
        </div>
        <div className="navbar-end hidden lg:flex item-center">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li><a>FAQ</a></li>

            <li>
              <a>Changelog</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Download</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
       <button className="btn text-xs  w-[106px] ml-10 rounded-lg lg:w-[150px] lg:ml-2 lg:text-lg text-white bg-[linear-gradient(to_right,#632EE3,#9F62F2)]">+ New Ticket</button>
      </div>
    </div>
  );
};

export default Navber;
