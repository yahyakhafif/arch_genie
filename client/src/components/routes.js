import { Route, Routes, Navigate } from 'react-router-dom';
import MainPage from '/MainPage';
import SigninPage from '/SigninPage';

export default function Routing() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}