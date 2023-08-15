import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import React, { useEffect, useState } from "react";
import { Swipecard } from "../components/swipes/Swipecard";
import { ISwipeData } from "../types";

export const Swipes = () => {
    const [swipes, setSwipes] = useState([]);
    const swipeCollection = collection(db, "swipes");

    useEffect(() => {
        const getSwipes = async () => {
            const data = await getDocs(swipeCollection);
            setSwipes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getSwipes();
    }, []);

    return (
        <div>
            <h1>Create swipes page</h1>
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
        </div>
    );
};

export default Swipes;
