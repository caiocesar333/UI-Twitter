import './styles/global.css'

import { Layout, LayoutProps } from "./components/Layout/Layout"
import { Main, MainProps } from "./components/Main/Main"

export function App() {

  return (
    <Layout>
      <Main></Main>
    </Layout>
  );
}