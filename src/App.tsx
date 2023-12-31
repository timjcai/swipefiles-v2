import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider, ThemeProvider } from "./context";
import { Login, Register } from "./components/auth";
import {
    FAQ,
    Pricing,
    LandingPage,
    Create,
    Dashboard,
    Settings,
    SwipesIndex,
    SingleSwipe,
    Tags,
    EditSingleSwipe,
} from "./pages";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import { SwipeActionsProvider } from "./context/SwipeActionsProvider";
import { TagProvider } from "./context/TagProvider";

export const App = () => {
    return (
        <ThemeProvider>
            <SwipeActionsProvider>
                <AuthProvider>
                    <TagProvider>
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<LandingPage />} />
                                <Route path="/pricing" element={<Pricing />} />
                                <Route path="/faq" element={<FAQ />} />
                                <Route
                                    path="/register"
                                    element={<Register />}
                                />
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
                                            <h1>hi</h1>
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
                                <Route
                                    path="/swipes/edit/:id"
                                    element={
                                        <ProtectedRoute>
                                            <EditSingleSwipe />
                                        </ProtectedRoute>
                                    }
                                />
                                <Route
                                    path="/tags"
                                    element={
                                        <ProtectedRoute>
                                            <Tags />
                                        </ProtectedRoute>
                                    }
                                />
                            </Routes>
                        </BrowserRouter>
                    </TagProvider>
                </AuthProvider>
            </SwipeActionsProvider>
        </ThemeProvider>
    );
};

export default App;
