import axios from "axios";
import Cookies from "js-cookie";

// const API_URL = 'https://localhost:7043/api/auth'
const API_URL = "https://minhnhat27.id.vn/api/auth";

const login = async (data) =>
  await axios.post(API_URL + "/login", data).then((res) => {
    const exp = 1 * 24 * 60 * 60 * 1000;
    const in1Days = new Date(new Date().getTime() + exp);

    Cookies.set("user_data", JSON.stringify(res.data), { expires: in1Days });
    Cookies.set("access_token", res.data?.access_token, {
      expires: 5 * 60 * 1000,
    });
    return res;
  });

const getCurrentUser = () => {
  const user = Cookies.get("user_data");
  return user ? JSON.parse(user) : user;
};

const setUserToken = (access_token) => {
  Cookies.set("access_token", access_token, { expires: 5 * 60 * 1000 });
};

const logout = () => {
  Cookies.remove("user_data");
  Cookies.remove("access_token");
};

const register = async (data) => await axios.post(API_URL + "/register", data);

const sendPassword = async (email) =>
  await axios.post(API_URL + "/send-code", email);

const sendRegisterCode = async (email) =>
  await axios.post(API_URL + "/send-register-code", email);

const confirmCode = async (data) =>
  await axios.post(API_URL + "/confirm-code", data);

const resetPassword = async (data) =>
  await axios.post(API_URL + "/reset-password", data);

const refreshToken = async (data) =>
  await axios.post(API_URL + "/refresh-token", data);

const authService = {
  login,
  register,
  logout,
  getCurrentUser,
  sendPassword,
  confirmCode,
  resetPassword,
  refreshToken,
  setUserToken,
  sendRegisterCode,
};
export default authService;
