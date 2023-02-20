import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components';
function GameOn() {
  const navigate=useNavigate()
 const location=useLocation()
 console.log(location);
  return (
    <div>
   <div className="card">
  <img src={location.state.data.thumbnail} className="card-img"/>
  <div className="card-info">
    <p className="text-title">{location.state.data.name}</p>
    <p className="text-title">{location.state.data.duration}</p>
    <p className="text-body">{location.state.data.description}</p>
    <p className="text-body">{location.state.data.instructor}</p>
    <p className="text-body">{location.state.data.categorie}</p>
  </div>
  <div className="card-footer">
  <span className="text-title">{location.state.data.price}</span>
<span className="text-currency">&nbsp;TND</span> 
</div>
</div>
<BtnContainer><button onClick={()=>{navigate("/AllCourses")}}> Go back </button></BtnContainer>

    </div>


  )
}
const BtnContainer = styled.div`
margin-top: 2rem;
button {
  background: #81d1ff;
  border: none;
  padding: 0.9rem 1.1rem;
  color: #fff;
  border-radius: 1rem;
  box-shadow: 0px 13px 24px -7px #81d1ff;
  transition: all 0.3s ease-in-out;
  margin-left: 5rem;
  margin-top: 1.3rem;
  font-size: 0.8rem;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 17px 16px -11px #81d1ff;
    transform: translateY(-5px);
  }


}
`;








export default GameOn