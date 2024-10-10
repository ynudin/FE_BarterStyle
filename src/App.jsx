import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ChallengeDetail from "./pages/ChallengeDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";

function App() {
    const [userName, setUserName] = useState('');

    const handleLogin = (username) => {
        setUserName(username); // Simpan nama pengguna ke dalam state
    };

    const handleLogout = () => {
        setUserName(''); // Reset nama pengguna saat logout
        localStorage.removeItem('loggedInUser'); // Hapus informasi pengguna dari localStorage (jika ada)
    };

    return (
        <Router>
            <Navbar userName={userName} handleLogout={handleLogout} /> {/* Pass userName and handleLogout as props */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage handleLogin={handleLogin} />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/profile" element={<Profile />}/>
                <Route path="/challenge-detail" element={<ChallengeDetail />}/>
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
