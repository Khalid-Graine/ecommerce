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
          <div className="flex flex-row flex-wrap  bg-red-600">
    <div className="flex-grow min-w-[250px] bg-blue-200 border border-blue-400 p-4 m-2 flex" >Content 1</div>
    <div className="flex-grow min-w-[250px] bg-blue-200 border border-blue-400 p-4 m-2">Content 2</div>
    <div className="flex-grow min-w-[250px] bg-blue-200 border border-blue-400 p-4 m-2">Content 3</div>
</div>
       
        <TheFooter />
      </>
    </>
  );
}

export default App;
