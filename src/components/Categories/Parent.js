import React from 'react'
import styled from 'styled-components'
// import { FaCommentAlt, FaThumbsUp, FaRegEye } from 'react-icons/fa'
// import Card from './Card'
import CardAllCategories from './CardAllCategories'

const categories = [
    {
        id: 1,
        name: 'Legal Services',
        img: ''
    },
    {
        id: 2,
        name: 'Health',
        img: ''
    },
    {
        id: 3,
        name: 'Education',
        img: ''
    },
    {
        id: 4,
        name: 'Job',
        img: ''
    },
    {
        id: 5,
        name: 'Food Services',
        img: ''
    },
    {
        id: 6,
        name: 'English classes',
        img: ''
    },

]

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
const Parent = () => { 
  return (
    <StyledRoot>
      <StyledContainer>
      {categories.map((category) => (
        <CardAllCategories
        name={category.name}
        id={category.id}
        />
      ))}
        
      </StyledContainer>
    </StyledRoot>
  )
}
export default Parent