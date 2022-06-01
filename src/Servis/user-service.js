import { useDispatch } from "react-redux";
import { addCount } from "../redux/actions";
import requestApi from "./api/request";
import { putCurrentUser, setCurrentUser } from "./auth-service";

export const getUserMe = () => {
  requestApi.get("/user/me/").then((response) => {
    if (response.status === 200) {
      let user = response.data.data;
      setCurrentUser(user);
      console.log(user);
      return user;
    }
  });
  return null;
};

export const putUserMe =(data)=>{
  requestApi.put("/user/me/", data).then((response)=>{
    if(response.status === 200){
      let user = response.data.data;
      putCurrentUser(user)
    }
  })
  return null;
}
