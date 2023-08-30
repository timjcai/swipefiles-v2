import React from "react";
import { KeywordTag } from "../../components/form";

const colorData = [
    { name: "Maroon", color: "#800000" },
    { name: "Red", color: "#e6194B" },
    { name: "Pink", color: "#fabed4" },
    { name: "Brown", color: "#9A6324" },
    { name: "Orange", color: "#f58231" },
    { name: "Apricot", color: "#FCBB7A" },
    { name: "Olive", color: "#808000" },
    { name: "Yellow", color: "#ffe119" },
    { name: "Yellow", color: "#FFE500" },
    { name: "Yellow", color: "rgb(255,229,0,0.83)" },
    { name: "Beige", color: "#CBB164" },
    { name: "Lime", color: "#bfef45" },
    { name: "Green", color: "#3cb44b" },
    { name: "Mint", color: "#aaffc3" },
    { name: "Teal", color: "#469990" },
    { name: "Cyan", color: "#42d4f4" },
    { name: "Blue", color: "#91C2F7" },
    { name: "Navy", color: "#4363d8" },
    { name: "Purple", color: "#911eb4" },
    { name: "Lavender", color: "#D5B1FF" },
    { name: "Magenta", color: "#f032e6" },
    { name: "Grey", color: "#a9a9a9" },
    { name: "Black", color: "#000000" },
    { name: "White", color: "#ffffff" },
];

export const Dashboard = () => {
    return (
        <>
            <h1>Testing Colors</h1>
            <div style={{ backgroundColor: "#ffffff" }}>
                <h2>Light Theme</h2>
                {colorData.map((item) => {
                    return (
                        <KeywordTag
                            tag={item.name}
                            id={item.name}
                            bgcolor={item.color}
                            color={"#000000"}
                        />
                    );
                })}
            </div>
            <div style={{ backgroundColor: "#1D1D1D" }}>
                <h2 style={{ color: "#FFFFFF" }}>Dark Theme</h2>
                {colorData.map((item) => {
                    return (
                        <KeywordTag
                            tag={item.name}
                            id={item.name}
                            bgcolor={item.color}
                            color={"#FFFFFF"}
                        />
                    );
                })}
            </div>
        </>
    );
};
