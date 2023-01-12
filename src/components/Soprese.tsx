import React from "react";

const Soprese = () => {
  return (
    <div>
      <div className="outer-stationary">
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
      </div>
    </div>
  );
};

export default Soprese;
