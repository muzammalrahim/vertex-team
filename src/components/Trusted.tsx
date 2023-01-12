import React from "react";
import styled from "styled-components";

const Trusted = () => {
  return (
    <Wrapper>
      <div className="grid grid-two-columns">
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
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid {
    gap: 6rem;
  }

  .grid-two-columns {
    grid-template-columns: 0.5fr 1fr;
  }
  .leader {
    /* text-align: center; */
    margin-top: 7rem;
    p {
      padding-left: 1rem;
      font-size: 4.4rem;
      line-height: 1.5em;
      span {
        font-size: 4.4rem;
        line-height: normal;
        padding: 0.5rem 1.5rem;
        border-radius: 7rem;
        color: #fff;
        background: #9f00ee;
      }
    }
  }
  .leader1 {
    .grid-three-columns {
      margin-bottom: 12rem;
    }
    .outer-timeular-logo {
      img {
        margin-top: 3rem;
      }
    }
    .outer-penelope-logo {
      img {
        margin-top: 3rem;
      }
    }
    .barbieri-logo {
      margin-top: 4rem;
    }
  }
`;

export default Trusted;
