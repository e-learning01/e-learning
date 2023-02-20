import React from 'react'
import CartContext from './Context/Cart/CartContext'
import MyCoursesDetail from './MyCoursesDetail.jsx'
import { useContext } from 'react'
function MyCourses() {

  const {cartItems}=useContext(CartContext)
  return (
    <div> {cartItems.map((e,i)=>{
      return <MyCoursesDetail  e={e} key={i}/> 
     })}</div>
  )
}

export default MyCourses