import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomHeader from "./components/CustomHeader";
import Home from './pages/Home';
import usePageTitle from './hooks/usePageTitle';
import Admin from './pages/Admin';

export default function App() {
  usePageTitle()
  
  return (
    <>
      <CustomHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}
