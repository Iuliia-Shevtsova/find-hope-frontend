import React, {useState} from 'react';
import styled from 'styled-components';
// import { List, Avatar } from 'antd';
import { Link } from 'react-router-dom';
// import { Card, Col, Row } from 'antd';
import { Card } from 'antd';
import 'antd/dist/antd.css';
// import { ThemeProvider } from "styled-components";
import CardAllCategories from './CardAllCategories'

// const categories = [
//     {
//         id: 1,
//         name: 'Legal Services',
//         img: ''
//     },
//     {
//         id: 2,
//         name: 'Health',
//         img: ''
//     },
//     {
//         id: 3,
//         name: 'Education',
//         img: ''
//     },
//     {
//         id: 4,
//         name: 'Job',
//         img: ''
//     },
//     {
//         id: 5,
//         name: 'Food Services',
//         img: ''
//     },
//     {
//         id: 6,
//         name: 'English classes',
//         img: ''
//     },

// ]

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
    width: 30%;
`;

const Content = styled.div`
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



const gridStyle = {
    width: '30%',
    textAlign: 'center',
    // margin: '10px',
    padding: '0px',
    flexDirection: 'row',
    width: '300px', 
    height: '300px', 
    margin: '20px',
    
};

const CardItem  = styled.div`
    width: '30%';
    textAlign: 'center';
    margin: '10px';
    padding: '0px';
    flexDirection: 'row';
    width: '300px'; 
    height: '300px'; 
    margin: '20px';
    background: white;
`;

const StyledRoot = styled.div`
  padding: 50px 12px;
`
const StyledContainer = styled.div`
  max-width: 80%;
  width: 100%;
  margin: auto;
  display: flex;
    flex-wrap: wrap;
` 

const AllCategories = ({categories}) => {
    return (
        
        <Container>
        <SiderMenu>
            <Button as="a" href="/">All Organizations</Button>
            <Button as="a" href="/">Fill the form</Button>
        </SiderMenu>
        <Content>
            {categories.map((category) => (
                <CardAllCategories
                    name={category.name}
                    id={category.id}
                />
            ))}
        </Content>
        </Container>
    )
}

export default AllCategories;