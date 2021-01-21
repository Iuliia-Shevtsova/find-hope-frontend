import React from 'react'
import styled from 'styled-components'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Rate } from 'antd';

const Card = styled.div`
  border-radius: 4px;
  border: 1px solid #E6E6E6;
  padding: 20px;
  margin: 0px 0px 20px 0px;
  position: relative;
  margin-right: 12px;
`
const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
`
const AvatarWrapper = styled.div`
  margin-right: 12px;
  margin-bottom: -12px;

`
const Title = styled.div`
  padding: 20px 0px 0px 0px;
  font-family: 'Poppins-Bold';
  font-size: 18px;
`

const Description = styled.div`
  padding: 0 0 20px 0;
  font-size: 14px;
`
const Options = styled.div`
position:absolute;
right :15px;
top: 15px;
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

const Review = ({handleDestroy, handleEdit, title, description, score, id}) => {

    console.log(score)

    return (
        <Card>
            <RatingContainer>
                <AvatarWrapper> 
                    <Avatar size="small" icon={<UserOutlined />} />
                </AvatarWrapper>
                <Rate disabled defaultValue={score} />
            </RatingContainer>
            <Title>
                {title}
            </Title>
            <Description>
                {description}
            </Description>
            <Options>
                <Icon onClick={ e => handleDestroy(id, e)}>
                  <i className="fa fa-trash"></i>
                </Icon>
                <Icon onClick={ e => handleEdit(title, description, id, e)}>
                  <i className="fa fa-pencil"></i>
                </Icon>
            </Options>
        </Card>
    )
}

export default Review