import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import Card from './CardItem'
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

    const [categoriesOrganization, setCategoriesOrganization] = useState([]);
    // const [reviewsOrganization, setReviewssOrganization] = useState([]);
    // let organizationID=organization.id;
    console.log(organization.avg_score);
    
    useEffect( () => {
        organizationsList();
        // reviewsList();
      }, [organizationID, categoriesOrganization.length])
    
      const organizationsList = () => {
        axios.get(`http://localhost:3000/organizations/${organizationID}/categories`)
        .then(response => {
          console.log(response);
          setCategoriesOrganization(response.data)
        })
        .catch(error => console.log('api errors:', error))
      }

      // const reviewsList = () => {
      //   axios.get(`http://localhost:3000/organizations/${organizationID}/reviews`)
      //   .then(response => {
      //     console.log(response);
      //     setReviewssOrganization(response.data)
      //   })
      //   .catch(error => console.log('api errors:', error))
      // }
  
  return (
    <StyledRoot>
      <StyledContainer>
        <Card
          title={organization.name}
          services={categoriesOrganization}
          categoryID={categoryID}
          organizationID={organizationID}
          reviews={organization.reviews_list}
          avg_score={organization.avg_score}
        />
      </StyledContainer>
    </StyledRoot>
  )
}

export default Parent