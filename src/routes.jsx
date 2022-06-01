import ControlPanel from "./pages/Admin/ControlPanel/ControlPanel"
import Orders from "./pages/Admin/Orders/Orders";
import Consultation from "./pages/Admin/Consultation/Consultation";
import DeliveryAddress from "./pages/Admin/DeliveryAddress/DeliveryAddress";
import Notifications from "./pages/Admin/Notifications/Notifications";
import PaymentMethods from "./pages/Admin/PaymentMethods/PaymentMethods";
import Setting from "./pages/Admin/Setting/Setting";

const routes = [
  { path: `/admin/control-panel`, element: <ControlPanel /> },
  { path: `/admin/orders`, element: <Orders /> },
  { path: `/admin/consultation`, element: <Consultation /> },
  { path: `/admin/delivery-address`, element: <DeliveryAddress /> },
  { path: `/admin/notifications`, element: <Notifications /> },
  { path: `/admin/payment-methods`, element: <PaymentMethods /> },
  { path: `/admin/setting`, element: <Setting /> },
];
export default routes;
