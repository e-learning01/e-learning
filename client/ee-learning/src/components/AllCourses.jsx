import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav.jsx'
import CourseDetail from './CourseDetail.jsx'
import Cart from "./Cart.jsx"
import styled from 'styled-components'
import bg from '../assets/bg.png'
import axios from "axios"
function AllCourses() {
   const [courses,setCourses]=useState([])
  

  useEffect(() => {
    axios.get('http://127.0.0.1:5173/api/courses').then((res)=>{
      console.log(res.data);
      setCourses(res.data)
    }).catch((err)=>{console.log(err);})
  },[])



  
  return (
    <Container  bg={bg}>
      <Wrapper>
       <Nav/>
   <Cart/>
   <div className='card-container'>
    {courses.map((e,i)=>{
    return <CourseDetail e={e} key={i} />
   })}
   </div>
   </Wrapper>
  
   



    </Container>
  )
}

const Container = styled.div`
   height: 100vh;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
  background-image: url(${({ bg }) => bg});
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center;
`;


const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  /* margin: 2rem; */
  background-color: rgba(255, 255, 255, 0.9);
   @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(35px);
    backdrop-filter: blur(35px);
    background-color: rgba(255, 255, 255, 0.5);
  }
`;
export default AllCourses