import { useEffect, useState } from "react";
import "./App.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

export const App = () => {
    const [users, setUsers] = useState([]);
    const userCollection = collection(db, "user");

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(userCollection);
            console.log(data);
        };

        getUsers();
    }, []);

    return (
        <>
            <h1>Firestore - Test - Swipefiles</h1>
        </>
    );
};

export default App;
