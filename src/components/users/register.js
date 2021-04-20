import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import userService from '../../services/user-service'

const Register = () => {
    const [credentials, setCredentials] = useState({username: '', password: ''})
    const history = useHistory()
    const register = () => {
        userService.register(credentials)
            .then((user) => {
                console.log(user)
                if (user === 0) {
                    alert("username already taken")
                } else {
                    history.push("/profile")
                }
            })
    };

    return(
        <div>
            <h1>Register</h1>
            <input value={credentials.username}
                   onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                   placeholder="username"
                   className="form-control"/>
            <input type="password"
                   value={credentials.password}
                   onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                   placeholder="password"
                   className="form-control"/>
            <input type="password" placeholder="confirm password"
                   className="form-control"/>
            <select>
                <option>ADMIN</option>
                <option>FACULTY</option>
                <option>STUDENT</option>
            </select>
            <Link onClick={() => register()} className="btn" to="/profile">
                Register
            </Link>
        </div>
    )
}

export default Register;