import React from 'react'
import styled from 'styled-components'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Rate } from 'antd';

const StyledContainer = styled.div`
margin-bottom: 15px;
  border: 1px solid lightgrey;
  padding: 25px 12px 18px;
  background: white;
  position: relative;
`
const Title = styled.h2`
padding-top: 20px;
  color: black;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`
const Date = styled.div`
  color: #ccc;
  font-weight: 300;
  margin: 6px 0;
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`
const Description = styled.p`
  color: black;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`
const Actions = styled.div`
  color: #333;
  display: flex;
  align-items: center;
  svg {
    transform: translateY(2px);
    margin-right: 5px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    & button {
      width: 100%;
      margin-bottom: 4px;
      font-size: 0.65rem;
    }
  }
`
const Action = styled.button`
  margin: 0 5px;
  padding: 8px 14px;
  background: rgba(155, 155, 155, 0.2);
  border: 1px solid black;
  color: black;
  cursor: pointer;
  border: 1px solid #fff;
  outline: 0;
  font-weight: 300;
  :hover {
    opacity: 0.8;
  }
  :active {
    background: darkgreen;
  }
`

const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
`
const AvatarWrapper = styled.div`
  margin-right: 12px;
  margin-bottom: -12px;
`

const Options = styled.div`
position:absolute;
right :15px;
top: 20px;
display: flex;
flex-direction: columns;
`

const Icon = styled.button`
  box-shadow: none;
  border-radius: 4px;
  margin: 0 4px;
  i {
    font-size: 18px;
  }

  i:hover {
    cursor: pointer;
  }
` 

const Card = ({
  handleDestroy, handleEdit, title, description, score, id, date, 
  comments, likes, views, actions,
}) => {

  console.log(actions)
  return (
    <StyledContainer>
    <RatingContainer>
        <AvatarWrapper> 
            <Avatar size="medium" icon={<UserOutlined />} />
        </AvatarWrapper>
        <Rate disabled value={score} />
    </RatingContainer>

    <Title>{title}</Title>
    <Date>{date}</Date>
    <Description>{description}</Description>

    <Options>
      <Icon onClick={ e => handleDestroy(id, e)}>
        <i className="fa fa-trash"></i>
      </Icon>
      <Icon onClick={ e => handleEdit(title, description, id, e)}>
        <i className="fa fa-pencil"></i>
      </Icon>
    </Options>


    <Actions>
      {actions.map(({ label }) => (
        <Action>{label}</Action>
      ))}
    </Actions>
  </StyledContainer>
  )
  
}
export default Card