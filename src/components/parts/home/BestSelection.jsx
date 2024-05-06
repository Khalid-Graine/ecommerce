import React, { useState } from "react";
import TheTitle from "../../TheTitle";

const BestSelection = () => {
  const [product, setProduct] = useState("");
  const [showQuikView, setShowQuikView] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const Selections = [
    {
      title: "best",
      products: [
        {
          name: "phonwe 12",
          price: "1999",
          secondprice: "100",
          picturePath: "src/assets/iphone.jpg",
        },
        {
          name: "phonwe 12",
          price: "1999",
          secondprice: "100",
          picturePath: "src/assets/iphone.jpg",
        },
        {
          name: "phonwe 12",
          price: "1999",
          secondprice: "100",
          picturePath: "src/assets/iphone.jpg",
        },
      ],
    },
    {
      title: "best",
      products: [
        {
          name: "phonwe 12",
          price: "1999",
          secondprice: "100",
          picturePath: "src/assets/iphone.jpg",
        },
        {
          name: "phonwe 12",
          price: "1999",
          secondprice: "100",
          picturePath: "src/assets/iphone.jpg",
        },
        {
          name: "phonwe 12",
          price: "1999",
          secondprice: "100",
          picturePath: "src/assets/iphone.jpg",
        },
      ],
    },
    {
      title: "best",
      products: [
        {
          name: "phonwe 12",
          price: "1999",
          secondprice: "100",
          picturePath: "src/assets/iphone.jpg",
        },
        {
          name: "phonwe 12",
          price: "1999",
          secondprice: "100",
          picturePath: "src/assets/iphone.jpg",
        },
        {
          name: "phonwe 12",
          price: "1999",
          secondprice: "100",
          picturePath: "src/assets/iphone.jpg",
        },
      ],
    },
    {
      title: "best",
      products: [
        {
          name: "phonwe 12",
          price: "1999",
          secondprice: "100",
          picturePath: "src/assets/iphone.jpg",
        },
        {
          name: "phonwe 12",
          price: "1999",
          secondprice: "100",
          picturePath: "src/assets/iphone.jpg",
        },
        {
          name: "phonwe 12",
          price: "1999",
          secondprice: "100",
          picturePath: "src/assets/iphone.jpg",
        },
      ],
    },
  ];
  const showProduct = (product) => {
    setProduct(product);
    setShowQuikView(true);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
  return (
    <div className="sides bg-blue-900">
      <TheIntroduction />
      <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-5 bg-yellow-300 lg:grid-cols-4">
        {Selections.map((item, index) => (
          <div key={index}>
            <TheTitle>{item.title} </TheTitle>
            <ProductList item={item} showProduct={showProduct} />
          </div>
        ))}
      </div>

      {showQuikView && (
        <div onClick={() => setShowQuikView(false)} className="quick-view">
          <div className="mx-auto  flex h-[450px] w-[650px] overflow-y-auto bg-white ">
            {isLoading && (
              <div className="flex h-full  w-full items-center justify-center ">
                <div className="size-10 animate-spin rounded-full bg-blue-500 p-1 text-3xl">
                  .
                </div>
              </div>
            )}
            {!isLoading && (
              <div className="relative h-full w-full border ">
                <CloseButton setShowQuikView={setShowQuikView} />
                <CartContent />
                <ProductActionsBar />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
const CloseButton = ({ setShowQuikView }) => {
  return (
    <div onClick={() => setShowQuikView(false)} className="close-quick-view">
      <i className="fa-solid fa-xmark  text-white"></i>
    </div>
  );
};
const ProductActionsBar = () => {
  return (
    <div className="sticky bottom-0 right-0 flex w-full  border-t bg-white px-4  py-1">
      <div className="flex flex-grow">
        <div className="flex w-10 items-center justify-center border ">
          0
        </div>
        <div className="flex flex-col items-center justify-center text-xl border hover:cursor-pointer bg-gray-700 ">
          <i className="fa-solid fa-chevron-up  text-white"></i>
          <hr className="border w-full" />
          <i className="fa-solid fa-chevron-down text-white"></i>
        </div>
        <div className="flex h-full flex-grow items-center justify-center bg-gray-900 text-white">
          add to cart
        </div>
      </div>
      <div className="flex w-10 items-center justify-center bg-red-500">
        <i className="fa-regular fa-heart"></i>
      </div>
      <div className="flex w-10 items-center justify-center bg-green-400">
        <i className="fa-solid fa-arrow-right-long"></i>
      </div>
    </div>
  );
};
const CartContent = () => {
  return (
    <div className=" content grid grid-cols-2 gap-2 p-1">
      <div className="border-r bg-red-300">
        <div className="w-full ">
          <img src="src/assets/iphone2.webp" alt="" />
        </div>
        <div></div>
      </div>
      <div className="bg-purple-300">
        <TheTitle>title</TheTitle>
        <div className="flex gap-2">
          <p className=" font-semibold">stock :</p>
          <span>in stock</span>
        </div>
        <div className="flex gap-2">
          <p className=" font-semibold">Brand :</p>
          <span>extrr</span>
        </div>
        <div className="flex gap-2">
          <p className=" font-semibold">ex tax: </p>
          <span>1200</span>
        </div>

        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
          mollitia! Ratione suscipit dolores minus nulla laborum inventore
          voluptas libero iure nihil similique enim delectus eveniet ipsam, modi
          atque quos nostrum eius quia? Sint molestiae animi a quod soluta,
          voluptatum excepturi maiores nihil, dolor in enim, possimus autem
          laboriosam accusantium hic! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Tempore, mollitia! Ratione suscipit dolores minus
          nulla laborum inventore voluptas libero iure nihil similique enim
          delectus eveniet ipsam, modi atque quos nostrum eius quia? Sint
          molestiae animi a quod soluta, voluptatum excepturi maiores nihil,
          dolor in enim, possimus autem laboriosam accusantium hic!
        </p>
      </div>
    </div>
  );
};
const ProductList = ({ item, showProduct }) => {
  return (
    <ul className="grid gap-1">
      {item.products.map((product, i) => (
        <li
          onClick={() => showProduct(product)}
          key={i}
          className="flex gap-2 bg-white"
        >
          <div className="flex size-20 border p-1">
            <img src={product.picturePath} alt="" className=" object-cover" />
          </div>
          <div>
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

const TheIntroduction = () => {
  return (
    <div>
      <h3>Our Best Selection</h3>
      <p>
        Display products on any page from a variety of sources. Journal 3 offers
        the most comprehensive product selection tools in Opencart.
      </p>
    </div>
  );
};

export default BestSelection;
