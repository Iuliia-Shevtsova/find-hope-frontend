import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import Card from './CardItem'
import axios from 'axios'

const StyledRoot = styled.div`
  ${'' /* padding: 20px 18px;
  width: 250px;
  @media (max-width: 250px) {
    font-size: 0.5rem;
    max-width: 70%;
  } */}

  display: flex;
  justify-content: center;
  padding: .5rem;
`
const StyledContainer = styled.div`
  ${'' /* width: 350px; */}
  width: 100%;
  ${'' /* height: 250px; */}
  margin: auto;
`



const Parent = ({organization, organizationID, categoryID}) => {

    const [categoriesOrganization, setCategoriesOrganization] = useState([]);
    console.log(organization.avg_score);
    
    useEffect( () => {
      categoriesList();
      }, [organizationID, categoriesOrganization.length])
    
      const categoriesList = () => {
        axios.get(`https://nydoors.herokuapp.com/organizations/${organizationID}/categories`)
        .then(response => {
          console.log(response);
          setCategoriesOrganization(response.data)
        })
        .catch(error => console.log('api errors:', error))
      }
  
  return (
    <StyledRoot>
      {/* <StyledContainer> */}
        <Card
          title={organization.name}
          services={categoriesOrganization}
          categoryID={categoryID}
          organizationID={organizationID}
          reviews={organization.reviews_list}
          avg_score={organization.avg_score}
        />
      {/* </StyledContainer> */}
    </StyledRoot>
  )
}

export default Parent