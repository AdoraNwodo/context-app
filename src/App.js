import React from 'react';
import Header from './components/Header';
import SeriesList from './components/SeriesList';
import ThemeContextProvider from './contexts/ThemeContext';

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
