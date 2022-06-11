import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "../../../pages/User/AboutUs/AboutUs";
import Basket from "../../../pages/User/Basket/Basket";
import FavoriteDoctors from "../../../pages/User/FavoriteDoctors/FavoriteDoctors";
import FavoriteDrug from "../../../pages/User/FavoriteDrug/FavoriteDrug";
import Help from "../../../pages/User/Help/Help";
import Home from "../../../pages/User/Home/Home";
import News from "../../../pages/User/News/News";
import BigCompListDoctor from "../../../pages/User/OnlineDoctor/List/BigCompListDoctor";
import OnlineDoctor from "../../../pages/User/OnlineDoctor/OnlineDoctor";
import Products from "../../../pages/User/Products/Products";
import SortGoods from "../../../pages/User/SortGoods/SortGoods";
import LayoutUser from "../Layout/Layout";
import BeingHealthy from "../NewPageComp/BeingHealthy/BeingHealthy";
import MexrigiyoPresentation from "../NewPageComp/MexrigiyoPresentation/MexrigiyoPresentation";
import QuestionsAsked from "../../../pages/User/ManyQuestionsAsked/QuestionsAsked";

const UserRouter = () => {
  return (
    <LayoutUser>
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
        <Route path="/products/sortGoods" element={<SortGoods />} />
        <Route path="/help/ManyQuestions" element={<QuestionsAsked />} />
      </Routes>
    </LayoutUser>
  );
};

export default UserRouter;
