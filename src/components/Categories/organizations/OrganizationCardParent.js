import React from 'react'
import styled from 'styled-components'
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
const OrganizationCardParent = ({organization, organizationID, categories_list}) => {
  
  console.log(organization)

  return (
    <StyledRoot>
        <OrganizationCard
          organizationID={organizationID}
          organization={organization}
          categories_list={categories_list}
        />
    </StyledRoot>
  )
}

export default OrganizationCardParent;