import React from "react";
import { FooterContainer } from "../containers/footer";
import { JumbotronContainer } from "../containers/jumbotrons";
import { FaqsContainer } from "../containers/faq";
export default function Home() {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
