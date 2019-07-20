import React from 'react';
import Header from './components/Header';
import SeriesList from './components/SeriesList';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';

const App = () => {
  return (
    <div>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Header />
          <SeriesList />
        </AuthContextProvider>  
      </ThemeContextProvider>
    </div>
  )
}

export default App;
