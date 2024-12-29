import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useContext } from "react";
import {AuthContext} from '../context/AuthProvider'


const Navbar = () => {
    const {user, setUser} = useContext(AuthContext);
    // console.log(user)
    const navigate = useNavigate()
    const handleSignOut = () =>{
        localStorage.removeItem('token');
        setUser({})
        navigate('/')
    }
    return (
        <section className="px-4 py-2 bg-yellow-300 flex flex-row justify-between items-center">
            <h2 className="text-4xl text-slate-800 font-semibold">Microdeft</h2>
            <div className="mt-4 space-x-4">
            {
                user?.name ? <>
                    <span>{user?.name}</span>
                    <Button handler={handleSignOut}>Sign out</Button>
                </> : (
                    <>
                        <Link className="text-zinc-900 hover:text-blue-800" to={'/login'}>Login</Link>
                        <Button><Link to={'/register'}>Register</Link></Button>
                    </>
                )
            }
            <Button><Link to={'/addCourse'}>Add Course</Link></Button>
            <Button><Link to={'/allCourses'}>All Courses</Link></Button>
            </div>
        </section>
    );
};

export default Navbar;