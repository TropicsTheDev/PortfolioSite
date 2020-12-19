import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:4000",
});

API.interceptors.response.use(
  (response) => (response ? response.data : {}),
  (error) => {
    console.error(error);
  }
);

export default API;
