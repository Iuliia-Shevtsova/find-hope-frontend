import React, { useState } from "react";
import styled from 'styled-components'
import { Rate } from 'antd';


const ReviewWrapper = styled.div`
  background:white;
  padding:20px;
  margin-left: 15px;
  border-radius: 0;
  padding-bottom:80px;
  border-left: 1px solid rgba(0,0,0,0.1);
  height: 100vh;
  padding-top: 10px;
  padding-right: 80px;
`
const ReviewHeadline = styled.div`
  font-size:20px;
  padding: 15px 0;
  font-weight: bold;
  color: black;
`
const Field = styled.div`
  border-radius: 4px;
  input {
    width: 96%;
    min-height:50px;
    border-radius: 4px;
    border: 1px solid #E6E6E6;
    margin: 12px 0;
    padding: 12px;
  }
  
  textarea {
    width: 100%;
    min-height:80px;
    border-radius: 4px;
    border: 1px solid #E6E6E6;
    margin: 12px 0;
    padding: 12px;      
  }
`
const RatingContainer = styled.div`
  text-align: center;
  border-radius: 4px;
  font-size:20px;
  padding: 40px 0 10px 0;
  border: 1px solid #e6e6e6;
  margin: 20px 0;
  padding:20px;
  background: white;
`
const RatingBoxTitle = styled.div`
  font-size: 20px;
  padding-bottom: 20px;
  font-weight: bold;
`

const RatingBox = styled.div`
  background: white;
  display: flex;
  width: 100%;
  justify-content: center;
  overflow: hidden;
  flex-direction: row-reverse;
  position: relative;
`
const SubmitBtn = styled.button`
  color: black;
  background-color: rgba(32,178,170, 0.5);
  border-radius: 4px;   
  padding:12px 12px;  
  border: 1px solid rgba(32,178,170, 0.5);
  width:100%;
  font-size:18px;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  &:hover {
    background: white;
    border-color: rgba(32,178,170, 0.5);
  }
`
const Error = styled.div`
  width: 100%;
  color: rgb(255, 80, 44);
  border: 1px solid rgb(255, 80, 44);
  border-radius: 4px;
  margin-top: 8px;
  text-align:center; 
  padding: 4px;
`

const ReviewForm = ({organization_name, review, handleSubmit, handleChange, handleUdate, setScore, error, isEdit}) =>{

    const [value, setValue] = useState(0);

    // console.log(value)

    const handleChangeValue = (score, e) => {
      // e.preventDefault()
      console.log(score);
      setValue(score);
      setScore(score, )
    };

    return (
        <ReviewWrapper>
            <form 
              onSubmit={ e => 
              (isEdit) ? 
              // handleUdate
              handleUdate(review.title, review.description, review.score, e) 
              : handleSubmit(e)
              }
            >
                <ReviewHeadline>Add Your Review</ReviewHeadline>
                <Field>
                    <input onChange={e => handleChange(e)} type="text" name="title" placeholder="Review Title" value={review.title}/>
                </Field>
                <Field>
                    <input onChange={e => handleChange(e)} type="text" name="description" placeholder="Review Description" value={review.description}/>
                </Field>
                <Field>
                    <RatingContainer>
                        <RatingBoxTitle>Rate This Organization</RatingBoxTitle>
                        <RatingBox>
                            <Rate onChange={e => handleChangeValue(e)} value={value} />
                        </RatingBox>
                    </RatingContainer>
                </Field>
                <SubmitBtn type="Submit">
                {isEdit ? "Udate Review" : "Create Review"}
                  {/* Create Review */}
                </SubmitBtn>
                { 
                    error && 
                    <Error>{error}</Error>
                }
            </form>
        </ReviewWrapper>
    )
}

export default ReviewForm