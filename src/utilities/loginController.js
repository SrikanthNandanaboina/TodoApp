import axios from "axios";

class LoginController {
  constructor() {
    this.client = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
    });
  }

  login = async (data) => {
    const response = await this.client.post(`/login`, data);
    return response;
  };
}

export default new LoginController(process.env.REACT_APP_BASE_URL);
