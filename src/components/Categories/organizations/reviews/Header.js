import React from 'react'
import styled from 'styled-components'
import { Rate } from 'antd';

const Wrapper = styled.div`
  padding: 20px 100px 50px 0px;
  font-size:30px;
`;

const UserReviewCount = styled.div`
  font-size: 18px;
  padding:10px 0;
`

const ScoreOutOf = styled.div`
  padding-top: 12px;
  font-size: 18px;
  font-weight: bold;
`
const Header = ({reviews, average}) => {
  console.log(average)

  // const score = (average / 5) * 100
    return (
        <Wrapper>
            <div>
                <UserReviewCount>
                    <span className="review-count">{reviews ? reviews.length : 0}</span> user reviews
                </UserReviewCount>
                <Rate disabled defaultValue={average} />
                <ScoreOutOf>{average.toFixed(1)} out of 5 stars</ScoreOutOf>       
            </div>
        </Wrapper>
    )
}

export default Header;