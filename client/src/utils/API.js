import axios from "axios";

// eslint-disable-next-line
export default {
  getEvents: function (search) {
    return axios.get("/api/events/" + search);
  },
  getUser: function (userId) {
    return axios.get("/api/user/" + userId)
  },
  getEvent: function (id) {
    return axios.get("/api/event/" + id);
  },
  saveEvent: function (eventDetails) {
    console.log("eventDetails", eventDetails)
    return axios.put ("/api/user/", eventDetails).then(result => result.data)
  }
};