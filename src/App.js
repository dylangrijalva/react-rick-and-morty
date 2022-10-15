import React from 'react';
import './styles.css';
import { MainScreen } from './screens/MainScreen';
import { NotFoundScreen } from './screens/NotFoundScreen';
import { DetailScreen } from './screens/DetailScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainScreen />}></Route>
        <Route path=":id" element={<DetailScreen />}></Route>
        <Route path="*" element={<NotFoundScreen />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
