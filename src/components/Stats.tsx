import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  FollowerConnection,
  FollowingConnection,
  StarredRepositoryConnection,
} from '../generated/graphql'
import styled from 'styled-components'
import { Follower } from './Follower'
import { Following } from './Following'
import { NumberServices } from '../services/NumberServices'

const StatsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 16px;
  font-size: 14px;
`

type StatsProps = {
  followers: FollowerConnection
  following: FollowingConnection
  stars: StarredRepositoryConnection
}

export const Stats: FC<StatsProps> = ({ following, followers, stars }) => {
  return (
    <StatsWrapper>
      <Follower>
        <FontAwesomeIcon icon="user-group" />{' '}
        <span>{NumberServices.abbreviateNumber(followers.totalCount)}</span>{' '}
        followers
      </Follower>
      <span>·</span>
      <Following>
        <span>{following.totalCount}</span> following
      </Following>
      <span>·</span>
      <Follower>
        <FontAwesomeIcon icon="star" />{' '}
        <span>{NumberServices.abbreviateNumber(stars.totalCount)}</span> stars
      </Follower>
    </StatsWrapper>
  )
}
