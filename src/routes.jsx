import ControlPanel from "./pages/ControlPanel/ControlPanel";
import Orders from "./pages/Orders/Orders";
import Consultation from "./pages/Consultation/Consultation";
import DeliveryAddress from "./pages/DeliveryAddress/DeliveryAddress";
import Notifications from "./pages/Notifications/Notifications";
import PaymentMethods from "./pages/PaymentMethods/PaymentMethods";
import Setting from "./pages/Setting/Setting";

const routes = [
  { path: `/`, element: <ControlPanel /> },
  { path: `/admin/control-panel`, element: <ControlPanel /> },
  { path: `/admin/orders`, element: <Orders /> },
  { path: `/admin/consultation`, element: <Consultation /> },
  { path: `/admin/delivery-address`, element: <DeliveryAddress /> },
  { path: `/admin/notifications`, element: <Notifications /> },
  { path: `/admin/payment-methods`, element: <PaymentMethods /> },
  { path: `/admin/setting`, element: <Setting /> },
];
export default routes;
