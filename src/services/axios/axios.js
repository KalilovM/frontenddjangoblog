import axios from "axios";

export const Instance = axios.create({
  baseURL: "http://localhost:8000/api/",
});

export const InstanceApi = axios.create({
  baseURL: "http://localhost:8000/api/",
});

Instance.interceptors.request.use((config) => {
  console.log(config);
});

InstanceApi.interceptors.response.use((response) => {
  console.log(response);
});
