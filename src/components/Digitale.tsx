import styled from "styled-components";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Link } from "react-scroll";

const Digitale = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="digitale-heading web-div">
          <h1>Consulenza Digitale , </h1>
          <button>Per Tutti</button>
          <p>Un élite di esperti Software, Designer e Marketer.</p>
        </div>
        {/* <div className="grid grid-three-columns">
          <div className="penelope-skin">
            <div className="penelope-skin-inner">
              <img
                src="penelope.webp"
                alt="not found"
                className="penelope-img"
              />
              <div className="penelope-para">
                <div>
                  <h1>Penelope Skin</h1>
                </div>

                <div>
                  <p>
                    <strong>E-Commerce</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="cosa">
            <Link
              activeClass="active"
              to="perche"
              spy={true}
              smooth={true}
              offset={50}
            >
              <div className="outer-cosa">
                <h1>COSA FACCIAMO</h1>
                <AiOutlineArrowDown className="arrow-icon" />
              </div>
            </Link>
          </div>
          <div className="penelope-skin">
            <div className="penelope-skin-inner">
              <img
                src="bariberi.webp"
                alt="not found"
                className="penelope-img"
              />
              <div className="penelope-para">
                <div>
                  <h1>Barbieri b'jou</h1>
                </div>

                <div>
                  <p>
                    <strong>E-Commerce</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className="mobile">
        <div className="grid grid-three-columns mob-hom-cols">
          <div className="penelope-skin">
            <div className="penelope-skin-inner">
              <img
                src="penelope.webp"
                alt="not found"
                className="penelope-img"
              />
              <div className="penelope-para">
                <div>
                  <h1>Penelope Skin</h1>
                </div>

                <div>
                  <p>
                    <strong>E-Commerce</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="cosa">
            <Link
              activeClass="active"
              to="perche"
              spy={true}
              smooth={true}
              offset={50}
            >
              <div className="hero-plus-icon mob-div">
                <img src="plus.webp" alt="not found" />
              </div>
              <div className="outer-cosa web-div">
                <h1>COSA FACCIAMO</h1>
                <AiOutlineArrowDown className="arrow-icon" />
              </div>
            </Link>
          </div>
          <div className="penelope-skin">
            <div className="penelope-skin-inner">
              <img
                src="bariberi.webp"
                alt="not found"
                className="penelope-img"
              />
              <div className="penelope-para">
                <div>
                  <h1>Barbieri b'jou</h1>
                </div>

                <div>
                  <p>
                    <strong>E-Commerce</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* padding: 9rem 0; */
  .container {
    max-width: 120rem;
  }
  .mob-hom-cols {
    position: relative;
  }
  .digitale-heading {
    margin-bottom: 3rem;
    text-align: center;
    h1 {
      font-family: "Poppins", sans-serif;
      font-size: 7rem;
      font-weight: 600;
    }
    button {
      border: none;
      background: #9f00ee;
      color: #fff;
      margin-top: 1rem;
      padding: 1rem 11rem;
      font-family: "Poppins", sans-serif;
      font-weight: 600;
      font-size: 7rem;
      border-radius: 7rem;
    }
    p {
      padding-top: 3rem;
      font-size: 2.4rem;
      line-height: normal;
    }
  }

  .penelope-skin {
    padding: 3rem;
    margin: 0 3rem;
    background: #fff;
    box-shadow: 6.43px 7.66px 10px 0px rgba(167, 0, 250, 0.1);
    border-radius: 3rem;
    .penelope-skin-inner {
      display: flex;
      gap: 2rem;
      .penelope-img {
        border: 4px solid lightblue;
        border-radius: 1.7rem;
      }
      .penelope-para {
        margin-top: 2rem;
        p {
          font-size: 12px;
          font-weight: 800;
        }
        h1 {
          font-size: 20px;
        }
      }
    }
  }

  .cosa {
    margin: 0 auto 0 auto;
    color: #9f00ee;
    h1 {
      font-size: 1.8rem;
      letter-spacing: 0.25em;
      font-weight: 500;
    }
    .outer-cosa {
      cursor: pointer;
      .arrow-icon {
        display: block;
        font-size: 4rem;
        margin: 1rem auto 0 auto;
      }
    }
  }

  .mobile {
    background: url("mobile.webp") no-repeat;
    background-size: cover;
    min-height: 157vh;
    background-position: -50px -65px;
  }

  @media (max-width: 768px) {
    .grid {
      gap: 7rem;
    }
    .grid-three-columns {
      grid-template-columns: 1fr;
    }

    .mobile {
      background-position: -60px 50px;
    }
  }

  @media (max-width: 425px) {
    .hero-plus-icon {
      img {
        width: 60px;
      }
    }
    .hero-plus-icon {
      position: absolute;
      left: 5%;
      bottom: 42%;
    }
  }

  @media (max-width: 576px) {
    .penelope-skin {
      padding: 2rem;
    }
    .grid {
      gap: 1.5rem;
    }
    .mobile {
      /* background-position: -360px 50px; */
      display: contents;
    }
    .digitale-heading {
      h1 {
        font-size: 4rem;
      }
      p {
        font-size: 2rem;
      }
      button {
        margin-top: 1rem;
        padding: 1rem 6rem;
        font-size: 4rem;
      }
    }
  }
`;

export default Digitale;
