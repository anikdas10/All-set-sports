import { useCallback, useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../assets/firebase/firebase.config";
import { AuthContext } from "../../assets/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Login = () => {

  const [error,setError] = useState('');

    const [toggle,setToggle] = useState(false);
    const {loginUserWithGoogle,loginUser,setUser} = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    console.log(location.state);
    const handleSubmit = e =>{
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;

      setError('');

      loginUser(email,password)
      .then(result=>{
        setUser(result.user);
        navigate(location?.state?location?.state:"/");
        Swal.fire({
                title: "Login Successful",
                icon: "success",
                confirmButtonText: "Close" 
             })
      })
      .catch(()=>setError("Invalid email or password!"))

    }

    const handleGoogleLogin = () => {
      const provider = new GoogleAuthProvider();
      loginUserWithGoogle(provider)
      .then(result=>{
        setUser(result.user);
         navigate(location?.state?location?.state:"/");
        Swal.fire({
                title: "Login Successful",
                icon: "success",
                confirmButtonText: "Close" 
             })
      })
      .catch(err=>{
        console.log(err.message);
      })
    }

    return (
        <div className="mt-16 lg:mt-32 container">
          <Helmet>
                <title>Login | AllSet Sports</title>
            </Helmet>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center">Login</h2>

            <div className="md:max-w-2xl mx-auto border-2 rounded-md mt-4 shadow-md">
                <form className="card-body" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Email Address</span>
          </label>
          <input type="email" 
          name="email"
          placeholder="Enter your email" className="input bg-gray-100" required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text font-semibold">Password</span>
          </label>
          <input type={toggle?'text':'password'} 
          name="password"
          placeholder="Enter your password" className="input bg-gray-100" required />
          <div onClick={()=>setToggle(!toggle)} className="absolute right-3 top-[51px] cursor-pointer">
           {
            toggle?<FaEyeSlash />:<FaEye />
           } 
          </div>

        </div>
       <div className="form-control">
           <p className="text-red-600">{error}</p>
       </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#178582] text-white">Login</button>
          
        </div>
                 </form>

                 {/* google loin */}
                  <div className="border-t py-4 mx-9 ">
            <button onClick={handleGoogleLogin} className="btn bg-[#178582] w-full text-white ">Login with Google <FaGoogle/></button>
            <h2 className="text-center font-semibold text-lg my-2">Don't have and account? <Link to='/register' className="text-[#00ABE4]">Register.</Link></h2>
      </div>
            </div>
        </div>
    );
};

export default Login;