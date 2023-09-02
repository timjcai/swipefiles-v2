import React, { FC, useEffect, useState } from "react";
import Table from "../../components/common/Table";
import { Loading } from "./Loading";
import { ITagTableDB } from "../../types";
import { useAuth } from "../../hooks/useAuth";
import { db } from "../../../firebase-config";
import { collection, getDocs, query, where } from "firebase/firestore";

const exampleData = [
    {
        tag: "UI/UX",
        colorname: "Teal",
        colorcode: "rgb(70, 153, 144)",
        numberOfSwipes: 8,
    },
    {
        tag: "Test",
        colorname: "Mint",
        colorcode: "rgb(170, 255, 195)",
        numberOfSwipes: 12,
    },
    {
        tag: "Data Analysis",
        colorname: "Mint",
        colorcode: "rgb(170, 255, 195)",
        numberOfSwipes: 5,
    },
    {
        tag: "Frontend Development",
        colorname: "Mint",
        colorcode: "rgb(170, 255, 195)",
        numberOfSwipes: 15,
    },
    {
        tag: "Backend Development",
        colorname: "Lavender",
        colorcode: "rgb(213, 177, 255)",
        numberOfSwipes: 10,
    },
    {
        tag: "Mobile App Design",
        colorname: "Lavender",
        colorcode: "rgb(213, 177, 255)",
        numberOfSwipes: 7,
    },
    {
        tag: "Database Management",
        colorname: "Lavender",
        colorcode: "rgb(213, 177, 255)",
        numberOfSwipes: 9,
    },
    {
        tag: "User Research",
        colorname: "Lavender",
        colorcode: "rgb(213, 177, 255)",
        numberOfSwipes: 11,
    },
    {
        tag: "Project Management",
        colorname: "Mint",
        colorcode: "rgb(170, 255, 195)",
        numberOfSwipes: 13,
    },
    {
        tag: "Content Creation",
        colorname: "Mint",
        colorcode: "rgb(170, 255, 195)",
        numberOfSwipes: 6,
    },
    {
        tag: "Market Research",
        colorname: "Mint",
        colorcode: "rgb(170, 255, 195)",
        numberOfSwipes: 8,
    },
    {
        tag: "Prototyping",
        colorname: "Mint",
        colorcode: "rgb(170, 255, 195)",
        numberOfSwipes: 4,
    },
    {
        tag: "Debugging",
        colorname: "Mint",
        colorcode: "rgb(170, 255, 195)",
        numberOfSwipes: 10,
    },
    {
        tag: "Graphic Design",
        colorname: "Mint",
        colorcode: "rgb(170, 255, 195)",
        numberOfSwipes: 9,
    },
    {
        tag: "Agile Methodologies",
        colorname: "Mint",
        colorcode: "rgb(170, 255, 195)",
        numberOfSwipes: 14,
    },
    {
        tag: "User Interface",
        colorname: "Olive",
        colorcode: "rgb(128, 128, 0)",
        numberOfSwipes: 12,
    },
    {
        tag: "User Experience",
        colorname: "Olive",
        colorcode: "rgb(128, 128, 0)",
        numberOfSwipes: 11,
    },
    {
        tag: "Usability Testing",
        colorname: "Olive",
        colorcode: "rgb(128, 128, 0)",
        numberOfSwipes: 8,
    },
    {
        tag: "Wireframing",
        colorname: "Olive",
        colorcode: "rgb(128, 128, 0)",
        numberOfSwipes: 6,
    },
    {
        tag: "Quality Assurance",
        colorname: "Olive",
        colorcode: "rgb(128, 128, 0)",
        numberOfSwipes: 9,
    },
    {
        tag: "Responsive Design",
        colorname: "Teal",
        colorcode: "rgb(70, 153, 144)",
        numberOfSwipes: 7,
    },
    {
        tag: "Code Review",
        colorname: "Teal",
        colorcode: "rgb(70, 153, 144)",
        numberOfSwipes: 10,
    },
    {
        tag: "User-Centered Design",
        colorname: "Teal",
        colorcode: "rgb(70, 153, 144)",
        numberOfSwipes: 12,
    },
    {
        tag: "Sprint Planning",
        colorname: "Teal",
        colorcode: "rgb(70, 153, 144)",
        numberOfSwipes: 14,
    },
    {
        tag: "A/B Testing",
        colorname: "Teal",
        colorcode: "rgb(70, 153, 144)",
        numberOfSwipes: 8,
    },
    {
        tag: "Feature Prioritization",
        colorname: "Brown",
        colorcode: "rgb(154, 99, 36)",
        numberOfSwipes: 9,
    },
    {
        tag: "Information Architecture",
        colorname: "Brown",
        colorcode: "rgb(154, 99, 36)",
        numberOfSwipes: 11,
    },
    {
        tag: "Version Control",
        colorname: "Brown",
        colorcode: "rgb(154, 99, 36)",
        numberOfSwipes: 6,
    },
    {
        tag: "UI Animation",
        colorname: "Brown",
        colorcode: "rgb(154, 99, 36)",
        numberOfSwipes: 7,
    },
    {
        tag: "Accessibility",
        colorname: "Brown",
        colorcode: "rgb(154, 99, 36)",
        numberOfSwipes: 10,
    },
    {
        tag: "User Flow",
        colorname: "Brown",
        colorcode: "rgb(154, 99, 36)",
        numberOfSwipes: 13,
    },
    {
        tag: "Scrum Master",
        colorname: "Orange",
        colorcode: "rgb(245, 130, 49)",
        numberOfSwipes: 15,
    },
    {
        tag: "Visual Design",
        colorname: "Orange",
        colorcode: "rgb(245, 130, 49)",
        numberOfSwipes: 9,
    },
    {
        tag: "User Persona",
        colorname: "Orange",
        colorcode: "rgb(245, 130, 49)",
        numberOfSwipes: 8,
    },
    {
        tag: "Cross-Platform Design",
        colorname: "Orange",
        colorcode: "rgb(245, 130, 49)",
        numberOfSwipes: 11,
    },
    {
        tag: "Rapid Prototyping",
        colorname: "Orange",
        colorcode: "rgb(245, 130, 49)",
        numberOfSwipes: 6,
    },
    {
        tag: "User-Centric Development",
        colorname: "Orange",
        colorcode: "rgb(245, 130, 49)",
        numberOfSwipes: 12,
    },
    {
        tag: "User Behavior Analysis",
        colorname: "Olive",
        colorcode: "rgb(128, 128, 0)",
        numberOfSwipes: 7,
    },
    {
        tag: "Visual Hierarchy",
        colorname: "Olive",
        colorcode: "rgb(128, 128, 0)",
        numberOfSwipes: 8,
    },
    {
        tag: "Design Thinking",
        colorname: "Olive",
        colorcode: "rgb(128, 128, 0)",
        numberOfSwipes: 14,
    },
    {
        tag: "Feature Scoping",
        colorname: "Olive",
        colorcode: "rgb(128, 128, 0)",
        numberOfSwipes: 10,
    },
    {
        tag: "User Engagement",
        colorname: "Olive",
        colorcode: "rgb(128, 128, 0)",
        numberOfSwipes: 12,
    },
    {
        tag: "Frontend Frameworks",
        colorname: "Olive",
        colorcode: "rgb(128, 128, 0)",
        numberOfSwipes: 9,
    },
    {
        tag: "Backlog Management",
        colorname: "Mint",
        colorcode: "rgb(170, 255, 195)",
        numberOfSwipes: 15,
    },
    {
        tag: "Visual Prototyping",
        colorname: "Mint",
        colorcode: "rgb(170, 255, 195)",
        numberOfSwipes: 6,
    },
    {
        tag: "User Surveys",
        colorname: "Mint",
        colorcode: "rgb(170, 255, 195)",
        numberOfSwipes: 7,
    },
    {
        tag: "Interaction Design",
        colorname: "Mint",
        colorcode: "rgb(170, 255, 195)",
        numberOfSwipes: 11,
    },
    {
        tag: "Task Flows",
        colorname: "Mint",
        colorcode: "rgb(170, 255, 195)",
        numberOfSwipes: 10,
    },
    {
        tag: "Design Iterations",
        colorname: "Mint",
        colorcode: "rgb(170, 255, 195)",
        numberOfSwipes: 9,
    },
    {
        tag: "User Interface Patterns",
        colorname: "Mint",
        colorcode: "rgb(170, 255, 195)",
        numberOfSwipes: 8,
    },
    {
        tag: "Mobile App Development",
        colorname: "Mint",
        colorcode: "rgb(170, 255, 195)",
        numberOfSwipes: 14,
    },
    {
        tag: "Web App Development",
        colorname: "Mint",
        colorcode: "rgb(170, 255, 195)",
        numberOfSwipes: 13,
    },
    {
        tag: "Visual Consistency",
        colorname: "Mint",
        colorcode: "rgb(170, 255, 195)",
        numberOfSwipes: 7,
    },
    {
        tag: "Design Psychology",
        colorname: "Teal",
        colorcode: "rgb(70, 153, 144)",
        numberOfSwipes: 6,
    },
    {
        tag: "Usability Heuristics",
        colorname: "Teal",
        colorcode: "rgb(70, 153, 144)",
        numberOfSwipes: 12,
    },
    {
        tag: "User-Centered Copywriting",
        colorname: "Teal",
        colorcode: "rgb(70, 153, 144)",
        numberOfSwipes: 8,
    },
    {
        tag: "User Interface Design",
        colorname: "Teal",
        colorcode: "rgb(70, 153, 144)",
        numberOfSwipes: 16,
    },
];

export const Tags: FC = () => {
    const [tableData, setTableData] = useState<ITagTableDB[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const user = useAuth();
    const tagCollection = collection(db, "tags");

    useEffect(() => {
        getTagData(user);
    }, [user]);

    const getTagData = async (user) => {
        const userQuery = query(
            tagCollection,
            where("user_id", "==", `${user.uid}`)
        );
        setLoading(true);
        const data = await getDocs(userQuery);
        setTableData(
            data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
                numberOfSwipes: doc.data().swipes.length,
            }))
        );
        setLoading(false);
    };

    return (
        <div>
            {!loading && <Table title={"Tags"} data={tableData} />}
            {/* {!loading && <Table title={"Tags"} data={exampleData} />} */}
            {loading && <Loading />}
        </div>
    );
};
