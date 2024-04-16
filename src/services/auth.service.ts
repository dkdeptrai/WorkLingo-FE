// src/services/auth.service.ts

const API_URL = "http://localhost:8080/api/v1/auth/";
class AuthService {
  async login(username: string, password: string) {
    try {
      const response = await fetch(API_URL + "authenticate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: username, password: password }),
      });
      console.log(response);
      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      if (data) {
        console.log("Login successful", data);
        localStorage.setItem("access_token", JSON.stringify(data.access_token));
        return localStorage.getItem("access_token");
      }
    } catch (error) {
      console.error("Login failed", error);
      throw error;
    }
  }

  async logout() {
    try {
      localStorage.removeItem("access_token");
      return localStorage.getItem("access_token");
    } catch (error) {
      console.error("Logout failed:", error);
      throw error;
    }
  }

  async register(
    firstname: string,
    lastname: string,
    username: string,
    password: string
  ) {
    try {
      const response = await fetch(API_URL + "register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname: firstname,
          lastname: lastname,
          email: username,
          password: password,
          role: "USER",
        }),
      });
      console.log(response);
      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const data = await response.json();
      if (data) {
        console.log("Registration successful", data);
        localStorage.setItem("access_token", JSON.stringify(data.access_token));
        return localStorage.getItem("access_token");
      }
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    }
  }
}

export default new AuthService();
