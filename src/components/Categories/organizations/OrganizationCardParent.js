import React from 'react'
import styled from 'styled-components'
import { FaCommentAlt, FaThumbsUp, FaRegEye } from 'react-icons/fa'
import OrganizationCard from './OrganizationCard2'

const StyledRoot = styled.div`
    margin: auto;
    overflow: hidden;
    ${'' /* margin-top: 6rem; */}
    margin-bottom: 3rem;
    padding: 30px;
    ${'' /* background: blue; */}
    width: 100%;
`
// const StyledContainer = styled.div`
//   ${'' /* width: 100px; */}
//   width: 100%;
//   margin: auto;
// `

const OrganizationCardParent = ({organization}) => {
  const date = new Date().toLocaleDateString()  
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
          <FaThumbsUp /> 242 Likes
        </>
      ),
      onClick: onLikesClick,
    },
    {
      label: (
        <>
          <FaRegEye /> 187288 Views
        </>
      ),
      onClick: onViewsClick,
    },
  ]  
  
  console.log(organization)

  return (
    <StyledRoot>
      {/* <StyledContainer> */}
        <OrganizationCard
          // organization = {organization}
          name={organization.name}
          address={organization.address}
          website={organization.website}
          facebook={organization.facebook}
          twitter={organization.twitter}
          avg_score={organization.avg_score}
          reviews={organization.reviews_list}
          actions={buttons}
        />
      {/* </StyledContainer> */}
    </StyledRoot>
  )
}

export default OrganizationCardParent;