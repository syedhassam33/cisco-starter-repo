import React from "react";
import styled from "styled-components";

const Carddata = () => {
  return (
    <DataStyle>
      <div className="grid__data">
        Public IP : 
      </div>
      <div className="grid__data">
        Latency : 
      </div>
    </DataStyle>
  );
};

const DataStyle = styled.div`
  padding: 2rem 0 0 0;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 20px 20px 20px 20px;
  

  .grid__data {
    font-weight : 300;
    font-size: 1.3rem;
    transition: transform 0.3s ease;
    
  }

  .grid__data:hover{
    transform: scale(1.1);
  }

`;
export default Carddata;
