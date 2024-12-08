import Swal from "sweetalert2";


const Subscribe = () => {
    const formSubmit = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const emailCollection = {email}
        fetch('https://all-set-sports-server.vercel.app/subscribe',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(emailCollection)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId)
            {
                Swal.fire({
             title: "Thank You For Subscribe!",
            icon: "success",
            confirmButtonText: "Close"
            });
            e.target.reset();
            }
        })
    }
    return (
       <div class="mt-20 text-center p-5 border rounded-md max-w-xl mx-auto space-y-2">
  <h2 className="font-bold text-lg md:text-xl lg:text-2xl">Subscribe for Updates</h2>
  <p className="opacity-60">Get the latest deals, product launches, and sports tips directly in your inbox!</p>
  <form onSubmit={formSubmit}>
    <div className="flex items-center gap-3">
        <input type="email"
        name="email" className="input input-bordered w-full" placeholder="Enter your email" required />
    <button className="px-5 py-3 bg-[#278285] text-white rounded-md hover:bg-[#29989c]">Subscribe</button>
    </div>
  </form>
  <p id="response-message"></p>
</div>
    );
};

export default Subscribe;