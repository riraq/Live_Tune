import axios from "axios";

// eslint-disable-next-line
export default {
getEvents: function() {
  return axios.get("/api/events");
}
};