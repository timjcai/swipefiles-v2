import React, { FC, useEffect, useState } from "react";
import { ISwipeData } from "../../types";
import { Link, useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase-config";
import { useAuth } from "../../hooks/useAuth";
import { Loading } from "./Loading";
import { SwipePage } from "../../components/swipes";

export const SingleSwipe: FC = () => {
    const [swipedata, setSwipedata] = useState<ISwipeData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const swipeCollection = collection(db, "swipes");
    const user = useAuth();
    const { id } = useParams();

    useEffect(() => {
        const userQuery = query(
            swipeCollection,
            where("user_id", "==", `${user.uid}`),
            where("__name__", "==", id)
        );

        const getSwipedata = async () => {
            const data = await getDocs(userQuery);
            data.docs.map((doc) => setSwipedata({ ...doc.data(), id: id }));
            // setSwipedata(
            //     data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            // );
            setLoading(false);
        };

        getSwipedata();
    }, []);

    return (
        <div>
            {!loading && <SwipePage swipedata={swipedata} />}
            {loading && <Loading />}
        </div>
    );
};
{
    /* <p>{swipedata.images}</p>
            <p>{swipedata.keyword_tags}</p> */
}
