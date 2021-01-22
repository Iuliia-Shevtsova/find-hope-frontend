import React from 'react';
import styled from 'styled-components';
import { Rate } from 'antd';

const StyledContainer = styled.div`
  border: 1px solid white;
  padding: 25px 12px 18px;
  ${'' /* background: linear-gradient(180deg, white , #F9E79F); */}
  background: white ;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  :hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`
const Title = styled.h3`
    color: #20B2AA;
    ${'' /* color: #D59740; */}
    font-weight: bold;
    border-bottom: double; 
    border-bottom-color: #20B2AA;
    margin-bottom: 5px;
    padding-bottom: 5px;
    @media (max-width: 250px) {
        font-size: 0.5rem;
        ${'' /* padding-left: 5px; */}
    }
`
const Description = styled.p`
  color: black;
  ${'' /* font-weight: 300; */}

    list-style-type: circle;
    text-align: left; 
    padding-left: 10px;
    padding-bottom: 0px;
    margin-bottom: 10px;
    margin-top: 10px;


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
const Actions = styled.div`
  color: #333;
  display: flex;
  align-items: center;
  svg {
    transform: translateY(2px);
    margin-right: 5px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    & button {
      width: 100%;
      margin-bottom: 4px;
      font-size: 0.65rem;
    }
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
  margin: 5px auto;
  padding: 5px 12px;
  background: rgba(32,178,170, 0.5);
  color: white;
  cursor: pointer;
  ${'' /* border: 1px solid #2E6072; */}
  border-radius: 10%;
  outline: 0;
  font-weight: 300;
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
  reviews,
  avg_score
}) => (
  <StyledContainer>
    <Title>{title}</Title>
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
    <Actions>
        <MoreButton as="a" href={`/category/${categoryID}/organizations/${organizationID}`}>
            More
        </MoreButton>
    </Actions>
  </StyledContainer>
)

export default Card