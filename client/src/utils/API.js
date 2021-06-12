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
     * @param {String} userData.password
     * 
     * @returns {Promise}
     */
    register(userData) {
        return this.axios.post("/api/register", userData);
    }


    /**
     * @param {object} userData 
     * @param {String} userData.email
     * @param {String} userData.password
     * 
     * @returns {Promise}
     */
    login(userData) {
        return this.axios.post("/api/login", userData);
    }

    authenticated() {
        return this.axios.post("/api/authenticated");
    }

    getEvents(search) {
        return this.axios.get("/api/events/" + search);
    }

    getUser(email) {
        return this.axios.get("/api/user/" + email)
    }

    getEvent(id) {
        return this.axios.get("/api/event/" + id);
    }

    saveEvent(eventDetails) {
        return this.axios.post("/api/user/", eventDetails).then(result => result.data)
    }

}

export default new API();