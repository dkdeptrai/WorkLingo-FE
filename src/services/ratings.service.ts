import { useAuth } from "../contexts/AuthContext";

// src/services/auth.service.ts
const API_URL = `http://localhost:8080/api/v1/ratings`;

class RatingsService {
  async addRating(lessonId: number, rating: string, userId: number) {
    try {
      const response = await fetch(`${API_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify({
          userId: userId,
          lessonId: lessonId,
          ratingType: rating,
        }),
      });
      const data = await response.json();
      console.log("data", data);
      return data;
    } catch (error) {
      console.error("Error adding rating: ", error);
      throw error;
    }
  }
  async checkRating(lessonId: number, userId: number) {
    try {
      console.log(
        "url",
        `http://localhost:8080/api/v1/users/${userId}/lessons/${lessonId}/rating`
      );
      const response = await fetch(
        `http://localhost:8080/api/v1/users/${userId}/lessons/${lessonId}/rating`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      if (response.status === 404) {
        return null;
      }
      const data = await response.json();

      console.log("data", data);
      return data.ratingType;
    } catch (error) {
      console.error("Error fetching rating: ", error);
      throw error;
    }
  }
  async deleteRating(lessonId: number, userId: number) {
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/users/${userId}/lessons/${lessonId}/rating`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      const data = await response.json();
      console.log("data", data);
      return data;
    } catch (error) {
      console.error("Error deleting rating: ", error);
      throw error;
    }
  }
}

export default new RatingsService();
