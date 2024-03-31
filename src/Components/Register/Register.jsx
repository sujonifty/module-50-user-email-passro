
const Register = () => {
const handleSubmit=e=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password= e.target.password.value;
    console.log(email,password)

}
    return (
        <div>
            <h1 className="text-3xl">Please Register</h1>
            <form onSubmit={handleSubmit} className="w-1/3 mx-auto">
                
                <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                    <input name="email"type="email" className="grow" placeholder="Email" />
                </label>
                <label>
                <input name="password" type="password" placeholder="password" className="input  input-bordered input-md w-full max-w-xs" />

                </label><br />
                <input type="submit" value="Register" className="btn" />
            </form>
        </div>
    );
};

export default Register;