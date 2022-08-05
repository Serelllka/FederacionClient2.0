import axios from "axios";
import { ApiException } from "./ApiException";

export class UserInfoClient {
    constructor(url) {
        this.client = axios.create({
            baseURL: url
        });
    }

    async getUserInfoAsync(token) {
        return this.client.request({
            method: "GET",
            url: "/api/user-info/",
            headers: {
                Accept: "text/plain",
                Authorization: `Bearer ${token}`
            },
        }).catch(error => {
            throw error;
        }).then(result => {
            if (result.status === 200) {
                return result.data;
            }
        })
    }
}