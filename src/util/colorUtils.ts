
// color data will work with light and dark theme

import { ColorData, DefaultColors, IColorInfo } from "../types";

// haven't decided how to best store the color data for ease of calling - not exactly sure which data object would be the best way to handle colorSelect
export const tagColorsArray: IColorInfo[] = [
    { name: "Maroon", hexcolor: "#800000", rgbcolor: "rgb(128, 0, 0)" },
    { name: "Red", hexcolor: "#e6194B", rgbcolor: "rgb(230, 25, 75)" },
    { name: "Pink", hexcolor: "#fabed4", rgbcolor: "rgb(250, 190, 212)" },
    { name: "Brown", hexcolor: "#9A6324", rgbcolor: "rgb(154, 99, 36)" },
    { name: "Orange", hexcolor: "#f58231", rgbcolor: "rgb(245, 130, 49)" },
    { name: "Apricot", hexcolor: "#FCBB7A", rgbcolor: "rgb(252, 187, 122)" },
    { name: "Olive", hexcolor: "#808000", rgbcolor: "rgb(128, 128, 0)" },
    { name: "Yellow", hexcolor: "#FFE500", rgbcolor: "rgb(255,229,0,0.83)"  },
    { name: "Beige", hexcolor: "#CBB164", rgbcolor: "rgb(203, 177, 100)"},
    { name: "Lime", hexcolor: "#bfef45", rgbcolor: "rgb(191, 239, 69)"},
    { name: "Green", hexcolor: "#3cb44b", rgbcolor: "rgb(60, 180, 75)"},
    { name: "Mint", hexcolor: "#aaffc3", rgbcolor: "rgb(170, 255, 195)"},
    { name: "Teal", hexcolor: "#469990", rgbcolor: "rgb(70, 153, 144)"},
    { name: "Cyan", hexcolor: "#42d4f4", rgbcolor: "rgb(66, 212, 244)"},
    { name: "Blue", hexcolor: "#91C2F7", rgbcolor: "rgb(67, 99, 216)"},
    { name: "Navy", hexcolor: "#4363d8", rgbcolor: "rgb(145, 194, 247)"},
    { name: "Purple", hexcolor: "#911eb4", rgbcolor: "rgb(145, 30, 180)"},
    { name: "Lavender", hexcolor: "#D5B1FF", rgbcolor: "rgb(213, 177, 255)"},
    { name: "Magenta", hexcolor: "#f032e6", rgbcolor: "rgb(240, 50, 230)"},
    { name: "Grey", hexcolor: "#a9a9a9", rgbcolor: "rgb(169, 169, 169)"}
]

export const tagColorObject1: ColorData = {
    Maroon: { hexcolor: "#800000", rgbcolor: "rgb(128, 0, 0)" },
    Red: { hexcolor: "#e6194B", rgbcolor: "rgb(230, 25, 75)" },
    Pink: { hexcolor: "#fabed4", rgbcolor: "rgb(250, 190, 212)" },
    Brown: { hexcolor: "#9A6324", rgbcolor: "rgb(154, 99, 36)" },
    Orange: { hexcolor: "#f58231", rgbcolor: "rgb(245, 130, 49)" },
    Apricot: { hexcolor: "#FCBB7A", rgbcolor: "rgb(252, 187, 122)" },
    Olive: { hexcolor: "#808000", rgbcolor: "rgb(128, 128, 0)" },
    Yellow: { hexcolor: "#FFE500", rgbcolor: "rgb(255, 229, 0)" },
    Beige: { hexcolor: "#CBB164", rgbcolor: "rgb(203, 177, 100)" },
    Lime: { hexcolor: "#bfef45", rgbcolor: "rgb(191, 239, 69)" },
    Green: { hexcolor: "#3cb44b", rgbcolor: "rgb(60, 180, 75)" },
    Mint: { hexcolor: "#aaffc3", rgbcolor: "rgb(170, 255, 195)" },
    Teal: { hexcolor: "#469990", rgbcolor: "rgb(70, 153, 144)" },
    Cyan: { hexcolor: "#42d4f4", rgbcolor: "rgb(66, 212, 244)" },
    Blue: { hexcolor: "#91C2F7", rgbcolor: "rgb(67, 99, 216)" },
    Navy: { hexcolor: "#4363d8", rgbcolor: "rgb(145, 194, 247)" },
    Purple: { hexcolor: "#911eb4", rgbcolor: "rgb(145, 30, 180)" },
    Lavender: { hexcolor: "#D5B1FF", rgbcolor: "rgb(213, 177, 255)" },
    Magenta: { hexcolor: "#f032e6", rgbcolor: "rgb(240, 50, 230)" },
    Grey: { hexcolor: "#a9a9a9", rgbcolor: "rgb(169, 169, 169)" },
}

export const tagColorObject2:{[key in DefaultColors]: string }= {
    Maroon: "rgb(128, 0, 0)" ,
    Red: "rgb(230, 25, 75)" ,
    Pink: "rgb(250, 190, 212)" ,
    Brown: "rgb(154, 99, 36)" ,
    Orange: "rgb(245, 130, 49)" ,
    Apricot: "rgb(252, 187, 122)" ,
    Olive: "rgb(128, 128, 0)" ,
    Yellow: "rgb(255, 229, 0, 0.83)" ,
    Beige: "rgb(203, 177, 100)" ,
    Lime: "rgb(191, 239, 69)" ,
    Green: "rgb(60, 180, 75)" ,
    Mint: "rgb(170, 255, 195)" ,
    Teal: "rgb(70, 153, 144)" ,
    Cyan: "rgb(66, 212, 244)" ,
    Blue: "rgb(67, 99, 216)" ,
    Navy: "rgb(145, 194, 247)" ,
    Purple: "rgb(145, 30, 180)" ,
    Lavender: "rgb(213, 177, 255)" ,
    Magenta: "rgb(240, 50, 230)" ,
    Grey: "rgb(169, 169, 169)" ,
}

export const colorSelectOptions: DefaultColors[] = ['Maroon', 'Red', 'Pink', 'Brown', 'Orange', 'Apricot', 'Olive', 'Yellow', 'Beige', 'Lime', 'Green', 'Mint', 'Teal', 'Cyan', 'Blue', 'Navy', 'Purple', 'Lavender', 'Magenta', 'Grey'];