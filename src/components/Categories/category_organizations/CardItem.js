import React from 'react';
import styled from 'styled-components';
import { Rate } from 'antd';

const StyledContainer = styled.div`
  border: 1px solid white;
  padding: 25px 12px 18px;
  background: white ;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 100%;

  position: relative;
  display: flex;
  flex-direction: column;
`

const Title = styled.div`

h3 {
  color: #20B2AA;
    font-weight: bold;
}
  border-bottom: 5px double #20B2AA; 
  ${'' /* border-bottom-color: #20B2AA; */}
  margin-bottom: 5px;
  padding-bottom: 5px;
  @media (max-width: 250px) {
      font-size: 0.5rem;
  }
`

const Description = styled.p`
  color: black;
  ${'' /* font-weight: 300; */}

  list-style-type: circle;
  text-align: center; 
  padding-left: 10px;
  padding-bottom: 0px;
  margin-top: 10px;
  ${'' /* space for button */}
  margin-bottom: 50px;

  p {
      font-size: 1em;
      font-weight: bold;
      padding-bottom: 0px;
      margin-bottom: 0px;
  }

  @media (max-width: 250px) {
    font-size: 0.75rem;
    ${'' /* padding-left: 5px; */}
  }
`

const Ul  = styled.div`
    list-style-type: circle;
    text-align: left; 
    padding-left: 10px;
    padding-bottom: 0px;
    margin-bottom: 10px;
    margin-top: 10px;
`
const MoreButton = styled.button`
  margin: 10px auto;
  padding: 5px 12px;
  background: rgba(32,178,170, 0.5);
  color: white;
  cursor: pointer;
  border-radius: 10%;
  outline: 0;
  font-weight: 300;

  position: absolute;
    bottom: 10px;
    left: 40%;

  :hover {
    background: #20B2AA;
    color: white;
  }
  :active {
    
    opacity: 0.8;
  }
`
const Score = styled.div`
  margin-left: auto;
  margin-right: auto;
`;


const Card = ({
  title,
  services,
  categoryID,
  organizationID,
  avg_score
}) => (
  <StyledContainer>
    <Title>
      <h3>{title}</h3>
    </Title>
    <Description>
      <p>Services provided:</p>
      <Ul>
      {services.map((service, index) => (
          <li key={index}>
              {service.name}
          </li>
      ))}
      </Ul>
      <Score><Rate disabled value={avg_score} /></Score>
    </Description>
      <MoreButton as="a" href={`/category/${categoryID}/organizations/${organizationID}`}>
          More
      </MoreButton>
  </StyledContainer>
)

export default Card