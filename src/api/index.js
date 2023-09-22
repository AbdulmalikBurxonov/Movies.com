import React from "react";
import axios from "axios";


export const api = axios.create({
    baseURL:"http://localhost:3004/",
    timeout: 30 * 1000,
    headers:{
        "Content-Type": "application/json",
        // Authorization: `Bearer ${this.getToken()}`,
    },
})

export const ContextApi = React.createContext(api)