import React from 'react'


const RegisterForm = () => {
    
    return (
        <div className="row h-100">
            <div className="col-md-6 mx-auto">
                <form >
                    <h2 className='text-center p-2' >Sign Up</h2>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className='form-control' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className='form-control' />
                    </div>

                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>

                    <button type="submit" className="btn btn-outline-primary w-100">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm