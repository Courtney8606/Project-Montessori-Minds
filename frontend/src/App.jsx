import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import TestPage from './pages/TestPage'; 
import NavigationBar from './components/NavigationBar';

function App() {
  const [test, setTest] = useState([]);

  const fetchTest = async () => {
    const response = await axios.get("http://localhost:5001/test");
    setTest(response.data);
  };

  useEffect(() => {
    fetchTest();
  }, []);

  return (
    <BrowserRouter>
    <NavigationBar />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/test" element={<TestPage test={test} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
