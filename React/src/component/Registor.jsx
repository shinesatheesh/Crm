import { useState } from "react";


let Registor =  ()=>{
    let [name,setname] = useState('');
    let [email,setemail] = useState('');
    let[age , setage] = useState('');
    let [password , setpassword] = useState('');
    let [confirm , setconfirm] = useState('');
    let handle = (e)=>{
        e.preventDefault();
        console.log(name,email);
    }
    
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 w-50 shadow">
                 <h2 className="text-center mb-4">Registor</h2>
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
                        Age
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
                        Age
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
                        Regitor
                    </button>
                   
                 </form>
            </div>
        </div>
    );
}

export default Registor;