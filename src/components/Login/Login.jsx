import { useCallback, useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { auth } from "../../assets/firebase/firebase.config";
import { AuthContext } from "../../assets/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
    const [toggle,setToggle] = useState(false);
    const {loginUserWithGoogle,setUser} = useContext(AuthContext);
    const handleSubmit = e =>{

    }

    const handleGoogleLogin = () => {
      const provider = new GoogleAuthProvider();
      loginUserWithGoogle(provider)
      .then(result=>{
        console.log(result.user);
        setUser(result.user);
      })
      .catch(err=>{
        console.log(err.message);
      })
    }

    return (
        <div className="mt-24 md:mt-32">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Login</h2>

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