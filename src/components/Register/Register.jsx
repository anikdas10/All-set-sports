import { useContext, useState } from "react";
import { AuthContext } from "../../assets/AuthProvider/AuthProvider";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { GoogleAuthProvider } from "firebase/auth";

const Register = () => {

    const [toggle,setToggle] = useState(true);
    const [err,setErr] = useState('');
    const {createUser,setUser,updateUserProfile,loginUserWithGoogle} = useContext(AuthContext);
    // const navigate = useNavigate();
    const handleRegister = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        // regex for password validation
        const regexA = /^(?=.*[A-Z]).*$/;
        const regexa = /^(?=.*[a-z]).*$/; 

        setErr('');

        if(!regexA.test(password)){
            setErr('Must have an Uppercase letter in the password ');
            return;
        }
        if(!regexa.test(password)){
            setErr('Must have a Lowercase letter in the password ');
            return;
        }
        if(password.length<6)
        {
            setErr("Password Should be at least 6 character long");
        }
        if(password.length<6)
        {
            setErr('Password must be at least 6 character');
            return;
        }

        createUser(email,password)
        .then(result=>
            {
                updateUserProfile({displayName:name,photoURL:photo})
                .then(()=>{
                    //  navigate(location?.state?location?.state:'/');
                    // console.log(result);
                })
                .catch(err=>console.log(err));

                const user = result.user;
                setUser(user);
                console.log(user);
                Swal.fire({
                title: "Register Successful",
                icon: "success",
                confirmButtonText: "Close" 
             })
            })

        .catch(err=>console.log(err));

         }

     const handleGoogleLogin = () =>{
      const provider = new GoogleAuthProvider();
      loginUserWithGoogle(provider)
      .then(result=>{
        setUser(result.user);
        //  navigate(location?.state?location?.state:'/');
          Swal.fire({
                title: "Login Successful",
                icon: "success",
                confirmButtonText: "Close" 
             })

      })
    }

    return (
       <div className=" min-h-[90vh]">

        <div className="min-h-[500px] flex items-center justify-center py-10 lg:py-20">
       
          <div className="card bg-base-100 w-full max-w-xl border md:mt-12 shrink-0 shadow-md">
             <div className="text-center font-bold text-xl p-4">
            <h2>Register your account</h2>
             </div>
             <hr />
      <form className="card-body" onSubmit={handleRegister}>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Your Name</span>
          </label>
          <input type="text" 
          name="name"
          placeholder="Enter your Name" className="input bg-gray-100" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Photo URL</span>
          </label>
          <input type="text" 
          name="photoUrl"
          placeholder="Enter your photoURL" className="input bg-gray-100" required />
        </div>
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
          <div className="mt-4 text-red-500">
           <p>
            {err}
           </p>
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#178582] text-white hover:text-black">Register</button>
        </div>
      </form>
      <div className="border-t py-4 mx-9 ">
            <button onClick={handleGoogleLogin} className="btn bg-[#178582] w-full text-white ">Login with Google <FaGoogle/></button>
            <h2 className="text-center font-semibold text-lg my-2">Already have and account? <Link to='/login' className="text-[#00ABE4]">Login.</Link></h2>
      </div>
    </div>
     </div>
       </div>
    );
};

export default Register;