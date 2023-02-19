import React from 'react'
import styled from 'styled-components';
function MyCoursesDetail(props) {
    console.log("aaaaaaaa",props);
  return (
    <Card>
  <Tools>
    <Circle>
      <Red>{props.e.name} {props.e.gains} {props.thumbnail}</Red>
    </Circle>
    <Circle>
      <Yellow>{props.e.description} {props.e.duration} {props.instructor}</Yellow>
    </Circle>
    <Circle>
      <Green>{props.e.video}</Green>
    </Circle>
  </Tools>
  <div class="card__content">
  </div>
</Card>
  )
}
const Card=styled.div`
    width: 190px;
    height: 254px;
    margin: 0 auto;
    background-color: #011522;
    border-radius: 8px;
    z-index: 1;
   `
   
   const Tools=styled.div`
    display: flex;
    align-items: center;
    padding: 9px;
   `
   
   const Circle=styled.div `
    padding: 0 4px;
   `
   
   const Box=styled.div`
    display: inline-block;
    align-items: center;
    width: 10px;
    height: 10px;
    padding: 1px;
    border-radius: 50%;
   `
   
   const Red=styled.div `
    background-color: #ff605c;
   `
   
   const Yellow=styled.div`
    background-color: #ffbd44;
   `
   
   const Green=styled.div `
    background-color: #00ca4e;
   `
   

export default MyCoursesDetail