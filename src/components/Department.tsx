import React from "react";
import styled from "styled-components";

const Department = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="department">
          <span className="non-span">Non </span>
          <span className="department-span">
            {" "}
            vendiamo <i>"pacchetti"</i> di consulenza.
          </span>
        </div>

        <div className="department1">
          {/* <span className="trasmettiamo-span">trasmettiamo </span>
          <span className="department1-span">
          {" "}
          vendiamo <i>"pacchetti"</i> di consulenza.
        </span> */}
          <p>
            Semplicemente, <span>trasmettiamo</span> il nostro know-how come se
            fossimo un dipartimento interno alla vostra azienda.
          </p>
        </div>
        <div className="mug1">
          <img src="mug.webp" alt="not found" />
        </div>
      </div>
      <div className="outer-platform">
        <div className="platform">
          <div className="outer-stationary-box">
            <div className="stationary-box">
              <div className="grid grid-two-columns">
                <div className="platform1">
                  <div className="platform1-inner-head">
                    <h3>App Mobile e Piattaforme Web</h3>
                    <p>
                      Progettiamo e sviluppiamo sia{" "}
                      <span>
                        Applicazioni Mobile Native o Cross-platform, sia
                        Applicazioni Web Progressive
                      </span>
                      .
                    </p>
                    <p>
                      Consigliamo le tecnologie da usare in base al target di
                      costi e al tipo di Business e ci assicuriamo che I nostri
                      prodotti siano scalabili e mantenibili.
                    </p>

                    <div className="racco-btn">
                      <button>Raccontaci il tuo progetto!</button>
                    </div>
                  </div>
                </div>

                <div className="outer-platfrom1-img">
                  <img src="platform1.webp" alt="notFound" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="outer-platform">
        <div className="platform">
          <div className="outer-stationary-box">
            <div className="stationary-box">
              <div className="grid grid-two-columns">
                <div className="platform1">
                  <div className="platform1-inner-head">
                    <h3>E-Commerce e Siti web</h3>
                    <p>
                      Ti guidiamo durante l'intero processo di{" "}
                      <span>creazione del tuo brand</span>.
                    </p>
                    <p>
                      Da e-commerce a landing pages lavorando con noi avrai a
                      disposizione I tool corretti per fare le scelte
                      strategiche migliori.
                    </p>

                    <div className="racco-btn">
                      <button>Raccontaci il tuo progetto!</button>
                    </div>
                  </div>
                </div>

                <div className="outer-platfrom1-img">
                  <img src="ecommerce1.webp" alt="notFound" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="outer-platform">
        <div className="platform">
          <div className="outer-stationary-box">
            <div className="stationary-box">
              <div className="grid grid-two-columns">
                <div className="platform1">
                  <div className="platform1-inner-head">
                    <h3>Branding, posizionamento e crescita</h3>
                    <p>
                      Non è mai l'idea stessa che determina il successo o meno
                      di un progetto.i{" "}
                      <span>La chiave è sempre l'esecuzione</span>.
                    </p>
                    <p>
                      Da e-commerce a landing pages lavorando con noi avrai a
                      disposizione I tool corretti per fare le scelte
                      strategiche migliori.
                    </p>

                    <div className="racco-btn">
                      <button>Raccontaci il tuo progetto!</button>
                    </div>
                  </div>
                </div>

                <div className="outer-platfrom1-img">
                  <img src="branding1.webp" alt="notFound" />
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
  padding: 9rem 0;
  .grid {
    display: grid;
    gap: 2rem;
  }
  .grid-two-columns {
    grid-template-columns: 1.6fr 1fr;
  }

  .container {
    max-width: 100rem;
    margin: 0 auto;
  }
  .department {
    /* text-align: center; */
    .non-span {
      font-size: 4.4rem;
      line-height: normal;
      padding: 1rem 1rem 1.5rem 2rem;
      border-radius: 7rem;
      color: #fff;
      background: #9f00ee;
    }
    .department-span {
      padding-left: 1rem;
      font-size: 4.4rem;
      line-height: normal;
    }
  }

  .department1 {
    /* text-align: center; */
    margin-top: 7rem;
    p {
      padding-left: 1rem;
      font-size: 4.4rem;
      line-height: 1.5em;
      span {
        font-size: 4.4rem;
        line-height: normal;
        padding: 1rem 3rem 1.5rem 3rem;
        border-radius: 7rem;
        color: #fff;
        background: #9f00ee;
      }
    }
  }

  .mug1 {
    display: flex;
    justify-content: end;
    margin-right: -20rem;
  }

  .outer-platform {
    display: flex;
    justify-content: center;
    margin-top: 10rem;

    .platform {
      background-image: url("platform1-background.webp");
      background-repeat: no-repeat;
      background-size: cover;
      width: 1149px;
      height: 680px;

      .outer-stationary-box {
        margin-top: 8rem;
        margin-left: 11rem;
        .stationary-box {
          width: 70%;
          border-radius: 2rem;
          background: #fff;
          .platform1 {
            margin: 10rem 0 5rem 5rem;
            .platform1-inner-head {
              h3 {
                font-size: 2.4rem;
                padding-bottom: 4rem;
              }
              p {
                font-size: 1.5rem;
                font-weight: bold;
                padding-top: 2rem;
                padding-right: 8rem;
                line-height: 1.5;
                span {
                  color: #9f00ee;
                }
              }

              .racco-btn {
                margin-top: 6rem;
                button {
                  border: none;
                  font-size: 1.5rem;
                  font-weight: bold;
                  background-color: #9f00ee;
                  padding: 1.5rem 5rem 1.5rem 5rem;
                  color: #fff;
                }
              }
            }
          }

          .outer-platfrom1-img {
            margin-top: 7rem;
            margin-bottom: 7rem;
          }
        }
      }
    }
  }
`;

export default Department;
