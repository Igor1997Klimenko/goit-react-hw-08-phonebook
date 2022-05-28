import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../redux/auth/auth-operations";
import { FormData, FormLabel } from "./styles.component";

const Login = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
  
const handleInputChange = e => {
        const { name, value } = e.target;
        switch (name) {
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
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
    };   
    return(
        <FormData onSubmit={handleSubmit}>
          
                <FormLabel>
                    Email
                    <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    />
                </FormLabel>
                
                <FormLabel>
                    Password
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                />
                </FormLabel>
                
                <button type="submit">Login</button>
            
        </FormData>
    )
}

export default Login;