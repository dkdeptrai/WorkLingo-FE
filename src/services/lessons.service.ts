// src/services/auth.service.ts
const API_URL = `http://localhost:8080/api/v1/lessons`;

class LessonsService {
  async getFlashcards(lessonId: string) {
    try {
      const response = await fetch(`${API_URL}/${lessonId}/flashcards`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching flashcards: ", error);
      throw error;
    }
  }
  async getTopicOfLesson(lessonId: string) {
    try {
      console.log("token", localStorage.getItem("access_token"));
      const response = await fetch(`${API_URL}/${lessonId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json(); // Await the response.json() method
      return data.topic;
    } catch (error) {
      console.error("Error fetching lesson: ", error);
      throw error;
    }
  }
  async getLesson(lessonId: string) {
    try {
      const response = await fetch(`${API_URL}/${lessonId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching lesson: ", error);
      throw error;
    }
  }
  async createNewLesson(topicId, lessonName, privacy, flashcards) {
    const flashcardsArray = flashcards.map((flashcard) => ({
      question: flashcard.question,
      answer: flashcard.answer,
    }));

    try {
      const user = JSON.parse(localStorage.getItem("user")!);
      const requestBody = {
        topicId: topicId,
        title: lessonName,
        visibility: privacy.toUpperCase(),
        flashcards: flashcardsArray,
        authorId: user.id,
      };

      const response = await fetch(`${API_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error("Failed to create lesson");
      }

      const data = await response.json();

      return data;
    } catch (error) {
      console.log("Error creating lesson:", error);
      throw error;
    }
  }
  async getLessonsOfUser(userId: string) {
    try {
      const response = await fetch(`${API_URL}`, {
        headers: {
          method: "GET",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching lessons: ", error);
      throw error;
    }
  }
  async getTopLessons() {
    try {
      const response = await fetch(`${API_URL}/top-rating?page=0&size=5`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching top lessons: ", error);
      throw error;
    }
  }
}

export default new LessonsService();
