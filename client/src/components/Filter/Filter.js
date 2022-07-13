import React from 'react'
import '../../css/Filter/Filter.css'
function Filter(props) {
  return (
    <div className='filter-side' > 
    <h2 className='filter-title'>Filter</h2> 
    <div className='num-of-products'> Number Of Products : 4 </div>
    {/**/}
    <div className='filter-by-size'>
        <span>Filter</span>
        <select className='filter-select'>
            <option value="All">All</option>
            <option value="XXL">XXL</option>
            <option value="XL">XL</option>
            <option value="L">L</option>
            <option value="M">M</option>
            <option value="S">S</option>
            <option value="XS">XS</option>
        </select>
    </div>
    {/**/}
    <div className='filter-by-price'>
        <span>Order</span>
        <select className='filter-select'>
            <option value="Latest">Latest</option>
            <option value="lower">Lower</option>
            <option value="hieghest">Hieghest</option>
        </select>
    </div>
    </div>
  )
}

export default Filter