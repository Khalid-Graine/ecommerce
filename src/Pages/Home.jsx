const Home = () => {
  return (
    <>
      <div className="flex  ">
          <div className="w-[260px] bg-blue-100" >left side</div>
          <div className=" flex-grow  bg-red-100" >centent</div>
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
            </div>
          </div>
      </div>
      
    </>
  );
};

export default Home;
