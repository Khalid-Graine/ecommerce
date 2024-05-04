import React, { useState } from 'react'
import TheTitle from '../../TheTitle'

const BestSelection = () => {
    const [product,setProduct] = useState('')
    const [showQuikView,setShowQuikView] = useState(false)
    const [isLoading,setIsLoading] = useState(false)
    const Selections = [
        {
            title: 'best',
            products: [
                {
                    name: 'phonwe 12',
                    price: '1999',
                    secondprice: '100',
                    picturePath: 'src/assets/iphone.jpg'
                },
                {
                    name: 'phonwe 12',
                    price: '1999',
                    secondprice: '100',
                    picturePath: 'src/assets/iphone.jpg'
                },
                {
                    name: 'phonwe 12',
                    price: '1999',
                    secondprice: '100',
                    picturePath: 'src/assets/iphone.jpg'
                }
            ]
        },
        {
            title: 'best',
            products: [
                {
                    name: 'phonwe 12',
                    price: '1999',
                    secondprice: '100',
                    picturePath: 'src/assets/iphone.jpg'
                },
                {
                    name: 'phonwe 12',
                    price: '1999',
                    secondprice: '100',
                    picturePath: 'src/assets/iphone.jpg'
                },
                {
                    name: 'phonwe 12',
                    price: '1999',
                    secondprice: '100',
                    picturePath: 'src/assets/iphone.jpg'
                }
            ]
        }, {
            title: 'best',
            products: [
                {
                    name: 'phonwe 12',
                    price: '1999',
                    secondprice: '100',
                    picturePath: 'src/assets/iphone.jpg'
                },
                {
                    name: 'phonwe 12',
                    price: '1999',
                    secondprice: '100',
                    picturePath: 'src/assets/iphone.jpg'
                },
                {
                    name: 'phonwe 12',
                    price: '1999',
                    secondprice: '100',
                    picturePath: 'src/assets/iphone.jpg'
                }
            ]
        }, {
            title: 'best',
            products: [
                {
                    name: 'phonwe 12',
                    price: '1999',
                    secondprice: '100',
                    picturePath: 'src/assets/iphone.jpg'
                },
                {
                    name: 'phonwe 12',
                    price: '1999',
                    secondprice: '100',
                    picturePath: 'src/assets/iphone.jpg'
                },
                {
                    name: 'phonwe 12',
                    price: '1999',
                    secondprice: '100',
                    picturePath: 'src/assets/iphone.jpg'
                }
            ]
        },
        
    ]
    const showProduct = (product) => {
        setProduct(product)
        setShowQuikView(true);
        setIsLoading(true);
        
        setTimeout(() => {
            setIsLoading(false);
          }, 1000);
        
    }
  return (
    <div className='bg-blue-900 sides'>
        
         <TheIntroduction />
        <div className='mt-6 bg-yellow-300 grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-5'>
            {Selections.map((item,index)=> (
                <div key={index}>
                     <TheTitle>{item.title} </TheTitle>
                      <ProductList item={item} showProduct={showProduct} />
                </div>
            ))}
            
        </div>

        { showQuikView && <div onClick={() => setShowQuikView(false)} className='fixed z-10 top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex justify-center items-center '>
            <div className='w-[650px]  h-[450px] mx-auto bg-white flex overflow-y-auto '>
              {isLoading && <div className='w-full h-full  flex justify-center items-center '>
                <div className='size-10 p-1 animate-spin text-3xl bg-blue-500 rounded-full'>
                    .
                </div>
                </div>}
                {!isLoading && 
                     <div className='w-full relative border h-full '>
                        {/* close butoon */}
                        <div onClick={() => setShowQuikView(false)} className=' absolute right-2 top-2 size-8 bg-blue-500 flex justify-center items-center rounded-full'>
                        <i className="fa-solid fa-xmark  text-white"></i>
                        </div>
                        {/* content */}
                          <div className=' content grid grid-cols-2'>
                            <div className='bg-red-300 border-r'>
                               <div></div>
                               <div></div>
                            </div>
                            <div className='bg-purple-300'>
                              <TheTitle>title</TheTitle>
                              <div className='flex gap-2'>
                                <p className=' font-semibold'>stock :</p>
                                <span>in stock</span>
                              </div>
                              <div className='flex gap-2'>
                                <p className=' font-semibold'>Brand :</p>
                                <span>extrr</span>
                              </div>
                              <div className='flex gap-2'>
                                <p className=' font-semibold'>ex tax: </p>
                                <span>1200</span>
                              </div>
                              
                              <hr />
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, mollitia! Ratione suscipit dolores minus nulla laborum inventore voluptas libero iure nihil similique enim delectus eveniet ipsam, modi atque quos nostrum eius quia? Sint molestiae animi a quod soluta, voluptatum excepturi maiores nihil, dolor in enim, possimus autem laboriosam accusantium hic! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, mollitia! Ratione suscipit dolores minus nulla laborum inventore voluptas libero iure nihil similique enim delectus eveniet ipsam, modi atque quos nostrum eius quia? Sint molestiae animi a quod soluta, voluptatum excepturi maiores nihil, dolor in enim, possimus autem laboriosam accusantium hic!</p>
                            </div>
                          </div>
                          {/* bottom bar for purchase */}
                          <div className='px-4 bg-white py-1 sticky w-full  bottom-0 right-0 border-t  flex'>
                            <div className='flex-grow flex'>
                                <div className='flex justify-center bg-yellow-300 items-center size-10 '>
                                    0
                                </div>
                                <div>

                                </div>
                               <div className='bg-gray-900 text-white h-full flex justify-center items-center flex-grow'>
                                add to cart
                               </div>
                            </div>
                            <div className='bg-red-500 flex justify-center items-center size-10'>
                            <i className="fa-regular fa-heart"></i>
                            </div>
                            <div className='bg-green-400 flex justify-center items-center size-10'>
                            <i className="fa-solid fa-arrow-right-long"></i>
                            </div>
                          </div>
                         
                     </div>
                }
                
            </div>
        </div>}
    </div>
  )
}


const ProductList = ({item,showProduct}) => {
    return (
        <ul className='grid gap-1'>
        {item.products.map((product,i) => (
            <li onClick={() => showProduct(product)}  key={i} className='bg-white flex gap-2'>
            <div className='size-20 flex border p-1'>
            <img src={product.picturePath} alt="" className=' object-cover' />
            </div>
            <div>
                <p>{product.name}</p>
                <p>{product.price}</p>
            </div>
        </li>
        ))}
    </ul>
    )
}

const TheIntroduction = () => {
    return (
        <div>
        <h3>Our Best Selection</h3>
        <p>Display products on any page from a variety of sources. Journal 3 offers the most comprehensive product selection tools in Opencart.</p>
    </div>
    )
}

export default BestSelection