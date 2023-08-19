interface Size {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
}

export const screenSize: Size = {
    xs: '320px',
    sm: '550px',
    md: '950px',
    lg: '1128px',
    xl: '1640px',
    xxl: '1880px'
}

export const deviceSize: Size = {
    xs: `(max-width: ${screenSize.sm})`,
    sm: `(max-width: ${screenSize.md})`,
    md: `(max-width: ${screenSize.lg})`,
    lg: `(max-width: ${screenSize.xl})`,
    xl: `(max-width: ${screenSize.xxl})`,
    xxl: `(min-width: ${screenSize.xxl})`
}