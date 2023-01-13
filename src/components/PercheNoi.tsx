import styled from "styled-components";

const PercheNoi = () => {
  return (
    <Wrapper>
      <div className="mug">
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
          centro del processo di sviluppo la comunicazione diretta cliente-team.
        </p>
      </div>
      <div className="perche-para2">
        <p>
          Questo toglie la possibilità di sovrapprezzare I nostri servizi e
          azzera la probabilità di lavorare con specifiche errate.
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .mug {
    display: flex;
    justify-content: end;
  }
  .perche {
    text-align: center;
    .perche-span {
      font-size: 4.4rem;
      line-height: normal;
      font-family: "Poppins", sans-serif;
      padding: 1rem 1rem 1.5rem 2rem;
      border-radius: 7rem;
      color: #fff;
      background: #9f00ee;
    }
    .noi-span {
      padding-left: 1rem;
      font-size: 4.4rem;
      font-family: "Poppins", sans-serif;
      line-height: normal;
    }
  }

  .perche-para {
    text-align: center;
    margin-top: 5rem;
    p {
      font-size: 2rem;
    }
  }
  .perche-para1 {
    text-align: center;
    margin-left: 27rem;
    margin-right: 27rem;
    margin-top: 5rem;
    margin-bottom: 4rem;
    p {
      font-size: 2rem;
    }
  }
  .perche-para2 {
    text-align: center;
    margin-left: 27rem;
    margin-right: 27rem;
    p {
      font-size: 2rem;
    }
  }

  @media (max-width: 768px) {
    .perche-para1 {
      margin-left: 12rem;
      margin-right: 12rem;
      p {
        font-size: 2rem;
      }
    }

    .perche-para2 {
      margin-left: 12rem;
      margin-right: 12rem;
      p {
        font-size: 2rem;
      }
    }
  }

  @media (max-width: 576px) {
    .mug {
      display: none;
    }
    .perche-para1 {
      margin-left: 5rem;
      margin-right: 5rem;
      p {
        font-size: 2rem;
      }
    }

    .perche-para2 {
      margin-left: 5rem;
      margin-right: 5rem;
      p {
        font-size: 2rem;
      }
    }
  }

  @media (max-width: 320px) {
    .perche-para1 {
      margin-left: 0rem;
      margin-right: 0rem;
      p {
        font-size: 2rem;
      }
    }

    .perche-para2 {
      margin-left: 1rem;
      margin-right: 1rem;
      p {
        font-size: 2rem;
      }
    }
  }
`;

export default PercheNoi;
