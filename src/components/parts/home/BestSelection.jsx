import React from 'react'
import TheTitle from '../../TheTitle'

const BestSelection = () => {
    
  return (
    <div className='bg-blue-900 sides'>
        <div>
            <h3>Our Best Selection</h3>
            <p>Display products on any page from a variety of sources. Journal 3 offers the most comprehensive product selection tools in Opencart.</p>
        </div>
        <div className='bg-yellow-300 grid grid-cols-2 lg:grid-cols-4 gap-2'>
            {[1,2,3,4].map((item,index)=> (
                <div key={index}>
                     <TheTitle text={} />
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default BestSelection