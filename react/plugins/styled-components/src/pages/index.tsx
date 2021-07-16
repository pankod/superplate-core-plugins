import React from "react";

import { Wrapper, Header, Main, Footer, Cards } from "components";
import GlobalStyle from "styles/globalStyles";

const Home: React.FC = () => {
  return (
        <Wrapper>
            <GlobalStyle />
            <Header />
            <Main />
            <Cards />
            <Footer />
        </Wrapper>
    );
}
export default Home;
