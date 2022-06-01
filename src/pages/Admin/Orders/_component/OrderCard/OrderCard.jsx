import styles from "./OrderCard.module.scss";
import Marker from "../../../../images/Marker.png";

import { user } from "../../../../constants/user";
import { ReactComponent as Car } from "../../../../icons/Car.svg";
import { ReactComponent as Shop } from "../../../../icons/Shop.svg";

const OrderCard = ({ children, background }) => {
  return (
    <>
      {user != null && (
        <section
          style={{ background: background }}
          className={styles.container}
        >
          <div className={styles.orderLeftBox}>{children}</div>
          <div className={styles.orderRightBox}>
            <div className={styles.mapBox}>
              <div className={styles.img}>
                <img src={user.img} alt="" />
              </div>

              <div className={styles.marker}>
                <img src={Marker} alt="" />
              </div>
              <div className={styles.car}>
                <Car />
              </div>
              <span className={styles.shop}>
                <Shop />
              </span>
            </div>
            <div className={styles.titleBox}>
              <div className={styles.textLeft}>
                <p>Taxminiy kelish</p>
                <h5>20:10 - 20:30</h5>
              </div>
              <div className={styles.textRight}>
                <p>Yetkazib beruvchi</p>
                <h5>Bahrom</h5>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default OrderCard;
