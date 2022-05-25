import axios from "axios";

const Api = axios.create({
  baseURL: "http://207.154.244.140:8000/api",
});

Api.interceptors.request.use((config)=>{
  const token = localStorage.getItem("token")

  console.log("interceptor ishlavoti");

  if(config.url.includes("/user/registration/")){
    return config
  }
  if(config.headers !== undefined){
    config.headers["Authorization"] = `Bearer ${token}`
  }
  return config
})

Api.interceptors.response.use(
  (config) => config,
  (response) => response,
  (error) => {
    console.log("error", error);
    if(error.response.status === 401){
      window.location.href = '/'
    }
  }
)
export default Api;
