import {
    collection,
    deleteDoc,
    doc,
    getDocs,
    query,
    where,
} from "firebase/firestore";
import { db } from "../../../firebase-config";
import React, { useEffect, useState } from "react";
import { Swipecard } from "../../components/swipes/Swipecard";
import { ISwipeData } from "../../types";
import { useAuth } from "../../hooks/useAuth";
import { Loading } from "./Loading";
import styled from "styled-components";
import { deviceSize } from "../../util";

export const SwipesIndex = () => {
    const [swipes, setSwipes] = useState([]);
    const [loading, setLoading] = useState<boolean>(true);
    const user = useAuth();
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
            setLoading(false);
        };

        getSwipes();
    }, []);

    return (
        <div>
            <h1>Swipes Index</h1>
            <SwipeGrid>
                {!loading &&
                    swipes.map((swipe: ISwipeData) => {
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
            </SwipeGrid>
            {loading && <Loading />}
        </div>
    );
};

const SwipeGrid = styled.div`
    display: grid;
    row-gap: 20px;
    column-gap: 10px;
    grid-auto-rows: 310px;
    margin-right: 10px;
    position: relative;

    @media ${deviceSize.xxl} {
        grid-template-columns: repeat(5, auto);
    }
    @media ${deviceSize.xl} {
        grid-template-columns: repeat(4, auto);
    }
    @media ${deviceSize.lg} {
        grid-template-columns: repeat(3, auto);
    }
    @media ${deviceSize.md} {
        grid-template-columns: repeat(2, auto);
    }
    @media ${deviceSize.sm} {
        grid-template-columns: repeat(1, auto);
        justify-content: center;
    }
    @media ${deviceSize.xs} {
        grid-template-columns: repeat(1, auto);
        justify-content: center;
    }
`;
