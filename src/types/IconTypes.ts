import { ActionTypes, DefaultColors, FieldTypes, ISwipeData, NavigationTypes, PlatformTypes, ValidationTypes } from ".";

export type IconType = 
    | keyof ISwipeData 
    | FieldTypes 
    | PlatformTypes 
    | ValidationTypes 
    | ActionTypes 
    | NavigationTypes
    | DefaultColors