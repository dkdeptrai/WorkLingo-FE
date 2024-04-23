const API_URL = "http://localhost:8080/api/v1/users";

class UserService {
  async getUser(userId: string) {
    try {
      const response = await fetch(`${API_URL}/${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to get user", error);
      throw error;
    }
  }

  async updateAvatar(userId: string, avatar: File) {
    try {
      const formData = new FormData();
      formData.append("avatarFile", avatar);

      const response = await fetch(`${API_URL}/${userId}/avatar`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: formData,
      });
      const data = await response.json();
      console.log("Avatar updated successfully", data);
      return data;
    } catch (error) {
      console.error("Failed to update avatar", error);
    }
  }
  async getFavoriteLessons(userId: string, page: number, size: number) {
    try {
      const response = await fetch(
        `${API_URL}/${userId}/favorites?page${page}&size=${size}`,
        {
          method: "GET",
          headers: {
            contentType: "application/json",
          },
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to get favorite lessons", error);
      throw error;
    }
  }
  async addFavoriteLesson(userId: number, lessonId: number) {
    try {
      const response = await fetch(
        `${API_URL}/${userId}/favorites?lessonId=${lessonId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
          body: JSON.stringify({
            userId: userId,
            lessonId: lessonId,
          }),
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to add favorite lesson", error);
      throw error;
    }
  }
  async deleteFavoriteLesson(userId: number, lessonId: number) {
    try {
      const response = await fetch(
        `${API_URL}/${userId}/favorites?lessonId=${lessonId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
          body: JSON.stringify({
            userId: userId,
            lessonId: lessonId,
          }),
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to delete favorite lesson", error);
      throw error;
    }
  }

  async getLessonsByUser(userId: number) {
    try {
      const response = await fetch(`${API_URL}/${userId}/lessons`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      const data = await response.json();

      return data;
    } catch (error) {
      console.error("Failed to get lessons by user", error);
      throw error;
    }
  }

  async updateProfile(userId: number, profile: any) {
    try {
      const response = await fetch(`${API_URL}/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: profile,
      });
      console.log("response", response);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to update profile", error);
      throw error;
    }
  }

  async changePassword(userId: number, password: string, newPassword: string) {
    try {
      const body = {
        currentPassword: password,
        newPassword: newPassword,
        confirmationPassword: newPassword,
      };
      const response = await fetch(`${API_URL}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      if (!response.ok) {
        console.log(response.statusText);
        throw new Error("Failed to change password");
      }
      return data;
    } catch (error) {
      console.error("Failed to change password", error);
      throw error;
    }
  }
}

export default new UserService();
