// import React, { useState, useEffect } from "react";
// import API from "../utils/API";
// import LoginForm from "../components/LoginForm";
// import SignUp from "../components/SignupForm"

// function Login(loggedIn, setLoggedIn) {
 
//   const [email, setEmail] = useState("")
//   const [username, setUsername] = useState("")
//   const [password, setPassword] = useState("")

//   // useEffect(() => {
//   //   loadUser()
//   // }, [])

//   function loadUser() {
//     setLoggedIn(true) 
//   }


//   function handleInputChange(event) {
//     console.log(event)
//     const {name, value} = event.target;
//     if (name === "username") {
//     setUsername({...username, value}) 
//   } else {
//     setPassword({...password, value});
//     setEmail({...email, value})
//   } 
//   console.log(email)
//   console.log(username)
//   console.log(password)
//   };

//   function handleFormSubmit(event) {
//     event.preventDefault();
//     if (username && password) {
//       API.getUsers ({
//         username: username,
//         password: password,
//       })
//       .then(res => loadUser())
//       .catch(err => console.log(err));
//     }
//     console.log("i am being clicked")
//   };


//   return (
//     <div>
//     <LoginForm 
//     onChange={handleInputChange}
//     onSubmit={handleFormSubmit}
//     />
//     <SignUp 
//     onChange={handleInputChange}
//     />
//     {/* <button onClick={showState}>console</button> */}
//     </div>
//   )
// }

// export default Login;
