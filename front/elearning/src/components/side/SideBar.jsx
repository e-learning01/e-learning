import React, { useState } from 'react'
import "./side.css"
import { AiFillCaretDown, AiFillCaretUp,AiOutlineUnorderedList } from "react-icons/ai";
const SideBar = () => {
    const [show,setShow] = useState({
        duration : false,
        price : false , 
        cat : false
    })
    const [filter,setfilter]=useState(true) ;

  return (
<>

<button id="filter" onClick={e=>setfilter(current=>!current)} style={{background:'transparent',border:"1px solid grey",padding:"17px",width:"5.5rem",fontSize:'13px',fontWeight:"bold",marginBottom:"30px",marginLeft: "2.4rem"}}>
  <div > 
   <AiOutlineUnorderedList/> <span>Filter</span> </div></button>
   <div className={filter ? "side" : "noside"}>
<div className="duration">
<div className="click">
 <h4>Duration </h4>
{!show.duration ?
<AiFillCaretDown onClick={e=>(setShow(show=>{ return {...show,duration:!show.duration}}))} style={{marginLeft:"5px" , marginTop:"6px",cursor:"pointer"}}/>
: <AiFillCaretUp onClick={e=>(setShow(show=>{ return {...show,duration:!show.duration}}))} style={{marginLeft:"5px" , marginTop:"6px",cursor:"pointer"}}/>
} </div>
{show.duration &&
<div className="details" id="dur">
<div><input type="checkbox"/> 0-1 Hour</div> 
<div><input type="checkbox"/> -3 Hour </div>
 <div><input type="checkbox"/> -6 Hour </div>
 <div><input type="checkbox"/> -17 Hour </div>
 <div><input type="checkbox"/> 17 Hour </div>
 </div>}
 </div>
 <div className="category">
 <div className="click"> <h4>Category </h4> 
 {!show.cat ?
<AiFillCaretDown  onClick={e=>(setShow(show=>{ return {...show,cat:!show.cat}}))} style={{marginLeft:"5px" , marginTop:"6px",cursor:"pointer"}}/> 
:<AiFillCaretUp  onClick={e=>(setShow(show=>{ return {...show,cat:!show.cat}}))} style={{marginLeft:"5px" , marginTop:"6px",cursor:"pointer"}}/>
 }

</div>

{show.cat &&
<div className="details" id="cat"> 
 <div><input type="checkbox"/> CATEGORY NAME </div>
 </div>}
 </div>
 <div className="price">
 <div className="click">
 <h4>Price </h4> 
 { !show.price ?
 <AiFillCaretDown  onClick={e=>(setShow(show=>{ return {...show,price:!show.price}}))} style={{marginLeft:"5px" , marginTop:"6px",cursor:"pointer"}}/> 
 : <AiFillCaretUp  onClick={e=>(setShow(show=>{ return {...show,price:!show.price}}))} style={{marginLeft:"5px" , marginTop:"6px",cursor:"pointer"}}/>
}
 
 </div>
 {show.price &&
 <div className="details" id="price">
 <div><input type="checkbox"/>Free </div>
 <div><input type="checkbox"/> aid </div>
 </div>}
   </div>
   </div>
   </>
  )
}

export default SideBar
