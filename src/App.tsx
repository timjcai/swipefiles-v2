import React from "react";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Board, Create, Dashboard, Settings, SwipesIndex } from "./pages";
import { LandingPage } from "./pages/LandingPage";
import { UserProvider } from "./context";

export const App = () => {
    return (
        <UserProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/boards" element={<Board />} />
                    <Route path="/swipes" element={<SwipesIndex />} />
                </Routes>
            </BrowserRouter>
        </UserProvider>
    );
};

export default App;
