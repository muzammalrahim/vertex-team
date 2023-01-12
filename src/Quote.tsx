import React from "react";
import styled from "styled-components";
import Partner from "./components/Partner";
import Perche from "./components/Perche";
import PercheNoi from "./components/PercheNoi";
import Trusted from "./components/Trusted";
import Vedi from "./components/Vedi";

const Quote = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="parchiNoi-section">
          <PercheNoi />
        </div>
        <div className="vedi-section">
          <Vedi />
        </div>
        <Trusted />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .parchiNoi-section {
    margin-bottom: 25rem;
  }
  .vedi-section {
    margin-bottom: 10rem;
  }
`;

export default Quote;
