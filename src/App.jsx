import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Home } from './pages/home/home';
import SplashScreen from './components/SplashScreen/SplashScreen'
import Footer from './components/footer/footer';

const App = () => {

  const [showLogin, setShowLogin] = useState(false)
  const [showSplash, setShowSplash] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const pagesWithCurrency = ["/","/products","/orders","/checkout", "/cart", "/confirm"];
  const showCurrencySelector = pagesWithCurrency.includes(location.pathname);


  // useEffect(() => {
  //   if (location.pathname === '/') {
  //     setShowSplash(true);
  //     const timer = setTimeout(() => {
  //       setShowSplash(false);
  //     }, 5000);
  //     return () => clearTimeout(timer);
  //   } else {
  //     setShowSplash(false);
  //   }
  // }, [location.pathname]);


  useEffect(() => {
  const splashSeen = sessionStorage.getItem('splashSeen');

  if (!splashSeen) {
    setShowSplash(true);
    const timer = setTimeout(() => {
      setShowSplash(false);
      sessionStorage.setItem('splashSeen', 'true');
    }, 5000); // ⏱ your splash duration
    return () => clearTimeout(timer);
  } else {
    setShowSplash(false);
  }
}, []);



  return (
    <>
      {location.pathname === '/' && showSplash ? (
        <SplashScreen />
      ) : (
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
          
          </Routes>
          
          
        </div>
      )}

    </>

  );
}

export default App;
