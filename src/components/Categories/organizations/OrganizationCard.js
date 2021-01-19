import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  ${'' /* border: 1px solid white; */}
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;  
  padding: 0;
  background: rgba(32,178,170, 0.5);
  background: linear-gradient(45deg, white, rgba(32,178,170, 0.5));
`
const Container = styled.div`
  ${'' /* border: 1px solid white; */}
  padding: 25px 12px 18px;
  background: white;
`

const Title = styled.h2`
  color: #2E6072;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`
const Description = styled.p`
  color: #2E6072;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 0.75rem;
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
const Action = styled.button`
  margin: 0 5px;
  padding: 8px 14px;
  background: rgba(155, 155, 155, 0.2);
  color: #2E6072;
  cursor: pointer;
  border: 1px solid #fff;
  outline: 0;
  font-weight: 300;
  :hover {
    opacity: 0.8;
  }
  :active {
    background: darkgreen;
  }
`

const HeadInfo = styled.div`
    padding: 10px;
    margin: 0;
    display: flex;
    align-items: baseline;
    ${'' /* justify-content: flex-start; */}

    h1{
      ${'' /* box-sizing: border-box; */}
    color: #008080;
    font-weight: bold;
    ${'' /* line-height: 36px; */}
    min-height: 74px;
    ${'' /* padding-left: 100px !important; */}
    position: relative;
    
    padding: 15px;
    margin: 15px;
    }

    
`;

const Image = styled.div`
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    border: 2px solid #eee;
    background-color: #fff;
    z-index: 1;
    display: block;
    margin: auto 10px;
    img {
        width: 100px;
        height: 100px;
        margin: auto ;
    }
`;

const Card = ({
  title,
  description,
  actions,
}) => (
  <StyledContainer>
    <HeadInfo>
        <Image>
            <img src='https://logo.clearbit.com/camba.org'/>
        </Image>
        <h1>gkgjh</h1>
    </HeadInfo>
    <Container>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Actions>
        {actions.map(({ label }) => (
            <Action>{label}</Action>
        ))}
        </Actions>
    </Container>
  </StyledContainer>
);

export default Card