import React from 'react';
import Header from './components/Header';
import SeriesList from './components/SeriesList';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  return (
    <div>
      <ThemeContextProvider>
        <Header />
        <SeriesList />
      </ThemeContextProvider>
    </div>
  )
}

export default App;
