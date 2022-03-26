import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';


const Product = (props) => {
    const {product,addProduct} = props;
    const {id,title,price,image,description} = product;
    return (
        <div className='card'>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <h2>$ {price}</h2>
            <p>
                {description}
            </p>

            <button onClick={()=>addProduct(id)}>
                Add to cart <FontAwesomeIcon icon={faCartPlus} />
            </button>
        </div>
    );
};

export default Product;