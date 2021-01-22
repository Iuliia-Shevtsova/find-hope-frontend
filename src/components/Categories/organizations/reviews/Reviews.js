import React, { useState, useEffect, Fragment } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Card from './ReviewCard'
import ReviewForm from './ReviewForm'
import Header from './Header'
import { FaCommentAlt, FaThumbsUp, FaRegEye } from 'react-icons/fa'

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

const Column = styled.div`
  background: #fff; 
  max-width: 50%;
  width: 50%;
  float: left; 
  height: 100vh;
  overflow-x: scroll;
  overflow-y: scroll; 
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  &:last-child {
    ${'' /* background: black; */}
    border: 1px solid rgba(255,255,255,0.5);
  }
`

const Main = styled.div`
  padding-left: 20px;
`

const Reviews = ({ organizationID, organization_name}) => {
  // const date = new Date().toLocaleDateString('en-US');
  const date = new Date().toLocaleDateString('en-GB');
  console.log(date)

  const [reviews, setReviews] = useState([])
  const [review, setReview] = useState({ title: '', description: '', score: '', date: date,  })
  const [error, setError] = useState('')
  const [isEdit, setIsEdit] = useState(false)
  const [EditID, setEditID] = useState(0)
  

  let total = 0;
  let average = 0;
  let newReviews;



  useEffect( () => {
    getReviews();
  }, [reviews.length])

  const getReviews = () => {
    axios.get(`http://localhost:3000/organizations/${organizationID}/reviews`)
    .then(response => {
      console.log(response);
      setReviews(response.data)
    })
    .catch(error => console.log('api errors:', error))
  }

  console.log(reviews.length)
console.log(reviews)
  
  const handleSubmit = (e) => {
    e.preventDefault()
  
    const organization_id = parseInt(organizationID)

    const lastReview = {
      title: review.title, 
      description: review.description, 
      score: review.score, 
      date: date,
      organization_id: organization_id,
    }
    console.log(review)
    console.log(lastReview)

    axios.post(`http://localhost:3000/reviews`, lastReview)
    .then(response => {
      console.log(response);
      setReviews([...reviews, response.data])
      setReview({ title: '', description: '', score: 0 })
      setError('')
    })
    .catch(error => console.log('api errors:', error))
  }

  const handleChange = (e) => {
    e.preventDefault()
    setReview({
      ...review,
      [e.target.name]: e.target.value,
    });
  }

  const handleUdate = (title, description, score,e) => {
    e.preventDefault()
    setIsEdit(false)
    const organization_id = parseInt(organizationID)

    const currentReview = {
      title: title, 
      description: description, 
      score: score, 
      date: date,
      organization_id: organization_id,
    }

    axios.patch(`http://localhost:3000/reviews/${EditID}`, currentReview)
    .then(response => {
      console.log(response);
      setReviews([...reviews, response.data])
      // setReviews(reviews.filter(p => p.id == id))

      setReview({ title: '', description: '', score: '' })
      setError('')
    })
    .catch(error => console.log('api errors:', error))

  }

  const handleEdit = (title, description, id, e) => {
    e.preventDefault()
    setIsEdit(true);
    setEditID(id);
    setReview({
      ...review,
      title: title,
      description: description,
    });
  }

  const filterReviews= (id) => {
    setReviews( reviews.filter(p => p.id !== id));
  }

  const handleDestroy = (id, e) => {
    e.preventDefault()
    
    axios.delete(`http://localhost:3000/reviews/${id}`)
    .then( (data) => {
      filterReviews(id)
      console.log(data)
    })
    .catch(error => console.log('api errors:', error))
  }

  const setScore = (value, e) => {
    setReview({
      ...review,
      score: value,
    });
  }

  const onCommentClick = () => alert('You clicked comments')
  const onLikesClick = () => alert('You clicked comments')
  const onViewsClick = () => alert('You clicked comments')  
  const buttons = [
    {
      label: (
        <>
          <FaCommentAlt /> 0 Comments
        </>
      ),
      onClick: onCommentClick,
    },
    {
      label: (
        <>
          <FaThumbsUp /> 24 Likes
        </>
      ),
      onClick: onLikesClick,
    },
    {
      label: (
        <>
          <FaRegEye /> 18 Views
        </>
      ),
      onClick: onViewsClick,
    },
  ]  


  if (reviews && reviews.length > 0) {
    total = reviews.reduce((total, review) => total + review.score, 0)
    average = total > 0 ? (parseFloat(total) / parseFloat(reviews.length)) : 0

    newReviews = reviews.map( (review, index) => {
      return (
        <Card 
          key={index}
          id={review.id}
          handleDestroy={handleDestroy}
          title={review.title}
          description={review.description}
          score={review.score}
          handleEdit={handleEdit} 
          date={review.date}
          actions={buttons}
        />

      )
    })  
  }
  
  
  console.log(reviews)
  console.log(average)
  console.log(average)

    return (
        <StyledContainer>
        <h2>Reviews</h2>
        <Fragment>
          <Column>
            <Main>
              <Header 
                reviews={reviews}
                average={average}
                total={total} 
              />
              {newReviews}
            </Main>
          </Column>
          <Column>
            <ReviewForm
              organization_name={organization_name}
              review={review}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              handleUdate={handleUdate}
              setScore={setScore}
              error={error}
              isEdit={isEdit}
            />
          </Column>
        </Fragment>
      </StyledContainer>
    )
}

export default Reviews

