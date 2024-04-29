import { useState } from "react";

const NotificationModule = () => {
    const [showNotification, setShowNotification] = useState(true);

    const handleNotificationClose = () => {
      setShowNotification(!showNotification);
    };
  return (
  
         <div
          className={`${showNotification ? "bottom-0" : "-bottom-full"} fixed w-full bg-black text-white bg-opacity-80 px-4 py-3 transition-all ease-in-out  duration-1000
          `}
        >
           <div className="flex justify-between">
           <h3 className=" font-bold text-lg">Notification Module</h3>
          <button onClick={handleNotificationClose} className="bg-red-600 size-8">
          <i className="fa-solid fa-xmark"></i>
          </button>
           </div>
          
          <p className="w-11/12">
            This is the sticky Notification module. You can use it for any
            sticky messages such as cookie notices or special promotions, etc.
          </p>
        </div>
    
  )
}

export default NotificationModule