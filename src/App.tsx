import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AppContextProvider } from './context/AppContext';
import WorkshopGallery from './pages/WorkShop/WorkshopGallery';
function App() {
  return (
    <AppContextProvider>
      <Routes>
        <Route path='/' element={<WorkshopGallery />} />
      </Routes>
    </AppContextProvider>
  );
}

export default App;
