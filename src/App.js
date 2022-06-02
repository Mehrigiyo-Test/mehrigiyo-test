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

function App() {
  const dispatch = useDispatch();
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
  }, []);
  const { changeRouterData } = useSelector((state) => state.changeRouter);

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
