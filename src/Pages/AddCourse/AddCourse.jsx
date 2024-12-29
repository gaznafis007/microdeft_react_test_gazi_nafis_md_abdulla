
import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../Components/Button";
import Swal from "sweetalert2";
import Login from '../Login/Login';
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
    const token = localStorage.getItem('token')
    const {register, handleSubmit, formState:{errors}, reset} = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const handleAddCourse = (data) => {
        console.log(data)
        setIsLoading(true);
        const token = localStorage.getItem('token');
        console.log('Token:', token); // Check if token is valid
    
        if (!token) {
            setError('Token is missing or invalid.');
            setIsLoading(false);
            return;
        }
    
        fetch('https://react-interview.crd4lc.easypanel.host/api/course', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(registerData => {
            console.log(registerData); // Log the response for debugging
            if (registerData?.status) {
                Swal.fire(registerData?.status_message);
                reset();
                navigate('/allCourses')
            } else {
                setError(registerData?.status_message);
                setIsLoading(false);
            }
        })
        .catch(err => {
            console.error('Error:', err); // Catch and log any errors
            setError('There was an issue with the request.');
            setIsLoading(false);
        });
    };
    if(!token){
        return <Login/>
    }
  return (
    <section className="mt-8 md:mt-12 mx-6 md:mx-16">
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0">
                <div className="w-full md:w-1/2 rounded-md">
                    <img className="w-full rounded-md" src="https://images.pexels.com/photos/4195504/pexels-photo-4195504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="login-image" />
                </div>
                <form onSubmit={handleSubmit(handleAddCourse)} className="w-full md:w-1/2 px-4 py-2">
                    <h2 className="text-3xl text-center font-bold">Add a course!</h2>
                    <div className="w-full md:w-2/3 mx-auto">
                    <div className="mt-4 flex flex-col">
                        <label className="font-semibold">Course Title</label>
                        <input type="text" {...register('title', {required:true})} placeholder="Enter your name" className="border border-slate-800 rounded-md w-full mt-3 py-2 px-1" />
                        {
                            errors?.name && <p className="mt-3 text-red-500 capitalize">please enter your name.</p>
                        }
                    </div>
                    <div className="mt-4 flex flex-col">
                        <label className="font-semibold">Instructor Name</label>
                        <input type="text" {...register('instructor_name', {required:true})} placeholder="Enter your name" className="border border-slate-800 rounded-md w-full mt-3 py-2 px-1" />
                        {
                            errors?.name && <p className="mt-3 text-red-500 capitalize">please enter your name.</p>
                        }
                    </div>
                    <div className="mt-4 flex flex-col">
                        <label className="font-semibold">Description</label>
                        <textarea type="text" {...register('description', {required:true})} placeholder="Enter your name" className="border border-slate-800 rounded-md w-full mt-3 py-4 px-2"></textarea>
                        {
                            errors?.name && <p className="mt-3 text-red-500 capitalize">please enter your name.</p>
                        }
                    </div>
                    <div className="mt-4 flex flex-col">
                        <label className="font-semibold">Course Type</label>
                        <select type="text" {...register('badge_text', {required:true})} placeholder="Enter your name" className="border border-slate-800 rounded-md w-full mt-3 py-2 px-1">
                            <option value={'featured'}>Featured</option>
                            <option value={'regular'}>Regular</option>
                            <option value={'premium'}>Premium</option>
                        </select>
                        {
                            errors?.name && <p className="mt-3 text-red-500 capitalize">please enter your name.</p>
                        }
                    </div>
                    <div className="mt-4 flex flex-col">
                        <label className="font-semibold">Course Color Type</label>
                        <select type="text" {...register('badge_color', {required:true})} placeholder="Enter your name" className="border border-slate-800 rounded-md w-full mt-3 py-2 px-1">
                            <option >Select one</option>
                            <option value={'red'}>Featured</option>
                            <option value={'green'}>Regular</option>
                            <option value={'blue'}>Premium</option>
                        </select>
                        {
                            errors?.name && <p className="mt-3 text-red-500 capitalize">please enter your name.</p>
                        }
                    </div>
                    
                    {error && <p className="text-red-500 my-2">{error}</p>}
                    <Button btnType={'submit'} options={'w-full mt-6 md:mt-16'}>{isLoading ? 'Loading...' : 'Add Course'}</Button>
                    </div>
                </form>
            </div>
        </section>
  );
};

export default AddCourse;
