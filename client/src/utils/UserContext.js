import React from "react";

const UserContext = React.createContext({
  email: "",
  username: "",
  location: "",
  bio: "",
  events: [{ 
    id: "",
    name: "",
    image: "",
    link: "",
    date: "",
  }],
});

export default UserContext;
