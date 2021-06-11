import React from "react"

function Nav(){
  return(
    <div>
   <ul className="nav nav-tabs">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/profile">Profile</a>
  </li>
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/explore">Explore</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Logout</a>
  </li>
</ul>
    </div>
  );
}

export default Nav