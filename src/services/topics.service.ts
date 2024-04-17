// src/services/auth.service.ts

import { errors } from "web3";

const API_URL = "http://localhost:8080/api/v1/topics";
class TopicsService {
  async getTopics(page: number, pageSize: number) {
    console.log("Fetching topics", localStorage.getItem("access_token"));
    try {
      const response = await fetch(`${API_URL}?page=${page}&size=${pageSize}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error("Error fetching topics: ", error);
      throw error;
    }
  }

  async getTopic(topicId: string) {
    try {
      const response = await fetch(`${API_URL}/${topicId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      return response.json();
    } catch (error) {
      console.error("Error fetching topic: ", error);
      throw error;
    }
  }
}

export default new TopicsService();
