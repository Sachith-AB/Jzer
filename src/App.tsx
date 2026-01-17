import { Routes, Route } from 'react-router-dom';
import CustomHeader from "./components/CustomHeader";
import Home from './pages/Home';

export default function App() {
  return (
    <>
      <CustomHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  )
}
