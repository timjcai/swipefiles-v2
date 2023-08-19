import React from "react";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider, ThemeProvider } from "./context";
import { Login, Register } from "./components/auth";
import {
    FAQ,
    Pricing,
    LandingPage,
    Board,
    Create,
    Dashboard,
    Settings,
    SwipesIndex,
} from "./pages";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import { useAuth } from "./hooks/useAuth";
import { SingleSwipe } from "./pages/App/SingleSwipe";

export const App = () => {
    return (
        <ThemeProvider>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/pricing" element={<Pricing />} />
                        <Route path="/faq" element={<FAQ />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route
                            path="/dashboard"
                            element={
                                <ProtectedRoute>
                                    <Dashboard />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/swipes"
                            element={
                                <ProtectedRoute>
                                    <SwipesIndex />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/settings"
                            element={
                                <ProtectedRoute>
                                    <Settings />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/create"
                            element={
                                <ProtectedRoute>
                                    <Create />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/boards"
                            element={
                                <ProtectedRoute>
                                    <Board />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/swipes/:id"
                            element={
                                <ProtectedRoute>
                                    <SingleSwipe />
                                </ProtectedRoute>
                            }
                        />
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </ThemeProvider>
    );
};

export default App;
