import React, { useEffect, useState } from "react";
import { ISwipeData } from "../../types";
import {
    collection,
    doc,
    getDocs,
    query,
    updateDoc,
    where,
} from "firebase/firestore";
import { db } from "../../../firebase-config";
import { useAuth } from "../../hooks/useAuth";
import { Navigate, useParams } from "react-router-dom";
import EditSwipePage from "../../components/swipes/EditSwipePage";
import { Loading } from "./Loading";
import { useNavigate } from "react-router-dom";

export const EditSingleSwipe = () => {
    const [swipedata, setSwipedata] = useState<ISwipeData | null>();
    const [loading, setLoading] = useState<boolean>(true);
    const swipeCollection = collection(db, "swipes");
    const user = useAuth();
    const navigate = useNavigate();
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

    const saveData = async () => {
        const swipedataRef = doc(db, "swipes", `${id}`);
        await updateDoc(swipedataRef, { ...swipedata });
        console.log("data saved");
        navigate(`/swipes/${id}`);
    };

    function updateFields(fields: Partial<ISwipeData>) {
        setSwipedata((prev) => {
            return { ...prev, ...fields };
        });
    }

    return (
        <div>
            <h1>Edit Page</h1>
            <button onClick={saveData}>Save</button>
            {!loading && (
                <EditSwipePage
                    swipedata={swipedata}
                    updateFields={updateFields}
                />
            )}
            {loading && <Loading />}
        </div>
    );
};
