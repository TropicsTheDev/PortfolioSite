import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000",
});

API.interceptors.response.use(
  (response) => (response ? response.data : {}),
  (error) => {
    console.error(error);
  }
);

export default API;
