import axios from "axios";

const Api = axios.create({
    baseURL: "http://207.154.244.140:8000/api",
  });

  export default Api