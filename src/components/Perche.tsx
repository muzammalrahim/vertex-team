import styled from "styled-components";
import PercheNoi from "./PercheNoi";
import Soprese from "./Soprese";

const Perche = () => {
  return (
    <Wrapper>
      <div className="container" id="perche">
        {/* <div className="mug">
          <img src="mug.webp" alt="not found" />
        </div>
        <div className="perche">
          <span className="perche-span">Perché </span>
          <span className="noi-span"> noi?</span>
        </div>
        <div className="perche-para">
          <p>Lavorando con noi scoprirai un nuovo modo di lavorare.</p>
        </div>
        <div className="perche-para1">
          <p>
            Seguiamo un modello chiamato "Transparent development" che pone al
            centro del processo di sviluppo la comunicazione diretta
            cliente-team.
          </p>
        </div>
        <div className="perche-para2">
          <p>
            Questo toglie la possibilità di sovrapprezzare I nostri servizi e
            azzera la probabilità di lavorare con specifiche errate.
          </p>
        </div> */}
        <PercheNoi />
        <Soprese />
        {/* <div className="outer-stationary">
          <div className="stationary">
            <div className="poche-parole">
              <span className="poche-parole-span">In poche parole . . . </span>
              <span className="zero-span"> Zero Sorprese</span>
            </div>
            <div className="outer-stationary-box">
              <div className="stationary-box">
                <div className="richiedi">
                  <div className="tick">
                    <img src="tick.webp" alt="not found" className="tick-img" />
                    <div className="richiedi-para">
                      <div>
                        <h1>
                          Richiedi un Preventivo <b>Gratuito!</b>
                        </h1>
                      </div>

                      <div>
                        <p>
                          <strong>Vertex Team</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="richdi-para1">
                    <p>
                      Sarete ricontattati al più presto per fissare un
                      appuntamento in cui potremmo delineare le specifiche, I
                      costi e le tempistiche del vostro progetto.
                    </p>
                  </div>
                </div>

                <div className="nostro-btn">
                  <button>Il nostro calendario</button>
                </div>
                <div className="richdi-btn">
                  <button>Richiedi un preventivo</button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 0 0 9rem 0;

  .outer-stationary {
    display: flex;
    justify-content: center;
    margin-top: 10rem;
    .stationary {
      background-image: url("stationary.webp");
      background-repeat: no-repeat;
      background-size: cover;
      width: 980px;
      height: 748px;

      .poche-parole {
        margin-top: 10rem;
        text-align: center;
        .poche-parole-span {
          padding-left: 1rem;
          font-family: "Poppins", sans-serif;
          font-size: 4.4rem;
          line-height: normal;
          color: #fff;
        }
        .zero-span {
          font-size: 4.4rem;
          line-height: normal;
          font-family: "Poppins", sans-serif;
          padding: 1rem 2rem 1.5rem 2rem;
          border-radius: 7rem;
          color: #fff;
          background: #9f00ee;
        }
      }
      .outer-stationary-box {
        display: flex;
        justify-content: center;
        margin-top: 10rem;
        .stationary-box {
          width: 70%;
          border-radius: 1rem;
          background: #fff;
          .richiedi {
            padding: 3rem;
            .tick {
              display: flex;
              flex-wrap: wrap;
              gap: 2rem;
              .tick-img {
                border: 6px solid #eaf2ff;
                border-radius: 3rem;
              }
              .richiedi-para {
                margin-top: 2rem;
                h1 {
                  font-size: 2.2rem;
                  b {
                    color: #9f00ee;
                  }
                }
                p {
                  font-size: 1.25rem;
                  font-weight: 800;
                }
              }
            }
            .richdi-para1 {
              margin-top: 5rem;
              margin-right: 35rem;
              p {
                font-size: 1.5rem;
                line-height: 2.3rem;
              }
            }
          }
          .nostro-btn {
            margin-left: 5rem;
            margin-right: 5rem;
            margin-bottom: 2rem;
            button {
              padding: 1rem 20rem;
              font-size: 1.4rem;
              font-weight: bold;
              color: #fff;
              border: none;
              background: #9f00ee;
            }
          }

          .richdi-btn {
            margin-left: 5rem;
            margin-right: 5rem;
            margin-bottom: 4rem;
            button {
              padding: 1rem 18.8rem;
              font-size: 1.4rem;
              font-weight: bold;
              color: #fff;
              border: none;
              background: #9f00ee;
            }
          }
        }
      }
    }
  }

  @media (max-width: 786px) {
    .outer-stationary {
      .stationary {
        background-image: url("stationary.webp");
        background-repeat: no-repeat;
        background-size: cover;
        width: 980px;
        height: 828px;

        .outer-stationary-box {
          .stationary-box {
            width: 75%;
            border-radius: 1rem;
            background: #fff;
            .richiedi {
              .richdi-para1 {
                margin-right: 25.5rem;
              }
            }
            .nostro-btn {
              button {
                padding: 1rem 16rem;
              }
            }

            .richdi-btn {
              button {
                padding: 1rem 14.8rem;
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 576px) {
    .outer-stationary {
      .stationary {
        width: 980px;
        height: 810px;

        .poche-parole {
          margin-top: 3rem;
          .poche-parole-span {
            display: flex;
            flex-direction: column;
            font-size: 2rem;
          }
          .zero-span {
            font-size: 2rem;
            line-height: 3em;
            padding: 1rem 2rem 1.5rem 2rem;
          }
        }

        .outer-stationary-box {
          margin-top: 4rem;
          .stationary-box {
            width: 95%;
            border-radius: 1rem;
            background: #fff;
            .richiedi {
              .richdi-para1 {
                margin-right: 0rem;
              }
            }
            .richiedi {
              .tick {
                display: flex;
                justify-content: center;
              }
            }
            .nostro-btn {
              margin-left: 3rem;
              button {
                padding: 2.5rem 9rem;
              }
            }

            .richdi-btn {
              margin-left: 3rem;

              button {
                padding: 2.5rem 7.8rem;
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 375px) {
    .outer-stationary {
      .stationary {
        height: 830px;
        .outer-stationary-box {
          .stationary-box {
            .nostro-btn {
              margin-left: 3rem;
              button {
                padding: 2.5rem 6rem;
              }
            }
            .richdi-btn {
              margin-left: 3rem;

              button {
                padding: 2.5rem 4.8rem;
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 320px) {
    .outer-stationary {
      .stationary {
        height: 880px;
      }
    }
  }
`;

export default Perche;
