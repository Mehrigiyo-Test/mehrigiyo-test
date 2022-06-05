import "./App.css";
import { useEffect } from "react";
import { actionGetNews } from "./store/getNews/action";
import { useDispatch, useSelector } from "react-redux";
import { actionDoctorType } from "./store/getDoctorType/action";
import { actionDoctors } from "./store/getDoctors/action";
import { actionGetProductsTypes } from "./store/getProductsTypes/action";
import { actionGetProduct } from "./store/getProducts/action";
import UserRouter from "./components/User/UserRouter/UserRouter";
import AdminRouter from "./components/Admin/AdminRouter/AdminRouter";
import Api from "./Servis/api/requestNotToken";
import { useLocation } from "react-router-dom";
import { actionChangeRouter } from "./store/changeRouter/action";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { data } = useSelector((state) => state.getNews);
  console.log(data, "bu news data");
  useEffect(() => {
    Api.get("/news/").then((respons) =>
      dispatch(actionGetNews(respons?.data?.data))
    );
    Api.get("/specialist/types/").then((res) =>
      dispatch(actionDoctorType(res?.data?.data))
    );
    Api.get("/shop/medicines/").then((res) =>
      dispatch(actionGetProduct(res?.data?.data))
    );
    Api.get("/shop/types/").then((respon) =>
      dispatch(actionGetProductsTypes(respon?.data?.data))
    );
    Api.get("/specialist/doctors/").then((res) =>
      dispatch(actionDoctors(res?.data?.data))
    );
    adminRefresh()
  }, []);
  const { changeRouterData } = useSelector((state) => state.changeRouter);
  
  const adminRefresh = () => {
    if (location.pathname.includes("/admin")) {
      return dispatch(actionChangeRouter("admin"));
    } else {
      dispatch(actionChangeRouter("user"));
    }
  };

  return (
    <>
      {changeRouterData === "user" ? (
        <UserRouter />
      ) : changeRouterData === "admin" ? (
        <AdminRouter />
      ) : null}
    </>
  );
}

export default App;
