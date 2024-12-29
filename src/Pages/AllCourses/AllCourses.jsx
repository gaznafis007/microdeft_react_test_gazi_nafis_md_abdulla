import { useEffect, useState } from "react";
import Login from "../Login/Login";


const AllCourses = () => {
    const token = localStorage.getItem('token');
    const [courses, setCourses] = useState(null);
    const allCourses = [
        {
          title: 'React for Beginners',
          description: 'A comprehensive course on React, covering everything from the basics to advanced concepts.',
          instructor_name: 'John Doe',
          img: 'https://react-interview.crd4lc.easypanel.host/cats/5.jpg',
          badge_text: 'Featured',
          badge_color: 'bg-red-500'
        },
        {
          title: 'Advanced JavaScript',
          description: 'Deep dive into JavaScript, including ES6+, asynchronous programming, and more.',
          instructor_name: 'Jane Smith',
          img: 'https://react-interview.crd4lc.easypanel.host/cats/4.jpg',
          badge_text: 'Premium',
          badge_color: 'bg-green-500'
        },
        {
          title: 'Node.js Essentials',
          description: 'Learn the fundamentals of Node.js and how to build fast, scalable server-side applications.',
          instructor_name: 'Alice Johnson',
          img: 'https://react-interview.crd4lc.easypanel.host/cats/3.jpg',
          badge_text: 'Regular',
          badge_color: 'bg-blue-500'
        },
        {
          title: 'Python for Data Science',
          description: 'Introduction to Python programming with a focus on data analysis and visualization.',
          instructor_name: 'Robert Brown',
          img: 'https://react-interview.crd4lc.easypanel.host/cats/2.jpg',
          badge_text: 'Featured',
          badge_color: 'bg-red-500'
        }
      ];
      
    useEffect(() =>{
        fetch('https://react-interview.crd4lc.easypanel.host/api/course',{
            method: 'GET',
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            setCourses(data?.data?.data)
        })
    },[])
    if(!token){
        return <Login/>
    }
    return (
        <section className="px-8 py-4">
            <h2 className="text-4xl font-bold text-center">All Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                {courses && 
                    courses?.map(course => (
                        <div key={course?.title} className="shadow-sm p-4 rounded-md">
                            <img src={course?.image} alt="course-image" />
                            <h2 className="font-semibold text-lg">{course?.title}</h2>
                            <h3 className="mt-2 text-slate-400">{course?.instructor_name}</h3>
                            <p className="mt-2">{course?.description}</p>
                            <button className={`mt-2 px-3 py-1 rounded-full text-white ${course?.badge_color === 'red' && 'bg-red-500'} ${course?.badge_color === 'green' && 'bg-green-500'} ${course?.badge_color === 'blue' && 'bg-blue-500'}`}>{course?.badge_text}</button>
                        </div>
                    ))
                }
                {!courses && 
                    allCourses.map(course => (
                        <div key={course?.title} className="shadow-sm p-4 rounded-md">
                            <img src={course?.img} alt="course-image" />
                            <h2 className="font-semibold text-lg">{course?.title}</h2>
                            <h3 className="mt-2 text-slate-400">{course?.instructor_name}</h3>
                            <p className="mt-2">{course?.description}</p>
                            <button className={`mt-2 px-3 py-1 rounded-full text-white ${course?.badge_color}`}>{course?.badge_text}</button>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default AllCourses;