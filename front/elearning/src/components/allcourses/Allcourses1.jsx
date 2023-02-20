import React from 'react'
import "./allcourses.css"
import SideBar from '../side/SideBar.jsx'
import{AiFillCaretDown,AiFillInfoCircle,AiOutlineCheck} from "react-icons/ai";
const allcourses = () => {
  return (
    <>
        
       
       <h2>All Development courses</h2>
      <div className="moneyBack" style={{marginBottom:"30px"}}><AiFillInfoCircle/> 
   <h4>Not sure? All courses have a 30-day money-back guarantee</h4></div>
       <div className="components">
       <div className="sidebar"><SideBar/></div>
<div className="lists">
<div className="all">
       <div className="list">
      <div className="tooltip" id="1">
       
        <h4 style={{marginLeft:"10px"}}>what you'll learn ?</h4>
      <p><AiOutlineCheck/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
      <p><AiOutlineCheck/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
      <p><AiOutlineCheck/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
      <button style={{marginTop:"15px",textAlign:"center" , background:"#a435f0",width:"500px",color:"white",height:"40px",border:"0px"}}>See More </button>
      </div>
      <div className="border"><AiFillCaretDown style={{textShadow:"0px 2px 16px 5px rgba(0,0,0,0.33)",position:"absolute",top:"-5",left:"35%",color:"white", textAlign:"center"}}/></div>
       <div className="img"> 
        <img className='snapshot' src="https://www.imgacademy.com/sites/default/files/2022-07/img-homepage-meta.jpg" alt="" />
        </div>
        <div className="detail">
        <h4>Angular-The complete guide (2023 edition)</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum dignissimos iure sed facilis eum officiis. Delectus ullam at itaque natus nesciunt, nisi optio unde culpa ipsam vel nulla nobis cupiditate!</p>
        <h6>this is the authr</h6>
        <p className='time'>total hours : 1</p></div>
</div>  
<div className="PRICE">
  <h4 style={{fontSize:"1rem"}}>13.00 DT</h4>
</div>
</div>
<div className="all">
       <div className="list">
      <div className="tooltip" id="1">
       
        <h4 style={{marginLeft:"10px"}}>what you'll learn ?</h4>
      <p><AiOutlineCheck/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
      <p><AiOutlineCheck/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
      <p><AiOutlineCheck/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
      <button style={{marginTop:"15px",textAlign:"center" , background:"#a435f0",width:"500px",color:"white",height:"40px",border:"0px"}}>See More </button>
      </div>
      <div className="border"><AiFillCaretDown style={{textShadow:"0px 2px 16px 5px rgba(0,0,0,0.33)",position:"absolute",top:"-5",left:"35%",color:"white", textAlign:"center"}}/></div>
       <div className="img"> 
        <img className='snapshot' src="https://www.imgacademy.com/sites/default/files/2022-07/img-homepage-meta.jpg" alt="" />
        </div>
        <div className="detail">
        <h4>Angular-The complete guide (2023 edition)</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum dignissimos iure sed facilis eum officiis. Delectus ullam at itaque natus nesciunt, nisi optio unde culpa ipsam vel nulla nobis cupiditate!</p>
        <h6>this is the authr</h6>
        <p className='time'>total hours : 1</p></div>
</div>  
<div className="PRICE">
  <h4 style={{fontSize:"1rem"}}>13.00 DT</h4>
</div>
</div>
<div className="all">
       <div className="list">
      <div className="tooltip" id="1">
       
        <h4 style={{marginLeft:"10px"}}>what you'll learn ?</h4>
      <p><AiOutlineCheck/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
      <p><AiOutlineCheck/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
      <p><AiOutlineCheck/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
      <button style={{marginTop:"15px",textAlign:"center" , background:"#a435f0",width:"500px",color:"white",height:"40px",border:"0px"}}>See More </button>
      </div>
      <div className="border"><AiFillCaretDown style={{textShadow:"0px 2px 16px 5px rgba(0,0,0,0.33)",position:"absolute",top:"-5",left:"35%",color:"white", textAlign:"center"}}/></div>
       <div className="img"> 
        <img className='snapshot' src="https://www.imgacademy.com/sites/default/files/2022-07/img-homepage-meta.jpg" alt="" />
        </div>
        <div className="detail">
        <h4>Angular-The complete guide (2023 edition)</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum dignissimos iure sed facilis eum officiis. Delectus ullam at itaque natus nesciunt, nisi optio unde culpa ipsam vel nulla nobis cupiditate!</p>
        <h6>this is the authr</h6>
        <p className='time'>total hours : 1</p></div>
</div>  
<div className="PRICE">
  <h4 style={{fontSize:"1rem"}}>13.00 DT</h4>
</div>
</div>

</div>
    </div>
    </>
  )
}

export default allcourses
