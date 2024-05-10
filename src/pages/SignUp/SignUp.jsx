import { useContext } from 'react';
import img from '../../assets/images/login/login.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const SignUp = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        console.log(name, email, password);

        // create user 
        createUser(email, password)
            .then(result => {
                updateUserProfile(name, photoURL);
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
                        <h1 className="text-5xl font-bold mb-8 text-center">Sign Up</h1>
                        <form onSubmit={handleSignUp} className="card-body bg-base-100 rounded-xl shadow-2xl">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Confirm password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name="photoURL" placeholder="Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input type='submit' value="Sign Up" className="btn border-[#FF3811] bg-[#FF3811] text-white hover:bg-white hover:text-[#FF3811] font-medium text-base" />
                            </div>
                            <p className='text-[#737373] font-semibold text-center mt-4'>Already have an account ? <Link to='/login' className='text-[#FF3811] font-bold'>Sign In</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;