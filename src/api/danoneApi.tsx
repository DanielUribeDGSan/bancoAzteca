import axios from "axios";

const danoneApi = axios.create({
  baseURL: "https://apiazteca.capitaldevs.com/api",
});

export default danoneApi;
