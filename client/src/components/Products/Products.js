import React , {useState} from 'react'
import '../../css/Products/Products.css'
import ProductModal from './ProductModal';

function Products(props) {
    const [product , setProduct] = useState('');
    const openModel =(product) => {
            setProduct(product)
    }
    const closeModel =() =>  setProduct(false) ;
  

  return (
    <div className='products-side'> 
        {props.products.map(product => (
<div key={product.id} className='product-item'>
                  
                         <img src={product.imageUrl} alt={product.title} onClick={()=>openModel(product)}/>
                 
                    <div className='product-desc'>
                        <h4>{product.title}</h4>
                        <h5>{product.price}</h5>
                    </div>
                        <a href=" " > Add To Cart </a>
            </div> // product-item
        ))}

       <ProductModal product={product} closeModel={closeModel} />

     </div>
  ) //return
}

export default Products