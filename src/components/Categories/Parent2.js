import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import Card from './CardItem2'
import axios from 'axios'

const StyledRoot = styled.div`
  padding: 20px 18px;
  width: 250px;
  @media (max-width: 250px) {
    font-size: 0.5rem;
    max-width: 70%;
  }
`
const StyledContainer = styled.div`
  ${'' /* width: 350px; */}
  width: 100%;
  margin: auto;
`



const Parent = ({organization, organizationID, categoryID}) => {

    const [categoriesOrganization, setcategoriesOrganization] = useState([]);
    // let organizationID=organization.id;

    useEffect( () => {
        organizationsList();
      // }, [categoryID])
      }, [organizationID, categoriesOrganization.length])
    
      const organizationsList = () => {
        axios.get(`http://localhost:3000/organizations/${organizationID}/categories`)
        .then(response => {
          console.log(response);
          setcategoriesOrganization(response.data)
        })
        .catch(error => console.log('api errors:', error))
      }
  
  return (
    <StyledRoot>
      <StyledContainer>
        <Card
          title={organization.name}
          services={categoriesOrganization}
          categoryID={categoryID}
          organizationID={organizationID}
        />
      </StyledContainer>
    </StyledRoot>
  )
}

export default Parent