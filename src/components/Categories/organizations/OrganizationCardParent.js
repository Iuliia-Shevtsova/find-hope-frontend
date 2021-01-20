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
const OrganizationCardParent = ({organization}) => {
  
  console.log(organization)

  return (
    <StyledRoot>
        <OrganizationCard
          name={organization.name}
          address={organization.address}
          website={organization.website}
          facebook={organization.facebook}
          twitter={organization.twitter}
          avg_score={organization.avg_score}
          reviews={organization.reviews_list}
        />
    </StyledRoot>
  )
}

export default OrganizationCardParent;