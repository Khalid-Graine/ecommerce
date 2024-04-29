import { Outlet } from "react-router-dom";
import Breadcrumb from "./components/parts/header/Breadcrumb";
import TheHeader from "./layout/TheHeader";
import TheFooter from "./layout/TheFooter";
import NotificationModule from "./components/NotificationModule";

function App() {
 
  return (
    <>
      <div>
        <TheHeader />
        <Breadcrumb />
        <Outlet />

        <TheFooter />
        <NotificationModule />
       
      </div>
    </>
  );
}

export default App;
