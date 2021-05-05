import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (

        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">VALIDATION</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto pr-5">
                        <li className="nav-item ">
                            <Link to='/validation' className="nav-link">Validation</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to='/validationwithyup' className="nav-link">Validation+Yup</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header