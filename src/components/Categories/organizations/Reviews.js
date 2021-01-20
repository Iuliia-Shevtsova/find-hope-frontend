import React from 'react'
import styled from 'styled-components'


const StyledContainer = styled.div`
  border-top: 1px solid black;
  border-color: color: #008080;
  margin-top: 20px;
  margin-bottom: 30px;
  padding-top: 20px;
  width: 100%

    h2 {
        color: #008080;
        font-weight: bold;
        min-height: 74px;
        position: relative;
        
        padding: 15px;
        margin: 15px;
    }
`

const Reviews = ({reviews}) => {
    return (
        <StyledContainer>
        <h2>Reviews</h2>
      </StyledContainer>
    )
}

export default Reviews

