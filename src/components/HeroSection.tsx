import styled from "styled-components";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <Wrapper>
      {/* mobile div */}
      <div className="digitale-heading mob-div">
        <h1>Consulenza Digitale , </h1>
        <button>Per Tutti</button>
        <p>Un élite di esperti Software, Designer e Marketer.</p>
      </div>
      {/* mobile div */}
      <div className="container grid grid-three-columns vertex-hero">
        <div className="hero-plus-icon web-div">
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
  @media (max-width: 425px) {
    padding: 3rem 0;
  }
  .container {
    max-width: 120rem;
    margin: 0 auto;
  }
  .vertex-hero {
    position: relative;
  }
  .outer-hero-atrate-icon {
    margin-top: -5rem;
  }
  .hero-atrate-icon {
    padding: 3rem;
    margin: 0 3rem;
    background: #fff;
    border-radius: 3rem;
    box-shadow: 6.43px 7.66px 10px 0px rgba(167, 0, 250, 0.1);
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
          font-size: 12px;
          font-weight: 800;
        }
        h1 {
          font-size: 20px;
        }
      }
    }
  }
  .hero-plus-icon {
    /* margin-left: 5rem; */
    margin-left: -14rem;
    margin-top: -18px;
  }
  .hero-circle-icon {
    margin-left: 8rem;
    img {
      position: relative;
      right: -75%;
    }
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

  @media (max-width: 1440px) {
    .hero-plus-icon {
      margin-left: 6rem;
      margin-top: -18px;
    }
    .hero-circle-icon {
      img {
        position: unset;
      }
    }
  }

  @media (max-width: 1024px) {
    .hero-atrate-icon {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    .grid {
      gap: 0;
    }
    .hero-plus-icon {
      img {
        width: 65%;
      }
    }
    .hero-circle-icon {
      img {
        width: 65%;
      }
    }
  }

  @media (max-width: 576px) {
    .hero-atrate-icon {
      padding: 2rem;
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
        padding-bottom: 6rem;
      }
      button {
        margin-top: 1rem;
        padding: 1rem 6rem;
        font-size: 4rem;
      }
    }
  }

  @media (max-width: 425px) {
    .hero-circle-icon {
      position: absolute;
      top: -85px;
      right: 15px;
    }
    .hero-circle-icon img {
      width: 60px;
    }
    .hero-atrate-icon {
      width: unset;
    }
    .grid-three-columns {
      grid-template-columns: 1fr;
    }
  }
`;

export default HeroSection;
