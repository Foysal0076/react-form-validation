import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from "./components/Header"
import RegisterForm from "./components/RegisterForm"
import RegisterFormWithYup from "./components/RegisterFormWithYup"

function App() {
    return (
        <Router>
            <main>
                <Header />
                <div className="container">
                    <Route exact path='/validation' component={RegisterForm} />
                    <Route exact path='/validationwithyup' component={RegisterFormWithYup} />
                </div>
            </main>
        </Router>
    )
}

export default App
