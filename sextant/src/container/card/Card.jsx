import React from "react";
import styled from "styled-components";
import Carddata from "../../components/carddata/Carddata";

const Card = () => {
  return (
    <CardDiv>
      <div className="container card__section grid grid-three-column">
        <div className="card">
          <div className="card__title">
            <h3>NETWORK DATA</h3>
          </div>
          <div className="card__body"></div>
            <Carddata/>
        </div>

        <div className="card">
          <div className="card__title">
            <h3>NETWORK DATA</h3>
          </div>
          <div className="card__body"></div>
            <Carddata/>
        </div>

        <div className="card">
          <div className="card__title">
            <h3>NETWORK DATA</h3>
          </div>
          <div className="card__body"></div>
            <Carddata/>
        </div>

        <div className="card">
          <div className="card__title">
            <h3>NETWORK DATA</h3>
          </div>
          <div className="card__body"></div>
            <Carddata/>
        </div>
      </div>

      
    </CardDiv>
  );
};

const CardDiv = styled.section`
  padding: 9rem 0;
  .card {
    margin: 2rem 2rem 2rem 0;
    padding: 1.5rem;
    width: 250px;
    max-height: auto;
    box-shadow: 0 0 28px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    border-radius: 20px;
  }

  .card__section {
    margin-left: auto;
    margin-right: auto;
  }

  .card__title {
    font-weight: 800;
    font-size: 1.5rem;
  }

  .card:hover {
    transform: scale(1.1);
  }
`;

export default Card;
