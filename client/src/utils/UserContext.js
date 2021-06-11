import React from "react";

const UserContext = React.createContext({
  email: "",
  username: "",
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
