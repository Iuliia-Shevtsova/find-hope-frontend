import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import OrganizationCardParent from "./OrganizationCardParent";
import axios from 'axios'

const Container = styled.div`
    max-width: 80%;
    margin: auto;
    overflow: hidden;
    margin-top: 6rem;
    margin-bottom: 3rem;
    display: flex;
    padding: 50px 12px;
`;

const SiderMenu  = styled.div`
    background: #EAEFF0;
    box-sizing: border-box;
    float: left;
    padding: 20px;
    margin: 20px;
    max-width: 25%;
`;

const Content = styled.div`
    ${'' /* max-width: 80%; */}
    width: 80%;
    float: right;
    position: relative;
    display: flex;
    flex-wrap: wrap;
`;

const Button = styled.button`
    background: #2E6072;
    border: none;
    box-sizing: border-box;
    color: #FFF;
    cursor: pointer;
    display: block;
    font: normal 16px/18px "National-Medium", sans-serif;
    padding: 15px 12px;
    margin: 20px 0;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    width: 100%;

    :hover {
        color: #fff;
    } 

    @media (max-width: 500px) {
        font-size: 1rem;
    }
`

const Organization = ({organizations, match}) => {

    let organizationID = match.params.org_id;
    console.log(organizationID)
    // let organization = organizations[organizationID-1];
    // console.log(organization)

    // function getOrganizationValue(key, array) {
    //     for (var i in array) {
    //       if (array[i].hasOwnProperty(key)) {
    //         return array[i][key];
    //       }
    //     }
    // }
      
    // let orgID = (getOrganizationValue('id', organizations));
    // console.log(orgID)

    const [organization, setOrganization] = useState({});
    const [categoriesOrganization, setCategoriesOrganization] = useState([]);

    useEffect( () => {
        organizationInfo();
        categoriesList();
      }, [organizationID, categoriesOrganization.length])
    
      const organizationInfo = () => {
        axios.get(`http://localhost:3000/organizations/${organizationID}`)
        .then(response => {
          console.log(response);
          setOrganization(response.data)
        })
        .catch(error => console.log('api errors:', error))
    }


    
    console.log(organization.avg_score);
    
      const categoriesList = () => {
        axios.get(`http://localhost:3000/organizations/${organizationID}/categories`)
        .then(response => {
          console.log(response);
          setCategoriesOrganization(response.data)
        })
        .catch(error => console.log('api errors:', error))
      }

    return (
        <Container>
        <SiderMenu>
            <Button as="a" href="/">All Organizations</Button>
            <Button as="a" href="/">Fill the form</Button>
        </SiderMenu>
        <Content>
            <OrganizationCardParent 
                organization = {organization}
                organizationID={organizationID}
                categories_list={categoriesOrganization}
            />
        </Content>
        </Container>
    )
    
}

export default Organization;