import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import Container from './Component/Container/Container';
import authOperations from './redux/auth/auth-operations';
import PrivateRoute from 'Component/PrivateRoute';
import PublicRoute from 'Component/PublicRoute';
import authSelectors from 'redux/auth/auth-selector';
import { Plane } from 'react-loader-spinner'
import Header from 'Component/Header/Header';
import Footer from 'Component/Footer/Footer';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

const HomePages = lazy(() => import('./pages/Home'));
const RegistrationPages = lazy(() => import('./pages/Registration'));
const LoginPages = lazy(() => import('./pages/Login'));
const ContactsPages = lazy(() => import('./pages/ContactsBooks'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  const isFetchingCurrentUser = useSelector(authSelectors.isFetchingCurrent);

  return (
    !isFetchingCurrentUser ? (
      <div>
      <Header/>
      <Container>  
          <Suspense fallback={<span style={{display: 'flex', position: 'fixed',top: '10%'}}><Plane ariaLabel="loading-indicator" /></span>}>
          <Routes>
            <Route path='/' element={
              <PublicRoute>
                <HomePages />
              </PublicRoute>} />
          
            <Route path='register' element={
              <PublicRoute restricted>
                <RegistrationPages />
              </PublicRoute>} />
          
            <Route path='login' element={
              <PublicRoute restricted>
                <LoginPages />
              </PublicRoute>} />

            <Route path='contacts' element={
              <PrivateRoute>
                <ContactsPages />
              </PrivateRoute>} />
          </Routes>
          </Suspense>
        </Container>
        <Footer/>
        </div>
    ) : (
        <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
          <LinearProgress color="secondary" />
          <LinearProgress color="success" />
          <LinearProgress color="inherit" />
        </Stack>)
  );
};


export default App;
