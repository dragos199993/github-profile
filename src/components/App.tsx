import React, { useState } from 'react'
import { useGetProfileQuery, User } from '../generated/graphql'
import { Avatar } from './profile/Avatar'
import styled from 'styled-components'
import { Name } from './profile/Name'
import { Username } from './profile/Username'
import { FollowButton } from './profile/FollowButton'
import { Stats } from './profile/Stats'
import { Contact } from './profile/Contact'

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 320px;
  padding: 20px;
  border-radius: 10px;
  margin: 200px auto;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border: 1px solid #e6e6e6;
`

export const App = () => {
  const { data, loading } = useGetProfileQuery()
  const [isFollowing, setIsFollowing] = useState(false)

  if (loading || !data?.search.edges?.length) {
    return <div>Loading...</div>
  }

  const user = data.search.edges[0]?.node as User

  return (
    <StyledWrapper>
      <Avatar src={user.avatarUrl} alt={user.login} />
      <Name>{user.name}</Name>
      <Username>{user.login}</Username>
      <FollowButton onClick={() => setIsFollowing(!isFollowing)}>
        {isFollowing ? 'Unfollow' : 'Follow'}
      </FollowButton>
      <Stats
        stars={user.starredRepositories}
        followers={user.followers}
        following={user.following}
      />
      <Contact
        organization={user.company}
        email={user.email}
        twitter={user.twitterUsername}
      />
    </StyledWrapper>
  )
}
