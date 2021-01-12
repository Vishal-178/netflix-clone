import React from "react";
import { FooterContainer } from "./containers/footer";
import { JumbotronContainer } from "./containers/jumbotrons";
import { FaqsContainer } from "./containers/faq";
// import { JumbotrinContiner } from "./containers/Jumbotron";
function App() {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}

export default App;
