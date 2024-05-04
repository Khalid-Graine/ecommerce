import React from 'react'
import TheTitle from '../../TheTitle'

const BestSelection = () => {
    const Selections = [
        {
            title: 'best',
            products: [
                {
                    name: 'phonwe 12',
                    price: '1999',
                    secondprice: '100',
                    picture: ''
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
                    picture: ''
                }
            ]
        }
    ]
  return (
    <div className='bg-blue-900 sides'>
        <div>
            <h3>Our Best Selection</h3>
            <p>Display products on any page from a variety of sources. Journal 3 offers the most comprehensive product selection tools in Opencart.</p>
        </div>
        <div className='bg-yellow-300 grid grid-cols-2 lg:grid-cols-4 gap-2'>
            {Selections.map((item,index)=> (
                <div key={index}>
                     <TheTitle>{item.title} </TheTitle>
                    <ul className='grid gap-1'>
                        {item.products.map((product,i) => (
                            <li key={i} className='bg-white flex gap-2'>
                            <div className='size-20 flex border p-1'>
                            <img src="src/assets/iphone.jpg" alt="" className=' object-cover' />
                            </div>
                            <div>
                                <p>{product.name}</p>
                                <p>199$</p>
                            </div>
                        </li>
                        ))}
                    </ul>
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default BestSelection