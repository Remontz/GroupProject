import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import OnePlayer from './pages/OnePlayer';
import { Routes, Route, Navigate } from 'react-router-dom';
import JoinLobby from "./pages/JoinLobby";

function App() {
  return (
    <div className="h-screen bg-gray-50 flex flex-col items-center">
      <NavBar />
      <Routes>
        <Route element={<Navigate to="/lobriary/homepage" />} path="/" />
        <Route element={<HomePage />} path="/lobriary/homepage" />
        <Route element={<OnePlayer />} path="lobriary/user/:id" />
        <Route element={<JoinedLobby />} path="lobriary/user/:id/joinlobby" />
      </Routes>
    </div>
  );
}

export default App;
