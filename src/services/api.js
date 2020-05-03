import axios from "axios";

// http://localhost:3333
// https://3333-d812621d-7013-44b8-af09-2cebfbf3cb9d.ws-us02.gitpod.io

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export default api;
