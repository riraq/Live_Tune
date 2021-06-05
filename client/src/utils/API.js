import axios from "axios";

// eslint-disable-next-line
export default {
  getEvents: function (search) {
    console.log(search)
    return axios.get("/api/events/" + search);
  },
  getUser: function (userId) {
    return axios.get("/api/user/" + userId)
  }
};