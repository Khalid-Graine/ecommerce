const Home = () => {
  return (
    <>
      <div className="flex  ">
          <div className="w-[260px] bg-blue-100" >left side</div>
          <div className=" flex-grow  bg-red-100" >centent</div>
          <div className="w-[260px] bg-yellow-300 py-2 px-4">
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
            <div></div>
            <div></div>
          </div>
      </div>
      
    </>
  );
};

export default Home;
