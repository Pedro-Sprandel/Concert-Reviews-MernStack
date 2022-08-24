import colors from './colors';
import { useColorMode } from '@chakra-ui/react';

const getColors = (colorMode) => ({
    neutral: colorMode === 'dark' ? '#272838' : '#272838',
    primary: colorMode === 'dark' ? '#EB9486' : '#EB9486',
    secondary: colorMode === 'dark' ? '#F3DE8A' : '#F3DE8A',
    terciary: colorMode === 'dark' ? '#7E7F9A' : '#7E7F9A',
})

export const useTheme = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    console.log(colorMode)

    return {
        theme: colorMode,
        toggleTheme: toggleColorMode,
        ...getColors(colorMode)
    }
}
