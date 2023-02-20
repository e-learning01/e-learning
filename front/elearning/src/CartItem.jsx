import React from 'react'
import { useContext } from 'react'
import CartContext from './Context/Cart/CartContext'
import "./CartItem.css";
import axios from 'axios';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode'

function CartItem(props) {
  ;
    const {removeItem}=useContext(CartContext)
    const token = Cookies.get('AcessToken')
     const  idus=jwtDecode(token)
     console.log(idus);
    
  

   const handleremove = () => {
    axios.delete(`http://127.0.0.1:5173/api/learn/delete/${idus.idusers}`)
      .then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    });
     removeItem(props.item.idcourses);

  };



    
  return (
    <li className='CartItem__item '>
   <img src={props.item.thumbnail} alt="" className='CartItem_image'/>
   <div>
    {props.item.name} {props.item.price}&nbsp;TND
    <button className='CartItem__button' onClick={()=>{handleremove()}}>Remove</button>
   </div>

    </li>
  )
}

export default CartItem