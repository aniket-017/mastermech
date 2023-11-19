import React from 'react'
import Filters from "./Filters"
import Products from "./Products"
import "./Page1.css"

const Page1 = () => {
  return (
    <div className='pagecss'>

    <div className='sidebar'>
    <Filters />
        {/* add filter on left sidebar */}
    </div>

    <div className='products'>
    <Products /> 
        {/* add products */}
    </div>

    </div>
  )
}

export default Page1