import React from "react";
import styled from "styled-components";

const Vedi = () => {
  return (
    <Wrapper>
      <div className="leader-3">
        <div className="grid grid-three-columns">
          <div></div>
          <div className="vedi">
            <span className="vedi-span">Vedi </span>
            <span className="nostri-span"> I nostri progetti</span>
          </div>
          <div>
            <img src="mug.webp" alt="notFound" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .leader-3 {
    margin-top: 10rem;
    .grid {
      display: grid;
      gap: 3rem;
    }
    .grid-three-columns {
      grid-template-columns: 1fr 5fr 1fr;
    }
  }

  .vedi {
    text-align: center;
    .vedi-span {
      padding-left: 1rem;
      font-size: 4.4rem;
      line-height: normal;
    }
    .nostri-span {
      font-size: 4.4rem;
      line-height: normal;
      padding: 1rem 1rem 1.5rem 2rem;
      border-radius: 7rem;
      color: #fff;
      background: #9f00ee;
    }
  }
`;

export default Vedi;
