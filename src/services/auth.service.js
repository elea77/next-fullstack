import apiConfigs from "../../next.config.js";

export default {
    register(user) {
        return fetch(`${apiConfigs.env.API_URL}users`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          }).then((res) => res.json())
    },
    login(user) {
        return fetch(`${apiConfigs.env.API_URL}login`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          }).then((res) => res.json())
    },
    getUser(token) {
        return fetch(`${apiConfigs.env.API_URL}users/get-user`, {
            headers: {
                "authorization":token
            }
        })
        .then(res => res.json())
    }
}