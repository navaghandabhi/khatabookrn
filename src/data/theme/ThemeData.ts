import { DefaultTheme } from "react-native-paper"
import { ColorCode } from "./ColorCode"


const textColor = ColorCode.black

export const themeData = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: ColorCode.primary,
        surface: ColorCode.surface,
        backgroundColor: ColorCode.backgroundColor
    },
    fonts: {
        ...DefaultTheme.fonts,
        titleMedium: {
            ...DefaultTheme.fonts.titleMedium,
            color: textColor,
            fontFamily: 'Cantarell-Bold'
        },
        titleLarge: {
            ...DefaultTheme.fonts.titleLarge,
            color: textColor,
            fontFamily: 'Cantarell-Bold'
        }
    }
} 