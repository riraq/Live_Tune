import axios from "axios";

// eslint-disable-next-line
export default {
getEvents: function() {
  return axios.get("/api/events");
},

getUser: function (userId) {
  return axios.get("/api/user/" + userId)
},

getUsers: function(username, password) {
  return axios.get("/api/login/", username, password)
},

newUser: function() {

},

logoutUser: function() {

},
}

