import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";

const Login = () => {
    const handleSignIn=(e)=>{
        e.preventDefault();
        const email= e.target.email.value;
        const password= e.target.password.value;
        console.log(email, password);
        // validation 
        signInWithEmailAndPassword(auth, email, password)
        .then((result)=>{
            const user = result.user;
            console.log(user);
        })

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
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="input input-bordered flex items-center gap-2">
                                    <input type="password"  name="password" className="grow" placeholder="password" />
                                    {/* <span onClick={() => { setShowPassword(!showPassword) }}>
                                        {
                                            showPassword ? <PiEyeSlash /> : <LiaEyeSolid />
                                        } type={showPassword ? "text" : "password"}
                                    </span> */}
                                </label>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;