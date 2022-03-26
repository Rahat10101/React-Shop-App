import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(result => setProducts(result));
    }, []);

    const [cartItems,setCartItems] = useState([]);

    
    useEffect(()=>{
        if(cartItems.length >= 4){
            alert('Maximum number of item is reached');
            return ;   
        }
    },[cartItems]);

    const getProduct = (id) => {
      return  products.find(product => product.id == id);
    }

    const checkCart = (id) => {
        return  cartItems.findIndex(item => item.id == id);
    }

    const removeFromCart = (id) => {
      
            setCartItems([...cartItems].filter(item => item.id != id));
    
    };
      
    const addProductToCart = (id) => {
        if(checkCart(id) == -1){
            setCartItems([...cartItems,getProduct(id)]);
        }
    };

    const emptyCart = () => setCartItems([]);

    const chooseOne = () => {
       const luckyItem = [...cartItems][Math.floor(Math.random()*[...cartItems].length)];
        if(luckyItem){
            setCartItems([luckyItem]);
        }
       }
    
    return (
        <div className='shop'>
            <div className="products">
                {products.map(product => <Product product={product} addProduct={addProductToCart} key={product.id} />)}
            </div>
            <div className="cart">
                {cartItems.map(item => <Item item={item} key={item.id} removeProduct={removeFromCart} />)}
                <button class="btn" onClick={chooseOne}>
                    Choose one for me
                </button>
                <button class="btn" onClick={emptyCart}>
                    Choose Again
                </button>
            </div>
        </div>
    );
};

export default Shop;