import React from "react";
import Table from "../../components/common/Table";

const exampleData = [
    { tag: "UI/UX", color: "rgb(70, 153, 144)", numberOfSwipes: 8 },
    { tag: "Test", color: "rgb(170, 255, 195)", numberOfSwipes: 12 },
    { tag: "Data Analysis", color: "rgb(170, 255, 195)", numberOfSwipes: 5 },
    {
        tag: "Frontend Development",
        color: "rgb(170, 255, 195)",
        numberOfSwipes: 15,
    },
    {
        tag: "Backend Development",
        color: "rgb(213, 177, 255)",
        numberOfSwipes: 10,
    },
    {
        tag: "Mobile App Design",
        color: "rgb(213, 177, 255)",
        numberOfSwipes: 7,
    },
    {
        tag: "Database Management",
        color: "rgb(213, 177, 255)",
        numberOfSwipes: 9,
    },
    { tag: "User Research", color: "rgb(213, 177, 255)", numberOfSwipes: 11 },
    {
        tag: "Project Management",
        color: "rgb(170, 255, 195)",
        numberOfSwipes: 13,
    },
    { tag: "Content Creation", color: "rgb(170, 255, 195)", numberOfSwipes: 6 },
    { tag: "Market Research", color: "rgb(170, 255, 195)", numberOfSwipes: 8 },
    { tag: "Prototyping", color: "rgb(170, 255, 195)", numberOfSwipes: 4 },
    { tag: "Debugging", color: "rgb(170, 255, 195)", numberOfSwipes: 10 },
    { tag: "Graphic Design", color: "rgb(170, 255, 195)", numberOfSwipes: 9 },
    {
        tag: "Agile Methodologies",
        color: "rgb(170, 255, 195)",
        numberOfSwipes: 14,
    },
    { tag: "User Interface", color: "rgb(128, 128, 0)", numberOfSwipes: 12 },
    { tag: "User Experience", color: "rgb(128, 128, 0)", numberOfSwipes: 11 },
    {
        tag: "Usability Testing",
        color: "rgb(128, 128, 0)",
        numberOfSwipes: 8,
    },
    { tag: "Wireframing", color: "rgb(128, 128, 0)", numberOfSwipes: 6 },
    {
        tag: "Quality Assurance",
        color: "rgb(128, 128, 0)",
        numberOfSwipes: 9,
    },
    {
        tag: "Responsive Design",
        color: "rgb(70, 153, 144)",
        numberOfSwipes: 7,
    },
    { tag: "Code Review", color: "rgb(70, 153, 144)", numberOfSwipes: 10 },
    {
        tag: "User-Centered Design",
        color: "rgb(70, 153, 144)",
        numberOfSwipes: 12,
    },
    { tag: "Sprint Planning", color: "rgb(70, 153, 144)", numberOfSwipes: 14 },
    { tag: "A/B Testing", color: "rgb(70, 153, 144)", numberOfSwipes: 8 },
    {
        tag: "Feature Prioritization",
        color: "rgb(154, 99, 36)",
        numberOfSwipes: 9,
    },
    {
        tag: "Information Architecture",
        color: "rgb(154, 99, 36)",
        numberOfSwipes: 11,
    },
    { tag: "Version Control", color: "rgb(154, 99, 36)", numberOfSwipes: 6 },
    { tag: "UI Animation", color: "rgb(154, 99, 36)", numberOfSwipes: 7 },
    { tag: "Accessibility", color: "rgb(154, 99, 36)", numberOfSwipes: 10 },
    { tag: "User Flow", color: "rgb(154, 99, 36)", numberOfSwipes: 13 },
    { tag: "Scrum Master", color: "rgb(245, 130, 49)", numberOfSwipes: 15 },
    { tag: "Visual Design", color: "rgb(245, 130, 49)", numberOfSwipes: 9 },
    { tag: "User Persona", color: "rgb(245, 130, 49)", numberOfSwipes: 8 },
    {
        tag: "Cross-Platform Design",
        color: "rgb(245, 130, 49)",
        numberOfSwipes: 11,
    },
    {
        tag: "Rapid Prototyping",
        color: "rgb(245, 130, 49)",
        numberOfSwipes: 6,
    },
    {
        tag: "User-Centric Development",
        color: "rgb(245, 130, 49)",
        numberOfSwipes: 12,
    },
    {
        tag: "User Behavior Analysis",
        color: "rgb(128, 128, 0)",
        numberOfSwipes: 7,
    },
    { tag: "Visual Hierarchy", color: "rgb(128, 128, 0)", numberOfSwipes: 8 },
    { tag: "Design Thinking", color: "rgb(128, 128, 0)", numberOfSwipes: 14 },
    { tag: "Feature Scoping", color: "rgb(128, 128, 0)", numberOfSwipes: 10 },
    { tag: "User Engagement", color: "rgb(128, 128, 0)", numberOfSwipes: 12 },
    {
        tag: "Frontend Frameworks",
        color: "rgb(128, 128, 0)",
        numberOfSwipes: 9,
    },
    {
        tag: "Backlog Management",
        color: "rgb(170, 255, 195)",
        numberOfSwipes: 15,
    },
    {
        tag: "Visual Prototyping",
        color: "rgb(170, 255, 195)",
        numberOfSwipes: 6,
    },
    { tag: "User Surveys", color: "rgb(170, 255, 195)", numberOfSwipes: 7 },
    {
        tag: "Interaction Design",
        color: "rgb(170, 255, 195)",
        numberOfSwipes: 11,
    },
    { tag: "Task Flows", color: "rgb(170, 255, 195)", numberOfSwipes: 10 },
    {
        tag: "Design Iterations",
        color: "rgb(170, 255, 195)",
        numberOfSwipes: 9,
    },
    {
        tag: "User Interface Patterns",
        color: "rgb(170, 255, 195)",
        numberOfSwipes: 8,
    },
    {
        tag: "Mobile App Development",
        color: "rgb(170, 255, 195)",
        numberOfSwipes: 14,
    },
    {
        tag: "Web App Development",
        color: "rgb(170, 255, 195)",
        numberOfSwipes: 13,
    },
    {
        tag: "Visual Consistency",
        color: "rgb(170, 255, 195)",
        numberOfSwipes: 7,
    },
    {
        tag: "Design Psychology",
        color: "rgb(70, 153, 144)",
        numberOfSwipes: 6,
    },
    {
        tag: "Usability Heuristics",
        color: "rgb(70, 153, 144)",
        numberOfSwipes: 12,
    },
    {
        tag: "User-Centered Copywriting",
        color: "rgb(70, 153, 144)",
        numberOfSwipes: 8,
    },
    {
        tag: "User Interface Design",
        color: "rgb(70, 153, 144)",
        numberOfSwipes: 16,
    },
];

export const Tags = () => {
    return (
        <div>
            <Table title={"Tags"} data={exampleData} />
        </div>
    );
};

export default Tags;
