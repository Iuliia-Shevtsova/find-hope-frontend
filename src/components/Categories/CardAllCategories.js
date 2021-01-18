import React from 'react'
import { Route } from 'react-router-dom';
import styled from 'styled-components'
// import Category from './Category';

const StyledContainer = styled.div`
    padding: 25px 12px 18px;
    background-color: ${props => props.cardColor};
    margin: 20px;
    width: 220px;
    height: 220px;
    display: flex;

    :hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`

const AButton = styled.button`
    color: #fff;
    font-weight: 500;
    font-size: 1.5em;
    text-decoration: none;
    text-align: center;
    display: block;
    vertical-align: baseline;
    margin: auto;

    img {
        display: block;
        margin: 0 auto 10px;
        width: 120px;
    }

    :hover {
        color: #fff;
        opacity: 0.8;
    }

    @media (max-width: 500px) {
        font-size: 1rem;
    }
`

// const Description = styled.p`
//     color: #fff;
//     font-weight: 300;
//     @media (max-width: 500px) {
//         font-size: 0.75rem;
//     }
// `

// const Title = styled.h2`
//     color: #fff;
//     font-weight: 500;
//     text-align: center;
//     align-self: center;
//     margin: auto;
//     @media (max-width: 500px) {
//         font-size: 1rem;
//     }
// `

const imgUrl = (id) => require(`./img/${id}.png`).default;

const CardAllCategories = ({ category, organizations, match}) => {

    const changeColor = (param) =>  {
        switch(param) {
            case 1:
                return '#CD853F'
            case 2:
                return '#4682B4'
              case 3: 
                return '#2E8B57'
              case 4:
                return '#4FB69F'
              case 5:
                return '#BC8F8F'
              case 6:
                return '#CD5C5C'

        }
    };

        return ( 
            <StyledContainer cardColor={changeColor(category.id)}>
                <AButton 
                    as="a" 
                    href={`category/${category.id}/organizations`} 
                    alt={''}
                >
                    <img src={imgUrl(category.id)}/>
                    {category.name}
                </AButton>

                 {/* <Route path={`${match.url}/${category.id}`} component={Category} /> */}
                {/* <Route 
                    path={`${match.path}/${category.id}`}
                    render={props => (
                    <Category {...props} category={category} organizations={organizations}/>
                    )}
                /> */}
            </StyledContainer>
            
               
        )    
    };

export default CardAllCategories;