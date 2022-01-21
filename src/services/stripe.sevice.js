import apiConfigs from "../../next.config.js";

export default {
    createSession(body) {
        console.log("test");
        return fetch(`${apiConfigs.env.API_URL}api/v1/checkout/`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(body),
        }).then((res) => res.json())
    }
}