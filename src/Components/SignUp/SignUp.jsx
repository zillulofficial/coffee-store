import { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false)

    const { createUser } = useContext(AuthContext)
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        createUser(email, password)
            .then(result => {
                console.log(result.user)

                const addedTime= result.user?.metadata?.creationTime 
                const user = { email,createdAt: addedTime  }
                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.insertedId) {
                            Swal.fire({
                                title: 'Success!',
                                text: 'User added successfully',
                                icon: 'success',
                                confirmButtonText: 'Okay'
                            })
                        }
                    })
            })
            .catch((error) => {
                console.error(error.message)
            });
    }
    return (
        <div className="container mx-auto">
            <Link to="/"><p className="Rancho font-extrabold text-xl flex items-center gap-2 mt-6"><FaArrowLeft></FaArrowLeft>Go Back Home</p></Link>
            <div className="hero min-h-screen bg-[url('https://i.postimg.cc/43ZJLWjx/bg2.jpg')] bg-cover lg:bg-[length:1470px_650px] bg-no-repeat">
                <div className="hero-content ">
                    <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div>
                                <h3 className="text-4xl font-bold mb-6 text-center">SignUp</h3>
                                <p className="text-lg">SignUp now to get connected with our latest updat<br className="hidden lg:block" />es & features</p>
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
                                            showPassword ? <IoMdEyeOff></IoMdEyeOff> : <FaEye></FaEye>
                                        }
                                    </span>
                                </div>
                            </div>
                            <div className="form-control mt-6 mb-4">
                                <button className="btn text-white bg-[#a23b6f] hover:bg-[#a23b6f33] border-none text-lg">SignUp</button>
                            </div>

                            <div className="flex justify-between items-center">
                                <p>ALready Signed Up?</p>
                                <Link to="/login"><button className=" text-black hover:bg-[#a23b6f33] px-4 py-2 rounded-full border-nones font-bold">Sign in Now</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;