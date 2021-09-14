import React from 'react'
import styled from 'styled-components'
import Reviews from './reviews/Reviews';
import { Link } from 'react-router-dom';


const StyledContainer = styled.div`
  ${'' /* border: 1px solid white; */}
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;  
  padding: 0;
  ${'' /* background: rgba(32,178,170, 0.5);
  background: linear-gradient(45deg, white, rgba(32,178,170, 0.5)); */}
  width: 100%;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 60% auto;
  grid-template-rows: 120px auto auto;
  width: 100%;
  ${'' /* width: 300px; */}

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


const Description = styled.div`
  color: #2E6072;
  font-weight: bold;
  p{
    font-weight: 300;
  }
  @media (max-width: 500px) {
    font-size: 0.75rem;
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

const Ul  = styled.div`
    list-style-type: circle;
    text-align: left; 
    padding-left: 10px;
    padding-bottom: 0px;
    margin-bottom: 10px;
    margin-top: 10px;

    li{
      padding-bottom: 10px;
    }
`


const OrganizationCard = ({
    organizationID,
    organization,
    categories_list
}) => {
    return (
      <StyledContainer>
        <GridContainer>
            <GridItemHeader>
                <HeadInfo>
                    <Image>
                        <img src={organization.url}/>
                    </Image>
                    <h1>{organization.name}</h1>
                </HeadInfo>
            </GridItemHeader>
            <GridItemInfo>
                <Description>Address: <p>{organization.address}</p></Description>
                <Description>Contact Person: <p>{organization.contact_name}</p></Description>
                <Description>Hours: <p>{organization.hours}</p></Description>
                <Description>Tel: <p>{organization.phone}</p></Description>
                <Description>Fax: <p>{organization.fax}</p></Description>
                <Link style={{paddingRight:'20px'}} to={`/${organization.facebook}`}>Facebook</Link>
                <Link to={`/${organization.twitter}`}>Twitter</Link>
            </GridItemInfo>
            <GridItemServices>
                <Description> Services provided: </Description>  
                  <Ul>
                    {categories_list.map((service, index) => (
                        <li key={index}>
                            {service.name}
                        </li>
                    ))}
                  </Ul>
            </GridItemServices>
            <GridItemReviews>
                <Reviews 
                    reviews_list={organization.reviews}
                    organization_name={organization.name}
                    organizationID={organizationID}
                />
            </GridItemReviews>
        </GridContainer>
      </StyledContainer>
    )
}
    


export default OrganizationCard