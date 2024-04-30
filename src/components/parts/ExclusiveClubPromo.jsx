import { useEffect } from "react";
import { useState } from "react";

const ExclusiveClubPromo = () => {
  const [email,setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isECPromoActive, setECPromoActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setECPromoActive(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);
  const handlecheck = () => {
    setIsChecked(!isChecked)
  }

  const handleSubmit = (event) => {
     event.preventDefault();
     if(!isChecked) {
        alert('Warning: You must agree to the Privacy Policy!')
        return;
     }
    if(isEmailValid(email)) {
      alert('You have been subscribed to our newsletter.')
      setECPromoActive(false)
    } else {
      alert('E-Mail Address does not appear to be valid!')
    }
  }

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const isEmailValid = (email) => {
  return emailRegex.test(email);
}
  return (
    <>
      {/* div parent */}
      {isECPromoActive && <div className="fixed top-0 flex h-screen w-full items-center justify-center bg-black bg-opacity-80  p-4">
        <div className="w-full  max-w-[800px] overflow-hidden rounded-md">
          {/* div 1 */}
          <div className="grid h-[300px] grid-cols-12 gap-6  overflow-hidden bg-white">
            <div className="hidden   bg-red-700 sm:col-span-5 sm:flex">
              <img src="src/assets/mook.jpg" alt="" />
            </div>
            <div className="col-span-12 bg-white p-2   sm:col-span-7">
              <div className="flex justify-end">
                <i onClick={() => setECPromoActive(false)} className="fa-solid fa-xmark flex size-7 cursor-pointer items-center justify-center rounded-full bg-blue-500 text-sm text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-[#303841]">
                JOIN OUR EXCLUSIVE CLUB
              </h3>
              <p className=" text-[#6d767d]">
                Sign up and Save! Get a $10 gift in your inbox immediately after
                you sign up for our newsletter
              </p>
              <form onSubmit={handleSubmit} className="my-2 w-full">
                <div className="flex border border-gray-300 bg-gray-300">
                  <input
                    type="text"
                    className="flex-grow px-2 outline-none"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                 
                  <button  type="submit" className="flex cursor-pointer items-center justify-center gap-2 bg-blue-600 px-3 py-2 text-white">
                  <i className="fa-regular fa-envelope text-lg"></i>
                    <span> Sign up</span>
                  </button>
                </div>

                <div>
                  <input type="checkbox" checked={isChecked} onChange={() => handlecheck()} />
                  <label className="ml-1 text-[#333333]">
                    I have read and agree to the{" "}
                    <a href="http://" className="text-blue-600">
                      Privacy Policy
                    </a>
                  </label>
                </div>
              </form>
              <SocialMedia />
            </div>
          </div>
          {/* div 2 */}
          <div className="bg-gray-200 px-2 py-1">
            <form action="">
              <input type="checkbox" name="" id="" />
              <label className="ml-1 text-[#333333]">dont show me again</label>
            </form>
          </div>
        </div>
      </div>}
    </>
  );
};

export default ExclusiveClubPromo;

const SocialMedia = () => {
  return (
    <div className="my-2">
      <ul className="flex gap-3 *:flex  *:size-11 *:items-center *:justify-center *:rounded-full *:bg-blue-500 *:text-white *:text-2xl *:cursor-pointer">
        <li>
          <i className="fa-brands fa-facebook-f"></i>
        </li>
        <li>
          <i className="fa-brands fa-x-twitter"></i>
        </li>
        <li>
          <i className="fa-brands fa-pinterest-p"></i>
        </li>
        <li>
          <i className="fa-brands fa-instagram"></i>
        </li>
        <li>
          <i className="fa-brands fa-whatsapp"></i>
        </li>
        <li>
          <i className="fa-brands fa-reddit-alien"></i>
        </li>
      </ul>
      
    </div>
   
  );
};

