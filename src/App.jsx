import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import BlankPage from './components/BlankPage';

function App() {
  return (
    <Router>
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/shop" element={<BlankPage />} />
        <Route path="/explore" element={<BlankPage />} />
        <Route path="/cart" element={<BlankPage />} />
        <Route path="/favourite" element={<BlankPage />} />
        <Route path="/account" element={<BlankPage />} />
      </Routes>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
