import React from 'react'
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string()
        .email('Invalid email')
        .required('Email is required'),
    password: yup.string()
        .min(4, 'Password must be at least 4 characters')
        .max(15, 'Password cannot be more than 15 characters')
        .required(),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null]),
    age: yup
        .number()
        .typeError('You must specify a number')
        .positive('Age must be positive number')
        .integer('Must be an integer value')
        .required('Age is required'),
    developer: yup.boolean(),
})

const RegisterFormWithYup = () => {

    const formValues = {
        name: 'Foysal Ahmed',
        email: 'foysalxahmed@gmail.com'
    }
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: formValues,
        resolver: yupResolver(schema)
    })

    return (
        <div className="row h-100">
            <div className="col-md-6 mx-auto ">
                <div className="card shadow bg-light form-container">
                    <div className="card-body">
                        <form noValidate onSubmit={handleSubmit((data) => console.log(data))} >
                            <h2 className='text-center p-2' >Validation with Yup</h2>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    {...register('name')}
                                    className={errors.name ? 'form-control is-invalid' : 'form-control'}
                                // ref={register}
                                />
                                {errors.name && <p className='invalid-feedback form-text' >{errors.name.message}</p>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input
                                    type="email"
                                    {...register('email')}
                                    className={errors.email ? 'form-control is-invalid' : 'form-control'}
                                // ref={register}
                                />
                                {errors.email && <p className='invalid-feedback form-text' >{errors.email.message}</p>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    {...register('password')}
                                    className={errors.password ? 'form-control is-invalid' : 'form-control'}
                                // ref={register}
                                />
                                {errors.password && <p className='invalid-feedback form-text' >{errors.password.message}</p>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input
                                    type="password"
                                    {...register('confirmPassword')}
                                    className={errors.confirmPassword ? 'form-control is-invalid' : 'form-control'}
                                // ref={register}
                                />
                                {errors.confirmPassword && <p className='invalid-feedback form-text' >Password must match</p>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="age">Age</label>
                                <input
                                    type="number"
                                    {...register('age', { valueAsNumber: true })}
                                    className={errors.age ? 'form-control is-invalid' : 'form-control'}
                                // ref={register}
                                />
                                {errors.age && <p className='invalid-feedback form-text' >{errors.age.message}</p>}
                            </div>

                            <div className="form-group form-check">
                                <input
                                    type="checkbox"
                                    {...register('developer')}
                                    className="form-check-input"
                                    id="exampleCheck1"
                                // ref={register}
                                />
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

export default RegisterFormWithYup
