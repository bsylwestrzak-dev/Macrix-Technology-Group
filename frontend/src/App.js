import React from 'react';
import './App.css'
import { useSelector } from 'react-redux';
import { Table } from './components/Table';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  const isModal = useSelector(({ statusReducer }) => statusReducer.isModal);
  return (
    <div className={isModal ? 'dimmed-background' : ''}>
      <Table />
      <ToastContainer />
    </div>
  );
}

export default App;
