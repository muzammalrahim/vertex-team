import React from "react";
import styled from "styled-components";
import Trusted from "./Trusted";
import Vedi from "./Vedi";

const Partner = () => {
  return (
    <Wrapper>
      <div className="container">
        <Trusted />
        {/* <div className="grid grid-two-columns">
          <div className="leader">
            <p>
              I nostri clienti sono <span>leader</span> nei loro rispettivi
              settori
            </p>
          </div>

          <div className="leader1">
            <div className="grid grid-three-columns">
              <div>
                <img src="adidas-logo.webp" alt="notFound" />
              </div>

              <div className="outer-timeular-logo">
                <img
                  src="timeular-logo.webp"
                  alt="notFound"
                  className="timeular-logo"
                />
              </div>

              <div className="outer-penelope-logo">
                <img src="penelope-logo.webp" alt="notFound" />
              </div>
            </div>

            <div className="grid grid-three-columns">
              <div className="barbieri-logo">
                <img src="barbieri-logo.gif" alt="notFound" width={"100%"} />
              </div>

              <div className="outer-timeular-logo">
                <img
                  src="caret-logo.webp"
                  alt="notFound"
                  className="timeular-logo"
                />
              </div>

              <div className="outer-penelope-logo">
                <img src="mad-logo.webp" alt="notFound" />
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="leader-3">
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
        </div> */}
        <Vedi />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  .container {
    max-width: 110rem;
    margin: 0 auto;

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
  }
`;

export default Partner;
