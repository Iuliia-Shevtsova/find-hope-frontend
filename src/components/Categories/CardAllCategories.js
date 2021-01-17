import React from 'react'
import styled from 'styled-components'


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

const CardAllCategories = ({ name, id, }) => {

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
            <StyledContainer cardColor={changeColor(id)}>
                {/* <Title>{name}</Title> */}
                <AButton as="a" href={`/categories/${id}`} alt={name}><img src={imgUrl(id)}/>{name}</AButton>
            </StyledContainer>
        )    
    };

export default CardAllCategories;