import { useState } from "react";

const NotificationModule = () => {
    const [showNotification, setShowNotification] = useState(true);

    const handleNotificationClose = () => {
      setShowNotification(!showNotification);
    };
  return (
  
         <div
          
          className={`Notification-Module fixed w-full bg-red-300 p-3 transition-all ease-in-out  duration-1000
          ${showNotification ? "bottom-0" : "-bottom-full"}`}
        >
          <button onClick={handleNotificationClose}>X</button>
          <p>Notification Module</p>
          <p>
            This is the sticky Notification module. You can use it for any
            sticky messages such as cookie notices or special promotions, etc.
          </p>
        </div>
    
  )
}

export default NotificationModule