import React, {useState} from 'react';
import styled from 'styled-components';
// import { List, Avatar } from 'antd';
import { Link } from 'react-router-dom';
// import { Card, Col, Row } from 'antd';
import { Card } from 'antd';
import 'antd/dist/antd.css';
// import { ThemeProvider } from "styled-components";
import CardAllCategories from './CardAllCategories'


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
`;

const Content = styled.div`
    max-width: 80%;
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

const Title  = styled.div`
    font-weight: bold;
    ${'' /* margin-bottom: 5px; */}
    padding-bottom: 5px;
    text-align: center;
    margin: auto;
    ${'' /* vertical-align: middle; */}
    ${'' /* display: inline-block;
    position:relative; */}
    ${'' /* background: 'blue'; */}
`;


const AllCategories = ({categories, organizations, match}) => {

    
    console.log(categories)

    return (
        <Container>
        <SiderMenu>
            <Button as="a" href="/">All Organizations</Button>
            <Button as="a" href="/">Fill the form</Button>
        </SiderMenu>
        <Content>
            {categories.map((category) => (
                <CardAllCategories
                    key={category.id}
                    category={category}
                    organizations={organizations}
                    match={match}
                    // id={category.id}
                />
            ))}
        </Content>
        </Container>
    )
}

export default AllCategories;