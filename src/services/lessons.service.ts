// src/services/auth.service.ts

class LessonsService {
  private API_URL: string;

  constructor(topicId: string) {
    this.API_URL = `http://localhost:8080/api/v1/topics/${topicId}/lessons`;
  }

  async getLessons(page: number, pageSize: number) {
    console.log("Fetching topics", localStorage.getItem("access_token"));
    try {
      const response = await fetch(
        `${this.API_URL}?page=${page}&size=${pageSize}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error("Error fetching topics: ", error);
      throw error;
    }
  }
}

export default LessonsService;
