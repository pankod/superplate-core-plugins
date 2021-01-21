import React from "react";

import { Header, Main, Footer, Cards } from "@components";
import GlobalStyle from "@styles/globalStyles";

const Home: React.FC = () => {
  return (
        <>
            <GlobalStyle />
            <Header />
            <Main />
            <Cards />
            <Footer />
        </>
    );
}
export default Home;
