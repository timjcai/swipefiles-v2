import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase-config";
import React, { useContext, useEffect, useState } from "react";
import { Swipecard } from "../components/swipes/Swipecard";
import { ISwipeData } from "../types";
import { UserContext } from "../context";

export const SwipesIndex = () => {
    const [swipes, setSwipes] = useState([]);
    const user = useContext(UserContext);
    const swipeCollection = collection(db, "swipes");

    useEffect(() => {
        const userQuery = query(
            swipeCollection,
            where("user_id", "==", `${user.uid}`)
        );

        const getSwipes = async () => {
            const data = await getDocs(userQuery);
            console.log(data);
            setSwipes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getSwipes();
    }, []);

    return (
        <div>
            <h1>Swipes Index</h1>
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
