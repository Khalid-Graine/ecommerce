const ExclusiveClubPromo = () => {
  return (
    <>
      {/* div parent */}
      <div className="fixed top-0 flex h-screen w-full items-center justify-center bg-yellow-300  p-4">
        <div className="w-full  max-w-[800px] rounded-sm border">
          {/* div 1 */}
          <div className="grid h-[250px] grid-cols-12 overflow-hidden">
            <div className="hidden border border-red-500  bg-red-700 sm:col-span-4 sm:flex">
              <img src="src/assets/mook.jpg" alt="" />
            </div>
            <div className="col-span-12 bg-white p-2 sm:col-span-8">
              <div className="flex justify-end">
                <i className="fa-solid fa-xmark flex size-7 cursor-pointer items-center justify-center rounded-full bg-blue-500 text-sm text-white"></i>
              </div>
              <h3 className="font-semibold text-lg text-[#303841]">JOIN OUR EXCLUSIVE CLUB</h3>
              <p className="text-gray-400">
                Sign up and Save! Get a $10 gift in your inbox immediately after
                you sign up for our newsletter
              </p>
              <form className="w-full my-2">
                <div className="bg-gray-300 flex border">
                  <input type="email" className="flex-grow px-2 outline-none" placeholder="Your Email" />
                  <div className="px-3 py-2 flex justify-center items-center gap-2 bg-blue-600 text-white cursor-pointer">
                  <i className="fa-regular fa-envelope text-lg"></i>
                   <span> Sign up</span>
                    </div>
                </div>

                <div>
                  <input type="checkbox" name="" id="" />
                  <label className="ml-1">I have read and agree to the <a href="http://" className="text-blue-600">Privacy Policy</a>
                  </label>
                </div>
              </form>
            </div>
          </div>
          {/* div 2 */}
          <div className="bg-gray-400 px-2">
            <form action="">
              <input type="checkbox" name="" id="" />
              <label className="ml-1">dont show me again</label>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExclusiveClubPromo;
