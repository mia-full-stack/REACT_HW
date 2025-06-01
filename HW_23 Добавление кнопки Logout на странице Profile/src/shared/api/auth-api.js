import axios from "axios";

import requestDecorator from "./requestDecorator";

const backendInstance = axios.create({
    baseURL: "http://localhost:5000"
})

export const registerUserApi = requestDecorator(async payload => {
    const { data } = await backendInstance.post("/api/auth/register", payload);
    return data;
});

export const loginUserApi = requestDecorator(async payload => {
    const { data } = await backendInstance.post("/api/auth/login", payload);
    return data;
});