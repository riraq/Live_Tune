import axios from "axios";

class API {
    axios;

    constructor() {
        this.axios = axios.create();
    }

    /**
     * @param {String} name 
     * @param {String} value 
     */
    setHeader(name, value) {
        if (value)
            this.axios.defaults.headers.common[name] = value;
        else
            delete this.axios.defaults.headers.common[name];
    }

    /**
     * @param {object} userData 
     * @param {String} userData.email
     * @param {String} userData.username
     * @param {String} userData.password
     * 
     * @returns {Promise}
     */
    register(userData) {
        return this.axios.post("/authentication/register", userData);
    }

    /**
     * @param {object} userData 
     * @param {String} userData.email
     * @param {String} userData.password
     * 
     * @returns {Promise}
     */
    login(userData) {
        return this.axios.post("/authentication/login", userData);
    }

    authenticated() {
        return this.axios.post("/authentication/authenticated");
    }

    getEvents(search) {
        return this.axios.get("/api/events/"  + search);
    }

    getUser() {
        return this.axios.get("/api/user/")
    }

    getEvent(id) {
        return this.axios.get("/api/event/" + id);
    }

    getLocation(bio) {
        return this.axios.post("/api/aboutme/", bio);
    }

    saveEvent(eventDetails) {
        return this.axios.post("/api/user/", eventDetails)
    }

}

export default new API();