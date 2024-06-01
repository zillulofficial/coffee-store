import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";

const SignUp = () => {

    const [showPassword, setShowPassword]= useState(false)
    const handleSubmit= e=> {
        e.preventDefault()
        const form= e.target
        const name= form.name.value
        const email= form.email.value
        const password= form.password.value
        const userInfo= {name, email, password}
        console.log(userInfo)
    }
    return (
        <div>
            <div className="hero min-h-screen bg-[url('https://i.ibb.co/DK8dySJ/vecteezy-illustration-of-people-trying-to-solve-the-puzzle-of-9734274.jpg')] bg-cover lg:bg-[length:1334px_950px] bg-no-repeat">
                <div className="hero-content ">
                    <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div>
                                <h3 className="text-4xl font-bold mb-6">_SignUp_</h3>
                                <p className="text-lg">SignUp now to get connected with our latest updat<br className="hidden lg:block" />es & features</p>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative ">
                                    <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input w-full input-bordered"
                                    />
                                    <span className="absolute top-4 right-4" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword? <IoMdEyeOff></IoMdEyeOff>: <FaEye></FaEye>
                                        }
                                    </span>
                                </div>
                            </div>
                            <div className="form-control mt-6 mb-4">
                                <button className="btn text-white bg-[#836fff] hover:bg-[#836fff66] border-nones text-lg">SignUp</button>
                            </div>

                            <div className="flex justify-between items-center">
                                <p>ALready SignUped?</p>
                                <Link to="/login"><button className=" text-black hover:bg-[#c24e0033] px-4 py-2 rounded-full border-nones font-bold">Login Now</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;