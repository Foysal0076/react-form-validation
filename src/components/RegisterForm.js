import React from 'react'
import { useForm } from "react-hook-form"

let renderCount = 0

const RegisterForm = () => {
    renderCount++
    const { register, handleSubmit, formState: { errors } } = useForm()

    return (
        <div className="row h-100">
            <div className="col-md-6 mx-auto ">
                <div className="card  my-2">
                    <div className="card-body py-0">
                        <h4> {`Render Count: ${renderCount}`} </h4>
                    </div>
                </div>
                <div className="card shadow bg-light form-container">
                    <div className="card-body">
                        <form noValidate onSubmit={handleSubmit((data) => console.log(data))} >
                            <h2 className='text-center p-2' >Sign Up</h2>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input {...register('name', { required: 'Name is required', maxLength: { value: 4, message: 'Name must be between 1 to 4 character' } })} type="text" className={errors.name ? 'form-control is-invalid' : 'form-control'} />
                                {errors.name && <p className='invalid-feedback form-text' >{errors.name.message}</p>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input {...register('email', { required: 'Email is required', pattern: { value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, message: 'Invalid email address' } })} type="email" className={errors.email ? 'form-control is-invalid' : 'form-control'} />
                                {errors.email && <p className='invalid-feedback form-text' >{errors.email.message}</p>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input {...register('password', { required: true, minLength: 4 })} type="password" className={errors.password ? 'form-control is-invalid' : 'form-control'} />
                                {errors.password && <p className='invalid-feedback form-text' >{errors.password.message}</p>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input {...register('confirmPassword', { required: true })} type="password" className={errors.confirmPassword ? 'form-control is-invalid' : 'form-control'} />
                                {errors.confirmPassword && <p className='invalid-feedback form-text' >{errors.confirmPassword.message}</p>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="age">Age</label>
                                <input {...register('age', { required: true, valueAsNumber: true, pattern: /\d+/ })} type="number" className={errors.age ? 'form-control is-invalid' : 'form-control'} />
                                {errors.age && <p className='invalid-feedback form-text' >{errors.age.message}</p>}
                            </div>

                            <div className="form-group form-check">
                                <input {...register('check')} type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="check">Developer</label>
                            </div>

                            <button type="submit" className="btn btn-outline-success w-100">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm