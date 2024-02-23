const Home = () => {
  return (
    <>
      <div className="flex">
        {/* left side */}
          <div className="w-[260px]  bg-yellow-300 py-2 px-4 flex flex-col" >
            <div>
              <p className="title">title</p>
              <ul>
                <li>
                  Product 1
                </li>
                <li>
                  Product 2
                </li>
                <li>
                  Product 3
                </li>
                <li>
                  Product 4
                </li>
              </ul>
            </div>
            <div className="line"></div>
          </div>
          {/* center */}
          <div className=" flex-grow  bg-red-100 border border-black border-y-0 px-4 pt-4" >
            <div className="grid grid-cols-6 gap-4 bg-purple-500 ">
              <div className=" col-span-6 w-full bg-green-500 h-[300px]"></div>
              <div className="col-span-3 w-full bg-blue-400 h-[100px]"></div>
              <div className="col-span-3 w-full bg-blue-400 h-[100px]"></div>
              <div></div>
            </div>
           
           
           
          </div>
          {/*  */}
          <div className="w-[260px] bg-yellow-300 py-2 px-4 flex flex-col ">
            <div>
              <h4 className="title">top categories</h4>
              
                <ul className="grid grid-cols-3">
                  <li>test</li>
                  <li>test</li>
                  <li>test</li>
                  <li>test</li>
                  <li>test</li>
                  <li>test</li>
                  <li>test</li>
                  <li>test</li>
                  <li>test</li>
                </ul>
              
            </div>
            <div className="line"></div>
            <div>
            <h4 className="title">SIGN UP AND SAVE</h4>
            <p>Receive a $10 voucher in your inbox immediately after you sign up for our newsletter.</p>
            <form action="">
              <input type="text" />
              <button>sign</button>
              <input type="checkbox" name="" id="" />
            </form>
            </div>
            <div className="line"></div>
            <div>
            <h4 className="title">GALLERY MODULE</h4>
            <ul className="grid grid-cols-3 ">
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
            </div>
          </div>
      </div>
      <div className="flex justify-center gap-2 py-2 bg-gray-400">
        <span>X</span>
        <p>FREE FAST SHIPPING ON ORDERS ABOVE $100</p>
      </div>
      
    </>
  );
};

export default Home;
