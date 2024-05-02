import { Outlet } from "react-router-dom";
import Breadcrumb from "./components/parts/header/Breadcrumb";
import TheHeader from "./layout/TheHeader";
import TheFooter from "./layout/TheFooter";
import NotificationModule from "./components/NotificationModule";
import ExclusiveClubPromo from "./components/parts/ExclusiveClubPromo";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <div>
        <TheHeader />
        <Breadcrumb />
        <Outlet />
        <ExclusiveClubPromo />
        <TheFooter />
        <NotificationModule />
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;
