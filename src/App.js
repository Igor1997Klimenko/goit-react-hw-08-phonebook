import { Routes, Route } from 'react-router-dom';
// import Container from './Component/Container/Container';
import Registration from 'pages/Registration';
import Login from 'pages/Login';
import ContactsBook from 'pages/ContactsBooks';
import Home from 'pages/Home';
import AppBar from './components/AppBar';

const App = () => {

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
