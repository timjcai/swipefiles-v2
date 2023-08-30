export type DefaultColors = 
    | "Maroon" 
    | "Red"
    | "Pink"
    | "Brown"
    | "Orange"
    | "Apricot"
    | "Olive"
    | "Yellow"
    | "Beige"
    | "Lime"
    | "Green"
    | "Mint"
    | "Teal"
    | "Cyan"
    | "Blue"
    | "Navy"
    | "Purple"
    | "Lavender"
    | "Magenta"
    | "Grey"

export interface IColorInfo {
    name?: DefaultColors;
    hexcolor: string;
    rgbcolor: string;
}
  
export type ColorData = {
    [key in DefaultColors]: IColorInfo
}

