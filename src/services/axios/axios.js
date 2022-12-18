import axios from "axios";

export const Instance = axios.create({
  baseURL: "http://localhost:8000/api/",
});

export const InstanceApi = axios.create({
  baseURL: "http://localhost:8000/api/",
});

InstanceApi.interceptors.request.use((config) => {
  const access = localStorage.getItem("access");
  config.headers.Authorization = access ? `Bearer ${access}` : "";
  return config;
}, (error) => {
  return Promise.reject(error);
}
);

InstanceApi.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if (error.response.status === 401) {
    const refresh = localStorage.getItem("refresh");
    return axios.post(`${$HOSTNAME}/auth/refresh/`, {
      refresh: refresh,
    }).then((response) => {
      localStorage.setItem("access", response.data.access);
      error.config.headers["Authorization"] = `Bearer ${response.data.access}`;
      return axios(error.config);
    }).catch((error) => {
      console.log(error);
    });
  }
  return Promise.reject(error);
});

