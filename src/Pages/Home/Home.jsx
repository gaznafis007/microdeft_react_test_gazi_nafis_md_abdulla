import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import { useEffect } from "react";


const Home = () => {
    useEffect(()=>{
        const token = `Bearer ${localStorage.getItem('token')}`;
        console.log(token)
        fetch('https://react-interview.crd4lc.easypanel.host/api/course',{
            headers:{
                Authorization: token,
                'X-Requested-With': 'XMLHttpRequest'
            },
        })
        .then(res => {
            console.log(res);
            res.json()
        })
        .then(data=> console.log(data))
    }, [])
    return (
        <div className="mt-6 border border-slate-700 p-6 mx-6">
            <h2 className="text-6xl text-zinc-600 text-center p-12">This is home</h2>
            <div className="mt-4 space-x-4">
            <Link className="text-zinc-900 hover:text-blue-800" to={'/login'}>Login</Link>
            <Button><Link to={'/register'}>Register</Link></Button>
            <Button><Link to={'/addCourse'}>Add Course</Link></Button>
            </div>
        </div>
    );
};

export default Home;