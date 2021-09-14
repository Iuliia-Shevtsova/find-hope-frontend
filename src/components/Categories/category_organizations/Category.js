import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
// import { List, Avatar } from 'antd';
import axios from 'axios'
// import { Card, Col, Row } from 'antd';
// import { Card } from 'antd';
import 'antd/dist/antd.css';
import CardItem from './CardItem';
import Parent from './Parent';
// import { ThemeProvider } from "styled-components";

const Container = styled.div`
    max-width: 80%;
    margin: auto;
    overflow: hidden;
    margin-top: 6rem;
    margin-bottom: 3rem;

    display: flex;
    ${'' /* flex-wrap: wrap; */}

    padding: 50px 12px;

  ${'' /* h3 {
    flex-basis: 100%;
    height: 0;

    font-weight: bold;
    text-align: center;
    margin: 10px auto;
    padding-bottom: 2em;
  } */}
`;

const SiderMenu  = styled.div`
    background: #EAEFF0;
    box-sizing: border-box;
    float: left;
    padding: 20px;
    margin: 20px;
    max-width: 25%;
    height: 500px;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto;
  grid-gap: 10px;

  @media (max-width: 1700px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto;
  }

  @media (max-width: 1350px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    width: 80%;
  }

  @media (max-width: 1200px) {
    width: 90%;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    width: 80%;
  }

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
const C = styled.div`
    max-width: 75%; 
    float: right;
    position: relative;
  

    h1{
      box-sizing: border-box;
    color: #FFF;
    line-height: 36px;
    min-height: 74px;
    padding-left: 100px !important;
    position: relative;
    background: #D59740;
    padding: 15px;
    margin: 15px;
      ${'' /* display: flex;
  flex-direction: column;
  align-items: flex-start; */}
    }
`;

const Category = ({categories, match}) => {
  const inialTheme = '';
  const [organizationsCategory, setOrganizationsCategory] = useState([]);
  
  const categoryID = match.params.id;
  // const categoryName = (categories  == null) ? '' : categories[categoryID-1].name;
  console.log(categories)
  // console.log(categoryName)
  console.log(categories[categoryID-1])

  useEffect( () => {
    organizationsList();
  // }, [categoryID])
  }, [categoryID, organizationsCategory.length])

  const organizationsList = () => {
    axios.get(`https://nydoors.herokuapp.com/categories/${categoryID}/organizations`)
    .then(response => {
      console.log(response);
      setOrganizationsCategory(response.data)
    })
    .catch(error => console.log('api errors:', error))
  }

  return (
      <Container>
      <SiderMenu>
            <Button as="a" href="/">All Organizations</Button>
            <Button as="a" href="/">Fill the form</Button>
        </SiderMenu>
        <C>
        <h1>Category {categoryID}</h1>
        <Content>
        {organizationsCategory.map((organization) => (
          <Parent 
            key={organization.id} 
            organization={organization}
            organizationID={organization.id}
            categoryID={categoryID}
          />
        ))}
        </Content>
        </C>
      </Container>
  )
}

export default Category;