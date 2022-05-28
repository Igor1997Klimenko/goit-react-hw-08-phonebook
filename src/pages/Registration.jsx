import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../redux/auth/auth-operations";
import { FormData, FormLabel } from "./styles.component";

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
        <FormData onSubmit={handleSubmit}>
            
                <FormLabel>
                    Name
                    <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    />
                </FormLabel>
                

                <FormLabel>
                    Email
                    <input
                    type="text"
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

export default Registration;