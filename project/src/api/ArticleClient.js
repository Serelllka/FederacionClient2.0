import axios from "axios";
import { ApiException } from "./ApiException";

export class ArticleClient {
    constructor(url) {
        this.client = axios.create({
            baseURL: url
        });
    }

    async getAllArticlesAsync(token) {
        return this.client.request({
            method: "GET",
            // url: "/api/articles/",
            url: "https://63a0aca7e3113e5a5c446025.mockapi.io/v1/Articles",
            headers: {
                Accept: "text/plain",
                Authorization: `Bearer ${token}`
            },
        }).catch(error => {
            throw error;
        }).then(result => {
            if (result.status === 200) {
                return result;
                // return result.data;
            }
        })
    }
}