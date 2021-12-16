import './App.css';
import React from 'react';
import Contact from '../components/Contact'
import About from '../components/About'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import MainContent from './MainContent';
import Layout from './Layout';

function App() {

  return (
    <>
       <BrowserRouter>
          <Layout>
            <Routes>
                <Route path="/" exact element={<MainContent />} />
                <Route path="about" exact element={<About />} />
                <Route path="contact" exact element={<Contact />} />
            </Routes>
          </Layout>
        </BrowserRouter>
    </>
  );
}

export default App;
