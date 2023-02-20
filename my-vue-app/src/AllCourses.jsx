import React, { useContext, useState } from 'react'
import Nav from './Nav.jsx'
import CourseDetail from './CourseDetail.jsx'
import Cart from "./Cart.jsx"

function AllCourses() {
   const [courses,setCourses]=useState([
    {
      "idcourses":1,
      "name": "Introduction to Python",
      "price": 99,
      "imageUrl": "https://files.realpython.com/media/realpython-logo.655da081bdf1.png",
      "description": "Learn the basics of Python programming and start building your own applications.",
      "duration": "6 weeks",
      "language": "English",
      "instructor": "John Smith",
      "categorie": "Programming"
    },
    {
      "idcourses":2,
      "name": "French for Beginners",
      "price": 79,
      "imageUrl": "https://preply.com/wp-content/uploads/2019/02/210615_Preply_Learn-French_Phonetics_v04-976x1024.png",
      "description": "Start learning French from scratch and master the basics of the language.",
      "duration": "8 weeks",
      "language": "English",
      "instructor": "Marie Dupont",
      "categorie": "Language Learning"
    },
    {
      "idcourses":3,
      "name": "Introduction to Artificial Intelligence",
      "price": 149,
      "imageUrl": "https://miro.medium.com/max/900/1*57YDg0EsnSBYsTnwYPkSDg.jpeg",
      "description": "Discover the fundamentals of AI and how it's used in modern technology.",
      "duration": "10 weeks",
      "language": "English",
      "instructor": "David Lee",
      "categorie": "Computer Science"
    },
    {
      "idcourses":4,
      "name": "Digital Marketing Strategy",
      "price": 129,
      "imageUrl": "https://www.ama.org/wp-content/uploads/2021/10/AdobeStock_219101232.jpg?resize=1327%2C538",
      "description": "Learn how to create and execute effective digital marketing campaigns for your business.",
      "duration": "12 weeks",
      "language": "English",
      "instructor": "Emily Chen",
      "categorie": "Marketing"
    },
    {
      "idcourses":5,
      "name": "Yoga for Beginners",
      "price": 69,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPyNlpPSwXOLEZfEHd6MGmbqfyf06sw4LdUg&usqp=CAU",
      "description": "Explore the world of yoga and improve your physical and mental health.",
      "duration": "6 weeks",
      "language": "English",
      "instructor": "Sarah Lee",
      "categorie": "Health and Wellness"
    },
    {
      "idcourses":6,
      "name": "Guitar Fundamentals",
      "price": 129.524,
      "imageUrl": "https://ecampusontario.pressbooks.pub/app/uploads/sites/521/2019/07/GF2-3-4-Books-2-3-4-cover.jpg",
      "description": "Learn the basics of guitar playing from tuning to strumming and playing chords.",
      "duration": "10 weeks",
      "language": "English",
      "instructor": "John Smith",
      "categorie": "Music"
    }
  ]

  )
   
  
  return (
    <div>
   <Nav/>
   <Cart/>
   <div className='card-container'>
    {courses.map((e,i)=>{
    return <CourseDetail e={e} key={i} />
   })}
   </div>
   



    </div>
  )
}


export default AllCourses