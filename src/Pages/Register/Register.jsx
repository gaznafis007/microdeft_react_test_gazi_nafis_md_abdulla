import { useForm } from "react-hook-form";
import Button from "../../Components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";


const Register = () => {
    const {register, handleSubmit, formState:{errors}} = useForm();
    const {setUser, isLoading, setIsLoading} = useContext(AuthContext);
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const handleRegister =data =>{
        setIsLoading(true)
        fetch('https://react-interview.crd4lc.easypanel.host/api/register', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(registerData =>{
            console.log(registerData)
            if(registerData.status){
                setUser(registerData?.data?.user);
                localStorage.setItem('token', registerData?.data?.token);
                setIsLoading(false);
                setError('')
                navigate('/')
            }else{
                setError('Something went wrong! Please try again');
                setIsLoading(false);
            }
        })
    }
    return (
        <section className="mt-8 md:mt-12 mx-6 md:mx-16">
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0">
                <div className="w-full md:w-1/2 rounded-md">
                    <img className="w-full rounded-md" src="https://images.pexels.com/photos/2451622/pexels-photo-2451622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="login-image" />
                </div>
                <form onSubmit={handleSubmit(handleRegister)} className="w-full md:w-1/2 px-4 py-2">
                    <h2 className="text-3xl text-center font-bold">Register!</h2>
                    <div className="w-full md:w-2/3 mx-auto">
                    <div className="mt-4 flex flex-col">
                        <label className="font-semibold">Name</label>
                        <input type="text" {...register('name', {required:true})} placeholder="Enter your name" className="border border-slate-800 rounded-md w-full mt-3 py-2 px-1" />
                        {
                            errors?.name && <p className="mt-3 text-red-500 capitalize">please enter your name.</p>
                        }
                    </div>
                    <div className="mt-4 flex flex-col">
                        <label className="font-semibold">Email</label>
                        <input type="email" {...register('email', {required:true})} placeholder="Enter password" className="border border-slate-800 rounded-md w-full mt-3 py-2 px-1" />
                        {
                            errors?.email && <p className="mt-3 text-red-500 capitalize">please enter your email.</p>
                        }
                    </div>
                    <div className="my-4 flex flex-col">
                        <label className="font-semibold">Password</label>
                        <input type="password" {...register('password', {required:true, minLength: 8})} placeholder="Enter password" className="border border-slate-800 rounded-md w-full mt-3 py-2 px-1" />
                        {
                            errors?.password && <p className="mt-3 text-red-500 capitalize">please enter your password, and with a length of minimum 8 characters.</p>
                        }
                    </div>
                    <Link to='/login' className="font-thin text-slate-800 hover:underline">Already an user? please login</Link>
                    {error && <p className="text-red-500 my-2">{error}</p>}
                    <Button btnType={'submit'} options={'w-full mt-6 md:mt-16'}>{isLoading ? 'Loading...' : 'Register'}</Button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Register;