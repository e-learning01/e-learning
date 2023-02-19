import React from 'react'
import { useContext } from 'react'
import CartContext from '../Context/Cart/CartContext'
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
    
  

   const handleremove = async (idus) => {
    await removeItem(props.item.idcourses);
    axios.delete("http://127.0.0.1:5173/api/learn/delete", {
    
        iduser: idus.iduser
      
    }).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    });
  };



    
  return (
    <li className='CartItem__item '>
   <img src={props.item.thumbnail} alt="" className='CartItem_image'/>
   <div>
    {props.item.name} {props.item.price}&nbsp;TND
    <button className='CartItem__button' onClick={()=>{handleremove(idus.idusers)}}>Remove</button>
   </div>

    </li>
  )
}

export default CartItem