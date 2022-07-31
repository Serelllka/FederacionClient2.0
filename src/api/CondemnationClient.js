import axios from "axios";
import { ApiException } from "./ApiException";

export class CondemnationClient {
    constructor(url) {
        this.client = axios.create({
            baseURL: url
        });
    }

    async createAsync(token, convictedId, articleId, description, cost) {
        return this.client.request({
            method: "POST",
            url: "/api/condem/",
            headers: {
                Accept: "text/plain",
                Authorization: `Bearer ${token}`
            },
            data: {
                convicted_id: convictedId,
                article_id: articleId,
                description: description,
                cost: cost
            }
        }).catch(error => {
            throw error;
        }).then(result => {
            if (result.status === 200) {
                return result.data;
            }
        })
    }

    async getAllArticlesAsync(token) {
        return this.client.request({
            method: "GET",
            url: "/api/articles/",
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