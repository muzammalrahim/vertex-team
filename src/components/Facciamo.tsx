import React from "react";
import styled from "styled-components";

const Facciamo = () => {
  return (
    <Wrapper>
      <div className="container" id="facciamo">
        <div className="facciamo">
          <span className="cosa-span">Cosa </span>
          <span className="facciamo-span"> facciamo?</span>
        </div>
        <div className="facciamo-para">
          <p>
            Sviluppiamo software curandone la progettazione, la creazione e la
            post-produzione.
          </p>
        </div>
        <div className="facciamo-para1">
          <p>
            Siamo capaci di mantenerli nel tempo e costruirli sulla base delle
            vostre richieste aiutandovi anche nel posizionamento di mercato.
          </p>
        </div>

        <div className="grid grid-four-columns">
          <div className="platform-img">
            <span>App mobile e piattaforme Web</span>
          </div>
          <div className="ecommerce-img">
            <span>E-Commerce e Siti Web</span>
          </div>
          <div className="branding-img">
            <span>Branding posizionam e crescita</span>
          </div>

          <div className="vedi-img">
            <span>Vedi di piu</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  .container {
    max-width: 95rem;
    margin: 0 auto;
  }
  .grid {
    display: grid;
    gap: 3rem;
  }
  .grid-four-columns {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  .facciamo {
    text-align: center;
    .cosa-span {
      font-size: 4.4rem;
      line-height: normal;
      padding: 1rem 1rem 1.5rem 2rem;
      border-radius: 7rem;
      color: #fff;
      background: #9f00ee;
    }
    .facciamo-span {
      padding-left: 1rem;
      font-size: 4.4rem;
      line-height: normal;
    }
  }
  .facciamo-para {
    text-align: center;
    margin-left: 12rem;
    margin-right: 12rem;
    margin-top: 5rem;
    p {
      font-size: 2rem;
    }
  }
  .facciamo-para1 {
    text-align: center;
    margin-left: 12rem;
    margin-right: 12rem;
    margin-top: 5rem;
    margin-bottom: 10rem;
    p {
      font-size: 2rem;
    }
  }
  .platform-img {
    background: linear-gradient(
        180deg,
        rgba(110, 110, 110, 0),
        rgba(167, 0, 250, 0.75)
      ),
      url("platform.webp") no-repeat;
    background-size: 100% 100%;
    min-height: 360px;
    border-radius: 25px;

    width: 210.444px;
    /* height: 205px; */
    display: flex;
    justify-content: center;
    align-items: flex-end;
    span {
      font-size: 2.8rem;
      font-weight: 600;
      color: white;
      padding: 3rem;
    }
  }
  .ecommerce-img {
    background: linear-gradient(
        180deg,
        rgba(110, 110, 110, 0),
        rgba(167, 0, 250, 0.75)
      ),
      url("ecommerce.webp") no-repeat;
    background-size: 100% 100%;
    min-height: 360px;
    border-radius: 25px;

    width: 210.444px;
    /* height: 205px; */
    display: flex;
    justify-content: center;
    align-items: flex-end;
    span {
      font-size: 2.8rem;
      font-weight: 600;
      color: white;
      padding: 3rem;
    }
  }

  .branding-img {
    background: linear-gradient(
        180deg,
        rgba(110, 110, 110, 0),
        rgba(167, 0, 250, 0.75)
      ),
      url("branding.webp") no-repeat;
    background-size: 100% 100%;
    min-height: 360px;
    border-radius: 25px;

    width: 210.444px;
    /* height: 205px; */
    display: flex;
    justify-content: center;
    align-items: flex-end;
    span {
      font-size: 2.8rem;
      font-weight: 600;
      color: white;
      padding: 3rem;
    }
  }

  .vedi-img {
    background: linear-gradient(
      180deg,
      rgba(245, 42, 15, 0.9),
      rgba(167, 0, 250, 0.75)
    );
    background-size: 100% 100%;
    min-height: 360px;
    border-radius: 25px;

    width: 210.444px;
    /* height: 205px; */
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-size: 2.8rem;
      font-weight: 600;
      color: white;
      padding: 0 5.5rem;
    }
  }

  @media (max-width: 768px) {
    .grid {
      gap: 2.5rem;
    }
    .grid-four-columns {
      display: grid;
      justify-items: center;
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media (max-width: 576px) {
    .facciamo-para {
      text-align: start;
      margin-left: 3rem;
      margin-right: 0rem;
    }
    .facciamo-para1 {
      text-align: start;
      margin-left: 3rem;
      margin-right: 0rem;
    }
  }

  @media (max-width: 320px) {
    .facciamo-para {
      text-align: start;
      margin-left: 3rem;
      margin-right: 0rem;
    }
    .facciamo-para1 {
      text-align: start;
      margin-left: 3rem;
      margin-right: 0rem;
    }
    .facciamo {
      .facciamo-span {
        line-height: 2em;
      }
    }
  }
`;

export default Facciamo;
