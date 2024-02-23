import { Outlet } from "react-router-dom";
import Breadcrumb from "./components/Breadcrumb";
import TheHeader from "./layout/TheHeader";
import TheFooter from "./layout/TheFooter";

function App() {
  return (
    <>
      <>
        <TheHeader />
        <Breadcrumb />
       
          <Outlet />
       
       
        <TheFooter />
      </>
    </>
  );
}

export default App;
