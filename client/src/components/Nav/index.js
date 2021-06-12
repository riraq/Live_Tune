import React, { useContext } from "react"
import { useLogout} from "../../utils/auth"
import UserContext from "../../utils/UserContext";

function Nav() {
  const logout = useLogout();

  const userDatafromContext = useContext(UserContext)

  const consoleBtn = () => {
    console.log('userDatafromContext', userDatafromContext)
  }
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
        <li className="nav-item" onClick={consoleBtn}>
            console
        </li>
      </ul>
    </div>
  );
}

export default Nav