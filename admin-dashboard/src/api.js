import axios from "axios";

const API_URL = "http://26.120.17.211:5000/api"; // 🔗 แก้เป็น URL ของ backend จริงๆ

export const fetchBookings = async () => {
  try {
    const response = await axios.get(`${API_URL}/bookings`);
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching bookings:", error);
    throw error;
  }
};

export const fetchUserData = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching user data:", error);
    throw error;
  }
};
