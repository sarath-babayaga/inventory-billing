import React from "react";
import "./Header.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";


function Header() {
  return (
    <div className="header">
      <ul className="list-nav">
        <li className="billing">
        <CustomLink to="/">
              {/* <div className="logo"> */}
                {/* <MdDashboard /> */}
                <h5 className="listContent">Billing</h5>
              {/* </div> */}
            </CustomLink>
          </li>
      </ul>
    </div>
  );
}

function CustomLink({ to, children, ...props }) {
  // const path = window.location.pathname
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Header;
