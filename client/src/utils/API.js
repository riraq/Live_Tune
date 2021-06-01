import axios from "axios";

const getEvents = (query) => {
  return axios.get("/api/events");
}
export default getEvents