import { Outlet } from "react-router-dom";
import Breadcrumb from "./components/parts/header/Breadcrumb";
import TheHeader from "./layout/TheHeader";
import TheFooter from "./layout/TheFooter";

function App() {
  return (
    <>
      <>
        <TheHeader />
        <Breadcrumb />

        <Outlet />
        <div className="flex flex-row flex-wrap  bg-red-600">
          <div className="m-2 flex min-w-[250px] flex-grow border border-blue-400 bg-blue-200 p-4">
            Content 1
          </div>
          <div className="m-2 min-w-[250px] flex-grow border border-blue-400 bg-blue-200 p-4">
            Content 2
          </div>
          <div className="m-2 min-w-[250px] flex-grow border border-blue-400 bg-blue-200 p-4">
            Content 3
          </div>
        </div>

        <TheFooter />
      </>
    </>
  );
}

export default App;
