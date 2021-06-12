import React from "react"
import { useLogout } from '../../utils/auth';

function Nav() {

  const logout = useLogout();

  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/profile">Profile</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/explore">Explore</a>
        </li>
        <li className="nav-item">
            <a className="nav-link active" onClick={logout} href="/">Logout</a>
        </li>
      </ul>
    </div>
  );
}

export default Nav