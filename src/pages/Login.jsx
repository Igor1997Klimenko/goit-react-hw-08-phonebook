import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../redux/auth/auth-operations";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import s from './Pages.module.css';
import LoginIcon from '@mui/icons-material/Login';

const Login = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('fill in the fields');
    const [passwordError, setPasswordError] = useState('fill in the fields');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordlDirty, setPasswordDirty] = useState(false);
    const [formValid, setFormvalid] = useState(false);
    const dispatch = useDispatch();

        useEffect(() => {
        if ( emailError || passwordError) {
            setFormvalid(false)
        } else {
            setFormvalid(true) 
        }
    }, [emailError, passwordError])

        const handleBlur = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break;
            case 'password':
                setPasswordDirty(true)
                break;
            default:
                return;
        };
    };

    const handleEmail = (e) => {
        setEmail(e.target.value)
        const re = /^[a-z][a-zA-Z0-9_.]*(\.[a-zA-Z][a-zA-Z0-9_.]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('this email is incorrect')
        } else {
            setEmailError('')
        };
    };

    const handlePassword = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 7 || e.target.value.length > 12) {
            setPasswordError('password must be longer than 7 and less than 12')
            if (!e.target.value) {
                setPasswordError('Password cannot be empty')
            };
        } else {
            setPasswordError('')
        };
    };
    
const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
    };   
    return(
        <form className={s.FormRegister} onSubmit={handleSubmit}>
            <span className={s.RegisterText}><LoginIcon />Login</span>
            
            <p className={s.InputRegister}>
                <TextField
                    className={s.InputEidth}
                    label="Email"
                    variant="outlined"
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleEmail}
                    onBlur={e => handleBlur(e)}
                />
                {(emailError && emailDirty) && <div className={s.ErrorType}>{emailError}</div>}
                </p>
                
            <p className={s.InputRegister}>
                <TextField
                    className={s.InputEidth}
                    label="Password"
                    variant="outlined"
                    type="password"
                    name="password"
                    value={password}
                    onChange={handlePassword}
                    onBlur={e => handleBlur(e)}
            />
                {(passwordError && passwordlDirty) && <div className={s.ErrorType}>{passwordError}</div>}
                </p>
                
            <Button
                disabled={!formValid}
                className={s.ButtRegis}
                variant="outlined"
                type="submit"
            >Login</Button>
        </form>
    )
}

export default Login;