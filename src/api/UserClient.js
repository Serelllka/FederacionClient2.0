import axios from "axios";
import { ApiException } from "./ApiException";

export class UserClient {
    constructor(url) {
        this.client = axios.create({
            baseURL: url
        });
    }

    async login(userame, password) {
        return this.client.request({
            method: "POST",
            url: "/auth/sign-in",
            headers: {
                Accept: "text/plain",
            },
            data: {
                username: userame,
                password: password
            }
        }).catch(error => {
            if (error.isAxiosError)
                throw new ApiException(error.response.data, error.status, error);
            throw error;
        }).then(result => {
            if (result.status === 200) {
                return result.data.token;
            }
        })
    }

    async getAllUsersAsync() {
        return this.client.request({
            method: "GET",
            url: "/users/",
            headers: {
                Accept: "text/plain",
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