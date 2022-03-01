import React from 'react'
import {Content} from '../../Content'
import {StyledContainer} from './styles'

const PageLayout = ({children}) => {
  return (
    <StyledContainer maxWidth="lg">
      <Content>{children}</Content>
    </StyledContainer>
  )
}

export default PageLayout
