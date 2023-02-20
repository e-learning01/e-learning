import React, { useEffect, useState } from 'react'
import "./Cart.css"
import { useContext} from 'react'
import CartContext from '../Context/Cart/CartContext'
import CartItem from './CartItem.jsx'
import Cookies from "js-cookie"
import axios from 'axios'
function Cart() {
 
   const {showCart,cartItems,showHideCart,addToCart}=useContext(CartContext)
//    useEffect(() => {
//     const fetchInitialCartItems = async () => {
//         try {
//             const response = await axios.get('http://127.0.0.1:5173/api/learn');
//             if (response.data.length) {
//                 const filteredItems = response.data.filter(e => e.iduser === response.data[0].idcourse);
//                 console.log("filteredItems", filteredItems);
//                 console.log("cartItems",cartItems);
//                 addToCart(filteredItems);
//                 console.log("res",response.data);
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     };
//     fetchInitialCartItems();
// }, []);
 
  
   
  


  return (
    <div> 
     { console.log("aa",cartItems)}
  {showCart && (
  <div className='cart__wrapper '>
    <div style={{textAlign:'right'}}>
       <i style={{cursor:'pointer'}} className='fafa-times-circle' aria-hidden='true' onClick={showHideCart}></i>
    </div>
    <div  className='cart__innerWrapper'>{cartItems.length===0 ? (<h4>cart is empty</h4>):(<ul>
      {cartItems.map((item,i)=>(
        <CartItem key={i} item={item}/>
      ))}
    </ul>)}</div>
    <div className='Cart__cartTotal'>
      <div>
        Cart Total
      </div>
    <div style={{marginLeft:5}}>
      {cartItems.reduce((amount,item)=>item.price+amount,0)}&nbsp;TND
    </div>
   
    </div>
  </div>
  )}
    </div>
  )
}

export default Cart