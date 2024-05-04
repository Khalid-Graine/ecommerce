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
                        <div onClick={() => setShowQuikView(false)} className=' absolute right-0 top-1 size-8 bg-blue-500 flex justify-center items-center rounded-full'>
                        <i className="fa-solid fa-xmark  text-white"></i>
                        </div>
                          <p>hiiiiiii</p>
                          <p>{product.name}</p>
                          <p>{product.price}</p>
                          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque temporibus earum eligendi reiciendis voluptas fugit ullam ea dignissimos officia! Veniam odio esse sunt reprehenderit fuga fugiat inventore consequuntur veritatis deserunt aperiam asperiores maiores assumenda dolore aspernatur ducimus, labore quia, dolorem, nihil unde earum ab! Beatae ut alias nobis quo facere odio temporibus laboriosam. Quam sit eaque perspiciatis amet facere itaque eveniet labore expedita vero, explicabo sed dolor fuga cumque! Odio dignissimos repellendus quia officia dolor dolore quibusdam harum. Commodi atque deserunt neque ratione hic minima eligendi, ad reiciendis obcaecati. A, minus autem suscipit tempora quasi repudiandae in beatae voluptate laboriosam adipisci commodi cumque quisquam quaerat maiores dolores, officiis recusandae, dolorem voluptatibus placeat! Sequi aut soluta, rem beatae dolorum obcaecati omnis voluptas quibusdam quisquam nesciunt. Repudiandae, maxime commodi magnam nesciunt necessitatibus sapiente provident. Quibusdam, iure? Hic sed, accusantium dolor odit est odio quo ut iure provident reiciendis nobis, veniam corrupti maiores laboriosam dolorem sapiente culpa neque. Exercitationem ducimus, voluptatem harum eaque culpa excepturi nulla dolorum fugit alias, obcaecati sunt numquam ad architecto sint! Eos reprehenderit iusto voluptatibus sequi. Rem itaque ad expedita consequatur perferendis eius. Repudiandae, itaque vero adipisci dolorum enim maxime eaque deserunt aut distinctio. Voluptates maiores, amet culpa, aliquid ullam soluta velit eaque earum officiis quos beatae, ea vel ipsam incidunt similique ducimus ab? Reprehenderit, dignissimos. Quod amet excepturi eaque! Error veritatis, rerum est ex totam distinctio qui. Laudantium, quo fuga! Placeat cupiditate beatae architecto sed rerum, eveniet numquam eius eaque velit autem porro est voluptatum vero ea! Modi eaque atque ut enim incidunt? Dolores, quibusdam dolorem nemo corporis sit sed? Cumque cupiditate necessitatibus asperiores ab sequi ullam, numquam incidunt aspernatur nam saepe voluptatibus quod repellat aut, suscipit, nisi quos ea pariatur voluptate id! Eius sapiente possimus, quod iusto cumque laborum, quis nemo aperiam, dolore neque suscipit dolorum laboriosam aspernatur officiis corrupti? Tenetur eum modi, repudiandae fugit suscipit a obcaecati? Eum quaerat delectus quod modi nobis itaque neque labore harum aliquid temporibus molestias ex ratione laborum nostrum suscipit, ad enim facere minus aspernatur. Commodi excepturi nihil illum fuga, numquam iusto dicta optio necessitatibus officia doloribus, quisquam magni ipsum harum ratione earum, dolorem totam placeat vero. Sunt fugit harum et quidem id. Rem doloremque repellat placeat eum natus esse voluptatum, mollitia molestiae soluta reiciendis ducimus voluptatem quod officia dicta iure ipsam voluptas rerum est consequuntur? Ipsum pariatur eaque molestiae quis reprehenderit saepe ipsam. Nihil nobis sint quibusdam corporis, aliquam necessitatibus?</div>
                          <div className='bg-green-300 sticky bottom-0 right-0 border-t py-0 flex'>
                            <div className='w-full flex'>
                                <div className='flex justify-center items-center size-10 '>
                                    0
                                </div>
                                <div>

                                </div>
                               <div className='bg-gray-900 text-white h-full flex justify-center items-center'>
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