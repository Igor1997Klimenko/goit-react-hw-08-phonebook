import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "redux/auth/auth-operations";

const Registration = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

const handleInputChange = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value)
                break;
            case 'email':
                setEmail(value)
                break;
            case 'password':
                setPassword(value)
                break;
            default:
                return;
        }
    }
    
const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
    }; 
   
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Name
                    <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    />
                </label>
                

                <label>
                    Email
                    <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    />
                </label>
                
                <label>
                    Password
                    <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                />
                </label>
                
                <button type="submit">Login</button>
            </div>
            
        </form>
    )
}

export default Registration;