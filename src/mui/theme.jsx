import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography: {
        fontFamily: `"YekanBakh","Roboto"`,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        fontWeightHeavy: 800,
        fontWeightFat: 900,
    },
    direction: "rtl",
    palette: {
        primary: {
            main: "#d32f2f",
            light: "#ef5350",
            dark: "#c62828",
        },
        secondary: {

            main: "#fbc02d",
            light: "#ffa000",
            dark: "#f57c00"
        }
    }
});