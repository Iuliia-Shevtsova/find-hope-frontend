import React from 'react'
import styled from 'styled-components'
import Reviews from './Reviews';

const StyledContainer = styled.div`
  ${'' /* border: 1px solid white; */}
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;  
  padding: 0;
  ${'' /* background: rgba(32,178,170, 0.5);
  background: linear-gradient(45deg, white, rgba(32,178,170, 0.5)); */}
  width: 100%
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 60% auto;
  grid-template-rows: 120px auto auto;
  ${'' /* grid-row-gap: 10px; */}
  width: 100%;
  ${'' /* padding: 20px; */}
`
const GridItemHeader = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
`

const GridItemInfo = styled.div`
    padding: 25px 12px 18px 24px;
    background: white;
`

const GridItemServices = styled.div`
    padding: 25px 24px 18px 12px;
    background: white;
`

const GridItemReviews = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
    padding: 25px 12px 18px 24px;
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
    background: linear-gradient(45deg, white, rgba(32,178,170, 0.5));

    h1{
    color: #008080;
    font-weight: bold;
    min-height: 74px;
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
        width: 80px;
        height: 80px;
        margin-left: auto ;
        margin-right: auto ;
    }
`;

const OrganizationCard = ({
    name,
    address,
    website,
    facebook,
    twitter,
    avg_score,
    reviews,
}) => {
    return (
<StyledContainer>
    <GridContainer>
        <GridItemHeader>
            <HeadInfo>
                <Image>
                    <img src='https://logo.clearbit.com/camba.org'/>
                </Image>
                <h1>{name}</h1>
            </HeadInfo>
        </GridItemHeader>
        <GridItemInfo>
            <Description>Address: {address}</Description>
        </GridItemInfo>
        <GridItemServices>
            <Description>{website, facebook, twitter}</Description>    
        </GridItemServices>
        <GridItemReviews>
            Score: {avg_score}
            <Reviews 
                reviews={reviews}
            />
        </GridItemReviews>
    </GridContainer>
  </StyledContainer>
    )
}
    


export default OrganizationCard