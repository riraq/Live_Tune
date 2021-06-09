import axios from "axios";

// eslint-disable-next-line
export default {
  getEvents: function (search) {
    return axios.get("/api/events/" + search);
  },
  getUser: function (id) {
    return axios.get("/api/user/" + id)
  },
  getEvent: function (id) {
    return axios.get("/api/event/" + id);
  },
  saveEvent: function (eventDetails) {
    console.log("eventDetails: ", eventDetails)
    return axios.post("/api/user/", eventDetails).then(result => result.data)
  },
  newUser: function () {

  },

  logoutUser: function () {

  },
}