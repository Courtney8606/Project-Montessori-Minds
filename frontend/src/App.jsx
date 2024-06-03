import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import Layout from './components/Layout';
import ValuesPage from './pages/ValuesPage';
import TeamPage from './pages/TeamPage';
import RoomsPage from './pages/RoomsPage';
import FoodPage from './pages/FoodPage';
import OutdoorPage from './pages/OutdoorPage';
import ContactPage from './pages/ContactPage';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Footer from './components/Footer/Footer';
import { HelmetProvider } from "react-helmet-async";

function App() {

  return (
    <BrowserRouter>
    <Layout>
      <HelmetProvider>
      <NavigationBar/>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/values" element={<ValuesPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/rooms" element={<RoomsPage />} />
      <Route path="/food" element={<FoodPage />} />
      <Route path="/outdoor" element={<OutdoorPage />} />
      <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer/>
      </HelmetProvider>
    </Layout>
    </BrowserRouter>
  )
}

export default App
