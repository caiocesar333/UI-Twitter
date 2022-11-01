import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            background: string;
            text: string;

            primaryBlue: string;
            secondBlue: string;
            dark1: string;
            dark2: string;
            gray: string;
            red: string;
            divgray: string;
            white: string;
            black: string;
        }
    }
}