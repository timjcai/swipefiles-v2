import React from "react";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Board, Create, Dashboard, Settings, SwipesIndex } from "./pages";
import { LandingPage } from "./pages/LandingPage";
import { UserProvider } from "./context";

export const App = () => {
    // const createUser = async (e) => {
    //     e.preventDefault();
    //     const payload = {
    //         username: currentUsername,
    //         fullname: currentFullname,
    //         email: currentEmail,
    //         password: currentPassword,
    //     };
    //     console.log(payload);
    //     await addDoc(userCollection, payload);
    // };

    return (
        <UserProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/board" element={<Board />} />
                    <Route path="/swipes" element={<SwipesIndex />} />
                </Routes>
            </BrowserRouter>
        </UserProvider>
    );
};

export default App;

// export const Index = () => {
//     return (
//         <div>
//             <h1>Firestore - Test - Swipefiles</h1>
//             <div>
//                 <form onSubmit={createUser}>
//                     <input
//                         placeholder="Username:"
//                         onChange={(e) => setCurrentUsername(e.target.value)}
//                     />
//                     <input
//                         placeholder="Fullname:"
//                         onChange={(e) => setCurrentFullname(e.target.value)}
//                     />
//                     <input
//                         placeholder="Email:"
//                         onChange={(e) => setCurrentEmail(e.target.value)}
//                     />
//                     <input
//                         placeholder="Password:"
//                         onChange={(e) => setCurrentPassword(e.target.value)}
//                     />
//                     <button type="submit">Create</button>
//                 </form>
//             </div>
//             {users.map((user) => {
//                 return (
//                     <div key={user.id}>
//                         <p>{user.id}</p>
//                         <p>{user.email}</p>
//                         <p>{user.fullname}</p>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };
