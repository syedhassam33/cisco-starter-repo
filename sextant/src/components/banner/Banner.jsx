import React from "react";
import styled from "styled-components";
import { Button } from "../button/Button";
import { useGlobalContext } from "../../context-api/context";
const Banner = () => {
  const {projectName, imgNetwork} = useGlobalContext();
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-banner-data">
          <h1 className="banner-heading">{projectName}</h1>
          <p className="banner-top-data">Powered by CISCO</p>
          <p className="banner-para">
            The place where it enables you to find data regarding or leated to your need...
          </p>
          <Button className="btn info-btn">
              Information
          </Button>
        </div>
        <div className="section-banner-image">
            <picture>
                <img src={imgNetwork} alt="Network" />
            </picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  .section-banner-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    
  }
  .btn {
    max-width: 16rem;
  }
  .banner-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }
  .banner-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }
  .banner-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }
  .section-banner-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  picture {
    text-align: center;
  }
  .banner-img {
    max-width: 80%;
  }
`;

export default Banner;
