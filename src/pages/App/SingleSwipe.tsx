import React, { FC, useEffect, useState } from "react";
import { ISwipeData } from "../../types";
import { useParams } from "react-router-dom";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase-config";
import { useAuth } from "../../hooks/useAuth";
import { Loading } from "./Loading";

export const SingleSwipe: FC = () => {
    // const {
    //     author,
    //     images,
    //     keyword_tags,
    //     hyperlink,
    //     notes,
    //     platform,
    //     title,
    //     board_id,
    //     user_id,
    //     id,
    // } = swipedata;
    // console.log(swipedata);
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
            {!loading ||
                (swipedata !== null && (
                    <>
                        <h2>{id}</h2>
                        <h1>{swipedata.title}</h1>
                        <p>{swipedata.user_id}</p>
                        <p>{swipedata.author}</p>
                        <p>{swipedata.hyperlink}</p>
                        <p>{swipedata.platform}</p>
                        <p>{swipedata.notes}</p>
                    </>
                ))}
            {loading && <Loading />}
        </div>
    );
};
{
    /* <p>{swipedata.images}</p>
            <p>{swipedata.keyword_tags}</p> */
}
