
import Modal from 'react-modal' ;

function ProductModal(props) {
const {product , closeModel} = props;
  return (
     <Modal isOpen={product} onRequestClose={closeModel}>
    <span onClick={closeModel} className="close-icon"> &times; </span>
     <div className='product-info'>
     <img src={product.imageUrl} alt={product.title} />
                <h4>{product.title}</h4>
                <h5>{product.price}</h5>
                <p>{product.desc}</p>
            </div>
</Modal>
  )
}

export default ProductModal