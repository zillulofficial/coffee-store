import { useContext } from "react";
import { FaArrowLeft, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const SignIn = () => {

    const {signInUser}= useContext(AuthContext)

    const handleSubmit = e=>{
        e.preventDefault()
        const form = e.target
        const email= form.email.value
        const password= form.password.value
        console.log(email, password)

        signInUser(email, password)
        .then(result=>{
            console.log(result.user)
            const user= {
                email,
                lastLoggedAt: result.user?.metadata?.lastSignInTime
            }
            fetch('http://localhost:5000/users',{
                method: "PATCH",
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
            })
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className="container mx-auto mb-12">
            <Link to="/"><p className="Rancho font-extrabold text-xl flex items-center gap-2 mt-6"><FaArrowLeft></FaArrowLeft>Go Back Home</p></Link>
            <div className="hero min-h-screen bg-[url('https://i.postimg.cc/hjGvgFSD/2.png')] bg-cover lg:bg-[length:700px_736px] bg-no-repeat">
                <div className="hero-content ">
                    <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div>
                                <h3 className="text-4xl font-bold mb-6">_Sign In_</h3>
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
                                <input type="password" name="password" placeholder="password" className="input input-bordered"
                                />

                            </div>
                            <div className="form-control mt-6 mb-4">
                                <button className="btn text-white bg-[#a23b6f] hover:bg-[#a23b6f66] border-nones text-lg">Login</button>
                            </div>
                        </form>
                        <div className="px-8 mb-5">
                            <p className="border-b-2 pb-3">Or Login with</p>
                            <div className="flex items-center justify-between">
                                <button onClick={()=>handleSocialSignIn(googleLogIn)} className="hover:bg-slate-200 rounded-full px-4 py-2 mt-3 flex gap-1 items-center"><FcGoogle className="text-2xl"></FcGoogle>Google</button>
                                <button onClick={()=>handleSocialSignIn(facebookLogIn)} className="hover:bg-slate-200 rounded-full px-4 py-2 mt-3 flex gap-1 items-center"><FaFacebook className="text-2xl text-blue-600"></FaFacebook>Facebook</button>
                            </div>
                        </div>
                        
                        <div className="px-8 mb-5 mt-2 flex justify-between items-center">
                                <p>New in CaffiNation?</p>
                                <Link to="/signup"><button className=" text-black hover:bg-[#c24e0033] px-4 py-2 rounded-full border-nones font-bold">Sign up Now</button></Link>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;