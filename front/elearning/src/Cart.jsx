import React from 'react'
import "./Cart.css"
import { useContext} from 'react'
import CartContext from './Context/Cart/CartContext'
import CartItem from './CartItem.jsx'
function Cart() {
   const {showCart,cartItems,showHideCart}=useContext(CartContext)

  return (
    <div> 
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