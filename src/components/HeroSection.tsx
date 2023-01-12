import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <Wrapper>
      <div className="container grid grid-three-columns">
        <div className="hero-plus-icon">
          <img src="plus.webp" alt="not found" />
        </div>
        <div className="outer-hero-atrate-icon">
          <div className="hero-atrate-icon">
            <div className="hero-atrate-inner">
              <Link
                activeClass="active"
                to="perche"
                spy={true}
                smooth={true}
                offset={50}
              >
                <img src="atrate.webp" alt="not found" className="atrate-img" />
              </Link>
              <div className="hero-para">
                <div>
                  <h1>à la carte</h1>
                </div>

                <div>
                  <p>
                    <strong>App Mobile e Web</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-circle-icon">
          <img src="circle.webp" alt="not found" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  .container {
    max-width: 120rem;
    margin: 0 auto;
  }
  .outer-hero-atrate-icon {
    margin-top: -5rem;
  }
  .hero-atrate-icon {
    padding: 3rem;
    margin: 0 3rem;
    background: #fff;
    border-radius: 3rem;
    .hero-atrate-inner {
      display: flex;
      gap: 2rem;
      .atrate-img {
        border: 4px solid lightblue;
        border-radius: 1.7rem;
      }
      .hero-para {
        margin-top: 2rem;
        p {
          font-size: 11px;
          font-weight: 800;
        }
      }
    }
  }
  .hero-plus-icon {
    margin-left: 5rem;
  }
  .hero-circle-icon {
    margin-left: 8rem;
  }

  @media (max-width: 768px) {
    .grid-three-columns {
      grid-template-columns: 1fr;
    }
  }
`;

export default HeroSection;
