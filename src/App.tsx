import React from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import SideBar from './components/sideBar/SideBar';
import InformationForm from './components/informationForm/InformationForm';
import { Box } from '@mantine/core';

function App() {
  return (
    <div style={{ background: '#FAF6E7' }}>
      <NavBar />
      <Box style={{ display: 'flex', gap: '15px' }}>
        <SideBar />
        <InformationForm />
      </Box>
    </div>
  );
}

export default App;
