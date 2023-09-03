import React, { useState } from "react";
// import { KeywordTag } from "../../components/form";
import Data from "../../util/fakeData.json";
import styled from "styled-components";

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
    const [searchQuery, setSearchQuery] = useState<string>("");

    return (
        <>
            {/* <h1>Testing Colors</h1>
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
            </div> */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "300px",
                }}
            >
                <h1>Search Bar</h1>
                <input
                    placeholder="search tags"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button>Get Swipes</button>
                <button>Get Tags</button>
                <p>{searchQuery}</p>
            </div>
            <SearchResultsWrapper>
                {Data.filter((object) => {
                    if (searchQuery === "") {
                        return object;
                    } else if (
                        object.title
                            ?.toLowerCase()
                            .includes(searchQuery.toLowerCase())
                    ) {
                        return object;
                    }
                }).map((object, index) => {
                    return (
                        <SearchCard key={index}>
                            <h2>{object.title}</h2>
                            <p>{object.author}</p>
                            <a>{object.hyperlink}</a>
                            <p>Platform: {object.platform}</p>
                            <p>{object.notes}</p>
                        </SearchCard>
                    );
                })}
            </SearchResultsWrapper>
        </>
    );
};

const SearchResultsWrapper = styled.div`
    display: grid;
    overflow-y: scroll;
    grid-template-columns: 400px 400px 400px;
    max-height: 80vh;
    row-gap: 10px;
    column-gap: 10px;
`;

const SearchCard = styled.div`
    display: flex;
    flex-direction: column;
    overflow: clip;
    border: 1px solid black;
    border-radius: 8px;
    padding: 2em 1em;
`;
