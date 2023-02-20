import React from 'react'
import { useContext } from 'react'
import CartContext from './Context/Cart/CartContext'
import "./CartItem.css";



function CartItem(props) {
    const {removeItem}=useContext(CartContext)
    
  return (
    <li className='CartItem__item '>
   <img src={props.item.imageUrl} alt="" className='CartItem_image'/>
   <div>
    {props.item.name} {props.item.price}&nbsp;TND
    <button className='CartItem__button' onClick={()=> removeItem(props.item.idcourses)}>Remove</button>
   </div>
   

    </li>
  )
}

export default CartItem