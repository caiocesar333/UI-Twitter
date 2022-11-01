
import GlobalStyle from './styles/global'

import './styles/global.css'

import React, { useState } from 'react';


import light  from './styles/Themes/light'
import dark  from './styles/Themes/dark'
import { ThemeProvider } from 'styled-components'

import { Layout, LayoutProps } from "./components/Layout/Layout"
import { Main, MainProps } from "./components/Main/Main"

export function App() {

  const [theme, setTheme] = useState(light);

  const toggleTheme = () =>{
    setTheme(theme.title === 'light' ? dark : light );
  } 

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle/>
        <Main toggleTheme={toggleTheme}/>
      </Layout>
    </ThemeProvider>
  );
}