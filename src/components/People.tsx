import styled from "styled-components";

const People = () => {
  return (
    <Wrapper>
      <div className="section greate-people-sec">
        <div className="">
          <div className="cus-pad">
            <div className="aperete">
              <h3>Abbiamo posizioni aperte!</h3>
            </div>
            <div className="people">
              <span className="people-span">Great People Make</span>
              <span className="great-things-span"> Great Things.</span>
            </div>
            <div className="explore">
              <span>Esplora le nostre posizioni aperte.</span>
            </div>
            {/* Web div Button */}
            <div className="scopri-btn web-div">
              <button>Scopri di più</button>
            </div>
            {/* Web div Button */}
          </div>
          <div className="outer-people-image-section">
            <div className="people-image-section">
              <div className="people-inner">
                <img src="people.webp" alt="not found" className="people-img" />
              </div>
            </div>
            <div className="outer-hand">
              <div className="inner-hand">
                <img src="hand.webp" alt="notFound" />
              </div>
            </div>
          </div>

          {/* mobile div Button */}
          <div className="scopri-btn mob-div">
            <button>Scopri di più</button>
          </div>
          {/* mobile div Button */}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .section {
    padding: 12rem 0;
  }
  .greate-people-sec {
    position: relative;
    .cus-pad {
      padding-left: 10rem;
    }
  }
  .aperete {
    font-size: 2.2rem;
  }
  .people {
    margin-top: 3rem;
    .people-span {
      padding-left: 0.5rem;
      font-family: "Poppins", sans-serif;
      font-size: 4.4rem;
      line-height: normal;
    }
    .great-things-span {
      font-size: 4.4rem;
      font-family: "Poppins", sans-serif;
      line-height: normal;
      margin-left: 1.5rem;
      padding: 1rem 2rem 1.5rem 2rem;
      border-radius: 7rem;
      color: #fff;
      background: #9f00ee;
    }
  }
  .explore {
    margin-top: 2rem;
    span {
      font-size: 4.4rem;
      font-family: "Poppins", sans-serif;
      line-height: normal;
    }
  }

  .scopri-btn {
    margin-top: 3.5rem;
    button {
      border: none;
      font-weight: bold;
      background: #00204c;
      padding: 2rem 4rem;
      border-radius: 3rem;
      color: #fff;
      cursor: pointer;
      transition: all 0.3s ease;
      &:hover {
        background-color: #9f00ee;
        color: #fff;
      }
    }
  }
  .people-inner {
    margin-top: 2rem;
    .people-img {
      border-radius: 2rem;
      width: 635px;
      height: 328px;
    }
  }

  .outer-hand {
    .inner-hand {
      img {
        position: absolute;
        bottom: -163px;
        right: -182px;
        width: 114%;
      }
    }
  }
  .outer-people-image-section {
    display: flex;
    align-items: center;
    position: relative;
    .people-image-section {
      padding-left: 10rem;
    }
  }

  @media (max-width: 1440px) {
    .outer-hand {
      .inner-hand {
        img {
          right: -210px;
          width: 125%;
        }
      }
    }
  }

  @media (max-width: 768px) {
    /* .section {
      padding: 12rem 8rem;
    } */
    .greate-people-sec {
      .cus-pad {
        padding-left: 8rem;
      }
    }
    .outer-people-image-section {
      .people-image-section {
        padding-left: 8rem;
      }
    }
    .people {
      .great-things-span {
        font-size: 2.4rem;
        padding: 2rem 3rem 2rem 2rem;
      }
    }

    .explore {
      span {
        font-size: 3.9rem;
        line-height: 1em;
      }
    }
    .people-inner {
      .people-img {
        width: 500px;
        height: 280px;
      }
    }
    /* .outer-hand {
      .inner-hand {
        top: -23rem;
        img {
          width: 143%;
          height: 55rem;
        }
      }
    } */
  }
  @media (max-width: 576px) {
    .section {
      padding: 0 2rem 4rem 2rem;
    }
    .aperete {
      font-size: 1.8rem;
    }
    .people {
      .people-span {
        padding-left: 0.5rem;
        font-size: 2.4rem;
        line-height: normal;
      }
      .great-things-span {
        font-size: 1.7rem;
        margin-left: 0.5rem;
        padding: 1rem 2rem 1rem 2rem;
      }
    }

    .explore {
      span {
        font-size: 2.4rem;
        line-height: 0.5em;
      }
    }

    .people-inner {
      margin-top: 3rem;
      .people-img {
        width: 260px;
        height: 140px;
      }
    }

    /* .outer-hand {
      .inner-hand {
        top: -14rem;
        img {
          width: 144%;
          height: auto;
        }
      }
    } */
  }
  @media (max-width: 425px) {
    .greate-people-sec {
      .cus-pad {
        padding: 0 1rem;
      }
    }
    .outer-people-image-section {
      .people-image-section {
        padding: 0 1rem;
      }
    }

    .outer-hand {
      .inner-hand {
        img {
          right: -200px;
          width: 164%;
          bottom: -99px;
        }
      }
    }
  }

  @media (max-width: 375px) {
    .people {
      .great-things-span {
        padding: 0.5rem 0rem 0.5rem 0.5rem;
      }
    }
    .explore {
      span {
        line-height: 1.2em;
      }
    }
    .outer-hand {
      .inner-hand img {
        right: -160px;
        bottom: -85px;
      }
    }
  }

  /* @media screen and (min-width: 390px) and (min-width: 390px){

  } */

  @media (min-width: 390px) {
    .people {
      .great-things-span {
        font-size: 0.9rem;
        padding: 10px 20px;
      }
    }
    .outer-hand {
      .inner-hand img {
        right: -170px;
        bottom: -85px;
      }
    }
  }
  @media (max-width: 320px) {
    .people {
      .great-things-span {
        font-size: 0.9rem;
      }
    }
    .people-inner {
      .people-img {
        width: 225px;
      }
    }
    .outer-hand {
      .inner-hand img {
        right: -145px;
        bottom: -65px;
      }
    }
  }
`;

export default People;
