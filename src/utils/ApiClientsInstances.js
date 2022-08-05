import { UserClient } from "../api/UserClient";
import { CondemnationClient } from "../api/CondemnationClient";
import { ArticleClient } from "../api/ArticleClient";
import { UserInfoClient } from "../api/UserInfoClient";

const config = {
    baseUrl: 'http://localhost:8000'
}

export const UserApiClient = new UserClient(config.baseUrl);
export const CondemnationApiClient = new CondemnationClient(config.baseUrl);
export const ArticleApiClient = new ArticleClient(config.baseUrl);
export const UserInfoApiClient = new UserInfoClient(config.baseUrl);