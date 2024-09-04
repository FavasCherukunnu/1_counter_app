// src/App.js
import React from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';
import './App.css';

const AppContent = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`App ${theme}-theme`}>
      <header className="App-header">
        <h1>Theme Switcher</h1>
        <ThemeSwitcher />
      </header>
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;
