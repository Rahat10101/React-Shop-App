import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import './Item.css'
const Item = (props) => {
    const{item,removeProduct} = props;
    const {id,image,title} = item;
    return (
        <div className='item'>
            <img src={image} alt={title} />
            <p>{title}</p>
            
            <button onClick={()=>removeProduct(id)}>
            <FontAwesomeIcon icon={faTrash}/>
            </button>
        </div>
    );
};

export default Item;