import axios from "axios";

const danoneApi = axios.create({
  baseURL: "https://apiazteca.mediaserviceagency.com/api",
});

export default danoneApi;
