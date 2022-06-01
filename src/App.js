import "./App.css";
import Navigate from "./components/User/nav1/navigate";
import Footer from "./components/User/footer/footer";
import Home from "./pages/User/Home/Home";
import OnlineDoctor from "./pages/User/OnlineDoctor/OnlineDoctor";
import Products from "./pages/User/Products/Products";
import AboutUs from "./pages/User/AboutUs/AboutUs";
import News from "./pages/User/News/News";
import Help from "./pages/User/Help/Help";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigate2 from "./components/User/nav2/navigate2";
import GlobalCallSms from "./components/User/Global/GlobalCallSms";
import MexrigiyoPresentation from "./components/User/NewPageComp/MexrigiyoPresentation/MexrigiyoPresentation";
import BeingHealthy from "./components/User/NewPageComp/BeingHealthy/BeingHealthy";
import Basket from "./pages/User/Basket/Basket";
import FavoriteDoctors from "./pages/User/FavoriteDoctors/FavoriteDoctors";
import FavoriteDrug from "./pages/User/FavoriteDrug/FavoriteDrug";
import BigCompListDoctor from "./pages/User/OnlineDoctor/List/BigCompListDoctor";
import { useEffect } from "react";
import Api from "./api/requestApi";
import { actionGetNews } from "./store/getNews/action";
import { useDispatch, useSelector } from "react-redux";
import { actionDoctorType } from "./store/getDoctorType/action";
import { actionDoctors } from "./store/getDoctors/action";
import { actionGetProductsTypes } from "./store/getProductsTypes/action";
import { actionGetProduct } from "./store/getProducts/action";

function App() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.getNews);
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

  return (
    <>
      <Router>
        <Navigate />
        <Navigate2 />
        <GlobalCallSms />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/onlineDoctor" element={<OnlineDoctor />} />
          <Route path="/products" element={<Products />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/news" element={<News />} />
          <Route path="/help" element={<Help />} />
          <Route
            path="/news/MexrigiyoPresentation"
            element={<MexrigiyoPresentation />}
          />
          <Route path="/news/BeingHealthy" element={<BeingHealthy />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/favoriteDoctors" element={<FavoriteDoctors />} />
          <Route path="/favoriteDrug" element={<FavoriteDrug />} />
          <Route
            path="/OnlineDoctor/BigCompListDoctor"
            element={<BigCompListDoctor />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
