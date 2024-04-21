const API_URL = "http://localhost:8080/api/v1/users";

class UserService {
  async getUser(userId: string) {
    try {
      const response = await fetch(`${API_URL}/${userId}`, {
        method: "GET",
        headers: {
          contentType: "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {}
  }

  async updateAvatar(userId: string, avatar: File) {
    try {
      const formData = new FormData();
      formData.append("avatarFile", avatar);

      const response = await fetch(`${API_URL}/${userId}/avatar`, {
        method: "PUT",
        headers: {
          // Do not set Content-Type here for FormData
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: formData,
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to update avatar", error);
    }
  }
}

export default new UserService();
