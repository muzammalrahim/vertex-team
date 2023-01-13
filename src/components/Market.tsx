import styled from "styled-components";

const Market = () => {
  return (
    <Wrapper id="contact">
      <div className="gorilla">
        <div className="section">
          <div className="team">
            <h3>Qual'è la mission di Vertex Team?</h3>
            <div className="team-heading">
              <h2>
                Guiding you from an idea seed to a full-blown, market-ready,
                gorilla-tested solution.
              </h2>
            </div>
          </div>
          <div className="dimi-btn">
            <button>Dimmi di più</button>
          </div>
        </div>
      </div>

      <div className="container grid grid-two-columns">
        <div className="boy">
          <img src="boy.webp" alt="notFound" />
        </div>

        <div className="outer-richi-form">
          <div className="inner-richi-form">
            <h1>Richiedi più informazioni</h1>
            <p>Ti contatteremo al più presto!</p>
            <form>
              <div className="grid grid-two-columns">
                <div className="section1">
                  <div className="label-text">
                    <label>Name *</label>
                  </div>
                  <div>
                    <input type="text" />
                  </div>
                </div>

                <div className="section1">
                  <div className="label-text">
                    <label>Email *</label>
                  </div>
                  <div>
                    <input type="text" />
                  </div>
                </div>
              </div>

              <div className="grid grid-one-columns main-section">
                <div className="label-text">
                  <label>Soggetto</label>
                </div>
                <input type="text" name="" id="" />
              </div>

              <div className="grid grid-one-columns main-side-section">
                <div className="label-text">
                  <label>Come possiamo aiutarti?</label>
                </div>
                <input type="text" name="" id="" />
              </div>

              <div className="invia-btn">
                <button>Invia</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    max-width: 105rem;
    margin: 0 auto;
  }
  .section {
    /* padding: 20rem 18rem; */
    padding: 20rem 0 0 18rem;
  }

  .gorilla {
    background: linear-gradient(
        180deg,
        rgba(110, 110, 110, 0),
        rgba(167, 0, 250, 0.75)
      ),
      url("gorilla.webp") no-repeat;
    background-size: cover;
    min-height: 150vh;
    background-attachment: fixed;

    .team {
      color: #fff;
      /* padding-top: 20rem; */
      h3 {
        font-size: 2.4rem;
      }
      .team-heading {
        margin-top: 3rem;
        margin-right: 30rem;
        h2 {
          font-family: "Poppins", sans-serif;
          font-size: 4.4rem;
          line-height: 6.5rem;
        }
      }
    }
  }
  .dimi-btn {
    margin-top: 3rem;
    button {
      border: none;
      background: #fff;
      padding: 2rem 3rem;
      border-radius: 5rem;
      font-size: 1.4rem;
      font-weight: bold;
      transition: all 0.3s ease;
      &:hover {
        background: #9f00ee;
        border: 1px solid #fff;
        color: #fff;
      }
    }
  }

  .boy {
    max-width: 115rem;
    margin-top: -25rem;
  }

  .outer-richi-form {
    .inner-richi-form {
      padding: 3rem;
      border-radius: 1rem;
      background-color: #fff;
      margin-top: -85%;

      .grid {
        display: rid;
        gap: 2rem;
      }
      h1 {
        font-size: 2.4rem;
        padding-bottom: 2rem;
      }
      p {
        font-size: 1.5rem;
        padding-bottom: 2rem;
      }

      .section1 {
        margin-bottom: 4rem;
        .label-text {
          padding-bottom: 1.5rem;
          label {
            font-size: 1.4rem;
          }
        }

        input {
          padding: 1.5rem 0;
        }
      }
    }
  }

  .main-section {
    margin-bottom: 4rem;

    .label-text {
      label {
        font-size: 1.4rem;
      }
    }

    input {
      padding: 1.5rem 0;
    }
  }

  .main-side-section {
    .label-text {
      label {
        font-size: 1.4rem;
      }
    }

    input {
      padding: 4.5rem 0;
    }
  }

  .invia-btn {
    margin-top: 3rem;
    button {
      border: none;
      background-color: #00204c;
      color: #fff;
      font-weight: bold;
      font-size: 1.4rem;
      padding: 2rem 17.6rem;
      border-radius: 15rem;
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    .container {
      max-width: 50rem;
    }
    .grid-two-columns {
      grid-template-columns: 1fr;
    }
    .gorilla {
      min-height: 125vh;
      .team {
        .team-heading {
          margin-right: 5rem;
        }
      }
    }
    .boy {
      max-width: 115rem;
      margin-top: 3rem;
    }

    .outer-richi-form {
      .inner-richi-form {
        margin-top: 0%;
        .section1 {
          input {
            padding: 1.5rem 0;
            width: 100%;
          }
        }

        .main-section {
          input {
            padding: 1.5rem 0;
            width: 105.5%;
          }
        }

        .main-side-section {
          input {
            padding: 4.5rem 0;
            width: 105.5%;
          }
        }
      }
    }
  }

  @media (max-width: 576px) {
    .container {
      max-width: 50rem;
    }
    .grid-two-columns {
      grid-template-columns: 1fr;
    }
    .gorilla {
      min-height: 80vh;
      .team {
        h3 {
          font-size: 2rem;
        }
        .team-heading {
          margin-right: 3rem;
          h2 {
            font-size: 3rem;
            line-height: 5rem;
          }
        }
      }
    }
    .boy {
      max-width: 115rem;
      margin-top: 3rem;
    }

    .outer-richi-form {
      width: 80%;
      margin: 0 auto 0 auto;
      .inner-richi-form {
        h1 {
          font-size: 2rem;
        }
        .section1 {
          margin-bottom: 1rem;
          input {
            padding: 1.5rem 0;
            width: 100%;
          }
        }

        .main-section {
          input {
            padding: 1.5rem 0;
            width: 105.5%;
          }
        }

        .main-side-section {
          input {
            padding: 4.5rem 0;
            width: 105.5%;
          }
        }
      }
    }
    .section {
      padding: 6rem 0 0 2rem;
    }
    .invia-btn {
      button {
        padding: 2rem 12rem;
      }
    }
  }

  @media (max-width: 375px) {
    .invia-btn {
      button {
        padding: 2rem 10rem;
      }
    }
  }

  @media (max-width: 320px) {
    .invia-btn {
      button {
        padding: 2rem 8rem;
      }
    }
    .gorilla {
      min-height: 95vh;
    }
  }
`;

export default Market;
