import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

const Field = styled.div`
  padding-top: 5px;
  font-size: 14px;

  & a {
    color: #000;
    text-decoration: none;
  }

  & span {
    padding-left: 10px;
  }
`

type ContactProps = {
  organization: string | undefined | null
  email: string | undefined | null
  twitter: string | undefined | null
}

export const Contact: FC<ContactProps> = ({ organization, email, twitter }) => {
  return (
    <div>
      {organization && (
        <Field>
          <FontAwesomeIcon icon="building" /> <span>{organization}</span>
        </Field>
      )}
      {email && (
        <Field>
          <a href={`mailto:${email}`}>
            <FontAwesomeIcon icon="envelope" /> <span>{email}</span>
          </a>
        </Field>
      )}
      {twitter && (
        <Field>
          <a href={`https://twitter.com/${twitter}`}>
            <FontAwesomeIcon icon={['fab', 'twitter']} /> <span>{twitter}</span>
          </a>
        </Field>
      )}
    </div>
  )
}
