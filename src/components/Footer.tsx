import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div className="">
        <div className="vertex-team">
          <div className="vertex-team-inner">
            <img src="cross.webp" alt="" />
            <h1>Vertex Team</h1>
          </div>
        </div>
        <div className="digital-era">
          <h1>
            Creating the very best software solutions of the <b>digital era.</b>
          </h1>
          <hr className="hr-line" />
        </div>
        {/* main footer */}
        <footer>
          <div className="grid grid-four-columns">
            <div className="footer-contact">
              <h1>Contact</h1>
              <p>hello@vertexteam.io</p>
              <p>P.IVA: IT04249220981</p>
              <p>hello@vertexteam.io</p>
              <p>Via della Noce, 13</p>
              <p>25125 Brescia BS, Italy 🇮🇹</p>
            </div>

            <div className="footer-team">
              <h1>Iscriviti alla nostra newsletter per rimanere</h1>
              <h1>aggiornati sul progresso di Vertex Team!</h1>
              <form>
                <div className="label-text">
                  <label>La tua email:*</label>
                </div>
                <div className="form-data">
                  <input type="text" />
                  <div className="iscriv-btn">
                    <button>Iscriviti!</button>
                  </div>
                </div>
              </form>
            </div>

            <div className="footer-menu">
              <h1>Menu</h1>
              <p>
                <a href="#">Home</a>
              </p>
              <p>
                <a href="#">Portfolio</a>
              </p>
              <p>
                <a href="#">Unisciti a noi!</a>
              </p>
              <p>
                <a href="#">Contattaci</a>
              </p>
              <p>
                <a href="#">Preventivo</a>
              </p>
              <p>
                <a href="#">Privacy Policy</a>
              </p>
            </div>

            <div className="footer-social">
              <h1>Social</h1>
              <p>
                <a href="#">Facebook</a>
              </p>
              <p>
                <a href="#">Instagram</a>
              </p>
              <p>
                <a href="#">Calendly</a>
              </p>
            </div>
          </div>
          {/* bottom footer */}
          <div className="footer-bottom--section">
            <p>
              © {new Date().getFullYear()} by Vertex Team @ Epilogo SRL
              IT04249220981
            </p>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid {
    display: grid;
    gap: 9rem;
  }
  .grid-four-columns {
    grid-template-columns: 1fr 1.5fr 0.5fr 0.5fr;
  }
  padding: 14rem 6rem 9rem 6rem;
  .vertex-team {
    background: #fff;
    border-radius: 2rem;
    width: 20%;
    .vertex-team-inner {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 2rem 3rem 4rem 2rem;
      h1 {
        font-size: 2.1rem;
      }
    }
  }
  .digital-era {
    margin-top: 2rem;
    h1 {
      font-size: 2.4rem;
      b {
        color: #a700fa;
      }
    }
    .hr-line {
      margin-top: 5rem;
      margin-bottom: 2rem;
      border-bottom: 1px solid #00204c;
    }
  }

  .footer-contact {
    color: #00204c;
    h1 {
      font-size: 1.8rem;
      padding-bottom: 2rem;
    }
    p {
      font-size: 1.5rem;
      line-height: 3rem;
    }
  }

  .footer-team {
    color: #00204c;
    h1 {
      font-size: 1.8rem;
    }
  }

  .footer-menu {
    color: #00204c;
    h1 {
      font-size: 1.8rem;
      padding-bottom: 2rem;
    }
    p {
      font-size: 1.5rem;
      line-height: 3rem;
      a {
        color: #00204c;
      }
    }
  }

  .footer-social {
    color: #00204c;
    h1 {
      font-size: 1.8rem;
      padding-bottom: 2rem;
    }
    p {
      font-size: 1.5rem;
      line-height: 3rem;
      a {
        color: #00204c;
      }
    }
  }
  .footer-bottom--section {
    padding-top: 10rem;
    p {
      font-size: 1.5rem;
    }
  }

  .footer-team {
    .label-text {
      margin-top: 2rem;
      label {
        font-size: 1.5rem;
      }
    }
    .form-data {
      display: flex;
      gap: 2rem;
      input {
        width: 80%;
        margin-top: 2rem;
        padding: 2rem 0;
      }
      .iscriv-btn {
        margin-top: 2rem;
        button {
          border: none;
          border-radius: 5rem;
          background: #a700fa;
          color: #fff;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: bold;
          padding: 2rem 3rem;
          &:hover {
            background-color: #00204c;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .grid-four-columns {
      grid-template-columns: 1fr;
    }

    .footer-team {
      .form-data {
        display: flex;
        flex-direction: column;
        input {
          width: 95%;
        }
        .iscriv-btn {
          margin-top: 1rem;
          button {
            border-radius: 5rem;
            padding: 1.7rem 8rem;
          }
        }
      }
    }

    .vertex-team {
      width: 40%;
    }
  }

  @media (max-width: 576px) {
    .vertex-team {
      width: 70%;
      .vertex-team-inner {
        display: flex;
        gap: 1rem;
        padding: 2rem 2rem;
      }
    }
  }

  @media (max-width: 375px) {
    .vertex-team {
      width: 80%;
    }
  }

  @media (max-width: 320px) {
    .vertex-team {
      width: 103%;
    }
  }
`;

export default Footer;
