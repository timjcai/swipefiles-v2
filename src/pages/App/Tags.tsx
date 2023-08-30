import React from "react";
import { tagColorsArray } from "../../util/colorUtils";

export const Tags = () => {
    return (
        <div>
            <h1>Tags</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Hex Color</th>
                        <th>RGB Color</th>
                    </tr>
                </thead>
                <tbody>
                    {tagColorsArray.map((colorInfo, index) => (
                        <tr key={index}>
                            <td>{colorInfo.name}</td>
                            <td>{colorInfo.hexcolor}</td>
                            <td>{colorInfo.rgbcolor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Tags;
