import React from 'react'
import styled from 'styled-components'
import Card from './ReviewCard'

const StyledRoot = styled.div`
  padding: 50px 12px;
  
`
const StyledContainer = styled.div`
  max-width: 550px;
  width: 100%;
  margin: auto;
`

const Parent = ({handleDestroy, handleEdit, title, description, score, id, date, actions}) => {
  // const date = new Date().toLocaleDateString()  
  
  
  const button = 777

  return (

    <StyledRoot>
      <StyledContainer>
        <Card
          handleDestroy={handleDestroy}
          handleEdit={handleEdit}
          title={title}
          description={description}
          score={score}
          id={id}
          actions={actions}
          date={date}
        />
      </StyledContainer>
    </StyledRoot>
  )
}

export default Parent