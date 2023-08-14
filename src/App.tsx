import { useEffect, useState } from "react";
import "./App.css";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import { SignIn } from "./components/auth/SignIn";
import { SignUp } from "./components/auth/SignUp";
import { Swipecard } from "./components/swipes/Swipecard";
import { ISwipeData } from "./types";
import { Navbar } from "./components/navbar/Navbar";

export const App = () => {
    const [swipes, setSwipes] = useState([]);
    const swipeCollection = collection(db, "swipes");

    useEffect(() => {
        const getSwipes = async () => {
            const data = await getDocs(swipeCollection);
            setSwipes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getSwipes();
    }, []);

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
        <>
            <Navbar />
            <h1>Dashboard - All Swipes</h1>
            {swipes.map((swipe: ISwipeData) => {
                return (
                    <Swipecard
                        key={swipe.id}
                        title={swipe.title}
                        author={swipe.author}
                        board_id={swipe.board_id}
                        hyperlink={swipe.hyperlink}
                        platform={swipe.platform}
                        user_id={swipe.user_id}
                        id={swipe.id}
                        notes={swipe.notes}
                        images={swipe.images}
                        keyword_tags={swipe.keyword_tags}
                    />
                );
            })}
            <SignUp />
            <SignIn />
        </>
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
