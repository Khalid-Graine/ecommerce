import React from 'react'
import OfferBanner from '../components/OfferBanner'
import Secondbanner from '../components/Secondbanner'
import TheMainHeader from '../components/TheMainHeader'
import SearchBar from '../components/SearchBar'
import TheSecondaryHeader from '../components/TheSecondaryHeader'

const TheHeader = () => {
  return (
    <div>
       <OfferBanner />
       <Secondbanner />
       <div className='bg-blue-800 py-2 flex flex-col gap-2'>
       <TheMainHeader />
       <SearchBar devices='sm' />
       </div>
       
       <TheSecondaryHeader />
      

    </div>
  )
}

export default TheHeader