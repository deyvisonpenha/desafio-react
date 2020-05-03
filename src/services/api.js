import axios from "axios";

//http://localhost:3333

const api = axios.create({
  baseURL: "https://3333-d812621d-7013-44b8-af09-2cebfbf3cb9d.ws-us02.gitpod.io",
});

export default api;
