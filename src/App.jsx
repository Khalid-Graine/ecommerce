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
        <main className="bg-red-300 p-2">
          <Outlet /> 
        </main>git
        <div className="h-[1500px] bg-gray-400"></div>
        <TheFooter />
      </>
    </>
  );
}

export default App;
