import Swal from 'sweetalert2'

const CreateUser = () => {

    const handleRegister =( e )=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = {name, email, password}
        console.log(user)
        fetch('http://localhost:5000/users',{

        method:"POST",
        headers:{
            'content-type': ' application/json'
        },
        body: JSON.stringify(user)
        
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })

                  form.reset()
            }
        })
        .catch(error => console.log(error))
    }
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="card flex-shrink-0 w-4/6 max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Register" className="btn btn-primary" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        
            
        </>
    );
};

export default CreateUser;