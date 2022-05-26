import { Routes, Route } from 'react-router-dom';
// import Container from 'components/Container/Container';
import Registration from 'pages/Registration';
import Login from 'pages/Login';
import ContactsBook from 'pages/ContactsBooks';
import Home from 'pages/Home';
import AppBar from './components/AppBar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import authOperations from 'redux/auth/auth-operations';

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authOperations.fetchCurrentContact())
  }, [dispatch])

  return (
    <>
      <AppBar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='register' element={<Registration />} />
          <Route path='login' element={<Login />} />
          <Route path='contacts' element={<ContactsBook />}/>
        </Routes>
    </>
   );
 }

export default App;
