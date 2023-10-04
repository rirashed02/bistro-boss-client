import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form"
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
    const { register, handleSubmit, watch, reset, formState: { errors }, } = useForm()
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const userCreate = result.user;
                console.log(userCreate)
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User create successful.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        reset()
                        Navigate('/')
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => {
                console.log(error)
            })
    }

    console.log(watch("example")) // watch input value by passing the name of it
    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Sign up now!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} placeholder="Enter your name" className="input input-bordered" />
                                    {errors.name && <small className="text-red-600">Name field is required</small>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">photo</span>
                                    </label>
                                    <input type="url" {...register("photo", { required: true })} placeholder="Enter your photo Url" className="input input-bordered" />
                                    {errors.photo && <small className="text-red-600">photo Url field is required</small>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} placeholder="Enter your email" className="input input-bordered" />
                                    {errors.email && <small className="text-red-600">Email field is required</small>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 16,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })}
                                        placeholder="password" className="input input-bordered" />
                                    {errors.password?.type === 'required' && <small className="text-red-600">Password field is required</small>}
                                    {errors.password?.type === 'pattern' && <small className="text-red-600"> Password must have one upper case, one lower case, one number and one special character  </small>}
                                    {errors.password?.type === 'minLength' && <small className="text-red-600"> Password must be 6 characters </small>}
                                    {errors.password?.type === 'maxLength' && <small className="text-red-600"> Password Must be less then 16 Characters </small>}
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" className="btn btn-primary" value="Sign Up" />
                                </div>
                                <p>Already Have an Account? <Link className="underline" to='/login'>Login</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;