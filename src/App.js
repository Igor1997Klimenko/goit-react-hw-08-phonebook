import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import Container from './Component/Container/Container';
import AppBar from './Component/AppBar';
import authOperations from './redux/auth/auth-operations';
import PrivateRoute from 'Component/PrivateRoute';
import PublicRoute from 'Component/PublicRoute';

const HomePages = lazy(() => import('./pages/Home'));
const RegistrationPages = lazy(() => import('./pages/Registration'));
const LoginPages = lazy(() => import('./pages/Login'));
const ContactsPages = lazy(() => import('./pages/ContactsBooks'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
        <Suspense fallback={<p>Загружаем...</p>}>
        <Routes>
          
          <Route path='/' element={
            <PublicRoute>
              <HomePages />
            </PublicRoute>} />
          
          <Route path='register' element={
            <PublicRoute>
              <RegistrationPages />
            </PublicRoute>} />
          
          <Route path='login' element={
            <PublicRoute>
              <LoginPages />
            </PublicRoute>} />

          <Route path='contacts' element={
            <PrivateRoute>
              <ContactsPages/>
            </PrivateRoute>} />
          
          </Routes>
        </Suspense>  
    </Container>
   );
 }

export default App;
