import { FaFacebookF, FaGoogle, FaLinkedinIn } from 'react-icons/fa';
import img from '../../assets/images/login/login.svg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const Login = () => {
    const { signIn } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // sign in 
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error.message);
            })
    }

    return (
        <div className='w-[90%] lg:max-w-6xl mx-auto'>
            <div className="hero min-h-screen bg-base-200 my-12 py-12 rounded-lg">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-1/2 mr-12">
                        <img src={img} alt="" />
                    </div>

                    <div className="card shrink-0 w-full max-w-sm mt-6 lg:mt-0">
                        <h1 className="text-5xl font-bold mb-8 text-center">Login now!</h1>
                        <form onSubmit={handleLogin} className="card-body bg-base-100 rounded-xl shadow-2xl">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type='submit' value="Login" className="btn border-[#FF3811] bg-[#FF3811] text-white hover:bg-white hover:text-[#FF3811] font-medium text-base" />
                            </div>
                            <p className='text-center font-medium'>Or Sign In with</p>
                            <div className='flex gap-2 justify-center mt-2'>
                                <span className='bg-[#F5F5F8] p-4 rounded-full text-[#EB4132] text-xl'><FaGoogle /></span>
                                <span className='bg-[#F5F5F8] p-4 rounded-full text-[#3B5998] text-xl'><FaFacebookF /></span>
                                <span className='bg-[#F5F5F8] p-4 rounded-full text-[#0A66C2] text-xl'><FaLinkedinIn /></span>
                            </div>
                            <p className='text-[#737373] font-semibold text-center mt-4'>Are you new here ? <Link to='/sign-up' className='text-[#FF3811] font-bold'>Sign Up</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;