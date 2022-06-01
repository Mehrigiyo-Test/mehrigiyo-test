import React from "react";
import "./Notifications.scss";
import Title from "../../components/Title/Title";
import NoNotification from "../../images/NoNotification.png";

const Notifications = () => {
  return (
    <div>
      <div className="notificationsWrapper">
        <Title
          title={"Notifications"}
          subtitle={"Bugun bemorlarimizga xizmat qilish uchun ajoyib kun."}
        />
      </div>

      <div className="notifications">
        <img className="notifications__img" src={NoNotification} alt="" />
        <div className="notifications__titles">
          <h3 className="notifications__titles__title">No Notifications!</h3>
          <p className="notifications__titles__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod tempor
          </p>
        </div>
      </div>
    </div>
  );
};
export default Notifications;
