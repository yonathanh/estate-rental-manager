// auth/auth-service.js

import axios from "axios";

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: "http://localhost:5000/api",
      withCredentials: true
    });
    this.service = service;
  }

  signup = userObject => {
    return this.service
      .post("/signup", userObject)
      .then(response => response.data);
  };

  edit = userObject => {
    console.log("userObject", userObject);
    return this.service
      .put(`/profile/update/${userObject._id}`, userObject)
      .then(response => response.data);
  };

  login = (username, password) => {
    return this.service
      .post("/login", { username, password })
      .then(response => response.data);
  };

  logout = () => {
    return this.service.post("/logout", {}).then(response => response.data);
  };

  loggedin = () => {
    return this.service.get("/loggedin").then(response => response.data);
  };
}

export default AuthService;
