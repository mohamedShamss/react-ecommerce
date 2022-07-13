import React from 'react'
import '../../css/Products/Products.css'
function Products(props) {
  return (
    <div className='products-side'> 
        {props.products.map(product => (
<div key={product.id} className='product-item'>
                    <img src={product.imageUrl} alt={product.title} />
                    <div className='product-desc'>
                        <h4>{product.title}</h4>
                        <h5>{product.price}</h5>
                    </div>
                        <a href=" " > Add To Cart </a>
            </div> // product-item
        ))}

     </div>
  )
}

export default Products