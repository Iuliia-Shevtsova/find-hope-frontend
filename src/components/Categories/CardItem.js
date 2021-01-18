import React from 'react';
import styled from 'styled-components';
import { Card } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

const Title  = styled.div`
    font-weight: bold;
    border-bottom: double; 
    margin-bottom: 5px;
    padding-bottom: 5px;
`
const Ul  = styled.div`
    list-style-type: circle;
    text-align: left; 
    padding-left: 20px;
    padding-bottom: 0px;
    margin-bottom: 10px;
    margin-top: 10px;

    p {
        font-size: 1em;
        font-weight: bold;
        padding-bottom: 0px;
        margin-bottom: 0px;
        
    }
`
const gridStyle = {
    // width: 'auto',
    width: '30%',
    textAlign: 'center',
    margin: '10px',
    padding: '0px',
    flexDirection: 'row',
    // display: 'table-cell',
  
    // flexBasis: `${theme}`,
    // height: '0',
  
};

const CardItem = ({organization, categoryID}) => {
    return ( 
        <Card.Grid  style={gridStyle}>
            <Card>
            <Title>
                {organization.name} 
            </Title>
            <Ul>
                <p>Services provided:</p>
                {organization.address}
                {/* {organization.services.map((service, index) => (
                    <li key={index}>{service.name}</li>
                ))} */}
            </Ul>
                <div>
                <Link to={`/category/${categoryID}/organizations/${organization.id}`}>More</Link>
                    {/* <a href="/categories/1" >More</a> */}
                </div>
            </Card>
        </Card.Grid>
    )
    
}

export default CardItem;
