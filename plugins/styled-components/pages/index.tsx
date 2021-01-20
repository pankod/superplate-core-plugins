import React from "react";

import { Header, Banner, Footer, Cards } from "@components";
import GlobalStyle from "@styles/globalStyles";

const Home: React.FC = () => {
  return (
        <>
            <GlobalStyle />
            <Header />
            <Banner />
            <Cards />
            <Footer />
        </>
    );
}
export default Home;
