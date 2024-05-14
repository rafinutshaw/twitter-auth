import { BASE_API_URL } from "../constants";
import httpService from "../utils";

export class AppService {
  static checkAuth() {
    return httpService.get(BASE_API_URL + "/profile", {
      withCredentials: true,
    });
  }
}
