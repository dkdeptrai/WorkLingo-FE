// src/services/auth.service.ts

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
      return await response.json();
    } catch (error) {
      console.error("Error fetching topic: ", error);
      throw error;
    }
  }

  async getLessonsInTopic(topicId: string, page: number, pageSize: number) {
    try {
      const response = await fetch(
        `${API_URL}/${topicId}/lessons?page=${page}&size=${pageSize}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      const data = await response.json();
      const lessons = data.results.filter(
        (lesson) => lesson.privacy !== "PRIVATE"
      );
      data.results = lessons;
      return data;
    } catch (error) {
      console.error("Error fetching lessons in topic: ", error);
      throw error;
    }
  }

  async searchByTitle(query: string, page: number, pageSize: number) {
    try {
      const response = await fetch(
        `${API_URL}/search?query=${query}&page=${page}&size=${pageSize}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      const data = await response.json();
      console.log("Search results: ", data);
      return data;
    } catch (error) {
      console.error("Error searching for topics: ", error);
      throw error;
    }
  }
}

export default new TopicsService();
