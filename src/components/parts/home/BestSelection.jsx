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
        <div>
            <h3>Our Best Selection</h3>
            <p>Display products on any page from a variety of sources. Journal 3 offers the most comprehensive product selection tools in Opencart.</p>
        </div>
        <div className='mt-6 bg-yellow-300 grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-5'>
            {Selections.map((item,index)=> (
                <div key={index}>
                     <TheTitle>{item.title} </TheTitle>
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
                </div>
            ))}
            
        </div>
        { showQuikView && <div onClick={() => setShowQuikView(false)} className='fixed z-10 top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex justify-center items-center '>
            <div className='w-[650px]  h-[450px] mx-auto bg-yellow-200 flex overflow-y-auto '>
              {isLoading && <div className='w-full h-full  flex justify-center items-center '>
                <div className='size-10 p-1 animate-spin text-3xl bg-blue-500 rounded-full'>
                    .
                </div>
                </div>}
                {!isLoading && 
                     <div className='w-full relative'>
                        <div onClick={() => setShowQuikView(false)} className=' absolute right-2 top-2 size-8 bg-blue-500 flex justify-center items-center rounded-full'>
                        <i className="fa-solid fa-xmark  text-white"></i>
                        </div>
                          <div className='content grid grid-cols-2'>
                            <div className='bg-red-300 border-r'>
                                e
                            </div>
                            <div className='bg-purple-300'>
                                n
                            </div>
                          </div>
                          {/* bottom bar for purchase */}
                          <div className='px-4 bg-white py-1 w-full absolute bottom-0 right-0 border-t  flex'>
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

export default BestSelection