import axios from "axios";

const API_URL = "https://minhnhat27.id.vn/api";

const getPriceBots = async () => {
  try {
    const res = await axios.get(API_URL + "/priceBot/getAll");
    return res.data; // Assuming res.data is an array of objects similar to courses
  } catch (error) {
    throw error;
  }
};

const getLogHistory = async (id) => {
  try {
    const res = await axios.get(API_URL + `/logHistory/getLogHistoryAll/${id}`);
    return res.data; // Assuming res.data is an array of objects similar to courses
  } catch (error) {
    throw error;
  }
};

const userService = {
  getPriceBots,
  getLogHistory,
};

export default userService;
