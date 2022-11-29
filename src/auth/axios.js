import axios from "axios";

const BASE_URL = "http://localhost:8000/api/";

export const Instance = axios.create({
  baseURL: BASE_URL,
});

export const InstanceApi = axios.create({
  baseURL: BASE_URL,
});

InstanceApi.interceptors.request.use((config) => {
  access = localStorage.getItem("access");
  console.log("catching access");
  config.headers = {
    authorization: `Bearer ${access}`,
  };
  return config;
});

InstanceApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error, "error");
  }
);
