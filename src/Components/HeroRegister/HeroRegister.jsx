import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
import { useState } from "react";
import { PiEyeSlash } from "react-icons/pi";
import { LiaEyeSolid } from "react-icons/lia";


const HeroRegister = () => {

    const [registerError, setRegisterError] = useState('');
    const [registerSuccess, setRegisterSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleHeroRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const Accepted = e.target.terms.checked;
        console.log(email, password);
        // clear massage 
        setRegisterError('');
        setRegisterSuccess('');
        //validation 
        if (password.length < 6) {
            setRegisterError(' Password should be at least 6 characters')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError(' Please provide at least one  upper case characters')
            return;
        }
        else if (!Accepted) {
            setRegisterError(' Please accept the terms and condition')
            return;
        }
        //create user
        createUserWithEmailAndPassword(auth, email, password)
            .then((result => {
                const user = result.user;
                console.log(user);
                setRegisterSuccess('Register successfully')
            }))
            .catch((error) => {
                console.error(error);
                setRegisterError(error.message)
            })

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleHeroRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type={showPassword ? "text" : "password"} name="password" className="grow" placeholder="password" />
                                    <span onClick={() => { setShowPassword(!showPassword) }}>
                                        {
                                            showPassword ? <PiEyeSlash /> : <LiaEyeSolid />
                                        }
                                    </span>
                                </label>
                                
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                
                            </div>
                            <label className="label " htmlFor="terms">
                                    <input type="checkbox" name="terms"  />
                                    Accept our <a href="">terms & conditions</a>
                                </label>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        {
                            registerError && <p className="text-red-700">{registerError}</p>
                        }
                        {
                            registerSuccess && <p className="text-green-700">{registerSuccess}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroRegister;