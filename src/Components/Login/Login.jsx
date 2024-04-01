import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
import { useRef, useState } from "react";
import { PiEyeSlash } from "react-icons/pi";
import { LiaEyeSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Login = () => {
    const [showError, setShowError] = useState("");
    const [showSuccess, setShowSuccess] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const emailRef = useRef(null);

    const handleSignIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        // clean the message 
        setShowError('');
        setShowSuccess('');
        // validation 
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                if (user.emailVerified){
                    setShowSuccess('user logged in successfully')
                }
               else{
                alert('please verified your account ');
               }
                console.log(user);
            })
            .catch((error) => {
                const errorMessage = error.code;
                setShowError('Email or Password is wrong!');
                console.log(errorMessage);
            })
    }

    //reset password
    const handleForgetPassword = () => {
        // check validation 
        const email = emailRef.current.value;
        if (!email) {
            console.log('Please provide your email', emailRef.current.value)
        }
        else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            console.log(' Please provide a valid email')
            return;
        }

        sendPasswordResetEmail(auth, email)
            .then(() => {
                console.log('Please check your email');
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                console.log(error);
                // ..
            });

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                ref={emailRef}
                                placeholder="email"
                                className="input input-bordered"
                                required />

                        </div>
                        <div className="form-control">
                            <label className="input input-bordered flex items-center gap-2">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    className="grow"
                                    placeholder="password" />

                                <span onClick={() => { setShowPassword(!showPassword) }}>
                                    {
                                        showPassword ? <PiEyeSlash /> : <LiaEyeSolid />
                                    }
                                </span>
                            </label>
                            <label className="label">
                                <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        {
                            showError && <p className="text-red-700">{showError}</p>
                        }
                        {
                            showSuccess && <p className="text-green-700">{showSuccess}</p>
                        }
                        <p>New to website? Please <Link className="font-medium text-blue-700" to="/heroRegister">Register</Link></p>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;