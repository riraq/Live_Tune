/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

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
    return axios.post("/api/user/", eventDetails).then(result => result.data)
  },
  // newUser: function () {
  // },
  // logoutUser: function () {
  // },
}