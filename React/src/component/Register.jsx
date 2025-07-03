import { useState } from "react";
import axios from "axios";

function Register (){
    const [user,setUser] = useState({
        name:"",
        email:"",
        age:"",
        password:"",
        confirm:"",

    });
    const handleChange=(e)=>{
        setUser({...user, [e.target.name]:e.target.value});
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            await axios.post("http://localhost:8080/api/register",user);
            alert("User registered successfully!");
        }
        catch(err){
            console.error(err);
            alert("error occured");
        }
    };
    
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 w-50 shadow">
                 <h2 className="text-center mb-4">Register</h2>
                 <form onSubmit={handle}>
                    <div className="mb-4">
                        <label htmlFor="name" className="form-label">
                        Name
                        </label>
                        <input
                        type="name"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="form-label">
                        Email address
                        </label>
                        <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="age" className="form-label">
                        Age
                        </label>
                        <input
                        type="date"
                        className="form-control"
                        id="age"
                        value={age}
                        onChange={(e) => setage(e.target.value)}
                        required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="form-label">
                        Password
                        </label>
                        <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirm" className="form-label">
                        Confirm password
                        </label>
                        <input
                        type="password"
                        className="form-control"
                        id="confirm"
                        value={confirm}
                        onChange={(e) => setconfirm(e.target.value)}
                        required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                        Regiter
                    </button>
                   
                 </form>
            </div>
        </div>
    );
}

export default Register;