import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import Container from './Component/Container/Container';
import AppBar from './Component/AppBar';
import authOperations from './redux/auth/auth-operations';
import PrivateRoute from 'Component/PrivateRoute';
import PublicRoute from 'Component/PublicRoute';
import authSelectors from 'redux/auth/auth-selector';
import { Plane } from 'react-loader-spinner'
import Header from 'Component/Header/Header';

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
      <>
      {/* <Header/> */}
      <Container>
        
        <AppBar />
        <Suspense fallback={<Plane ariaLabel="loading-indicator" />}>
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
        </>
    ) : (
      <h1>Показываем приложение Phonebook</h1>)
  );
};


export default App;
