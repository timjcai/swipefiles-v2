import { useEffect, useState } from "react";
import "./App.css";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import { SignIn } from "./components/auth/SignIn";
import { SignUp } from "./components/auth/SignUp";

export const App = () => {
    const [users, setUsers] = useState([]);
    const [currentUsername, setCurrentUsername] = useState("");
    const [currentFullname, setCurrentFullname] = useState("");
    const [currentEmail, setCurrentEmail] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const userCollection = collection(db, "user");

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(userCollection);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getUsers();
    }, [users]);

    const createUser = async (e) => {
        e.preventDefault();
        const payload = {
            username: currentUsername,
            fullname: currentFullname,
            email: currentEmail,
            password: currentPassword,
        };
        console.log(payload);
        await addDoc(userCollection, payload);
    };

    return (
        <>
            <SignUp />
            <SignIn />
        </>
    );
};

export default App;

export const Index = () => {
    return (
        <div>
            <h1>Firestore - Test - Swipefiles</h1>
            <div>
                <form onSubmit={createUser}>
                    <input
                        placeholder="Username:"
                        onChange={(e) => setCurrentUsername(e.target.value)}
                    />
                    <input
                        placeholder="Fullname:"
                        onChange={(e) => setCurrentFullname(e.target.value)}
                    />
                    <input
                        placeholder="Email:"
                        onChange={(e) => setCurrentEmail(e.target.value)}
                    />
                    <input
                        placeholder="Password:"
                        onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                    <button type="submit">Create</button>
                </form>
            </div>
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        <p>{user.id}</p>
                        <p>{user.email}</p>
                        <p>{user.fullname}</p>
                    </div>
                );
            })}
        </div>
    );
};
