import React from 'react'
import {CardContent} from '@mui/material'
import global from '../../../config/constants/helpOffer.json'
import {
  StyledCard,
  StyledHeader,
  StyledPhoneText,
  StyledText,
  StyledAdditionalText,
  StyledPhoneNumber,
} from './styles'
import {Offer} from '../../../types/types'

const Card: React.FC<Offer> = ({
  city,
  withAnimals,
  phoneNumber,
  availablePlaces,
  invitePeriod,
  comment,
}) => {
  return (
    <StyledCard>
      <CardContent>
        <StyledHeader>
          {city.name}, {availablePlaces} мест
        </StyledHeader>
        <StyledText>
          Готовы принять на {global.home.invitePeriod.convert[invitePeriod]}
        </StyledText>
        <StyledText>
          {withAnimals ? `Можно с животными` : `Нельзя с животными `}
        </StyledText>
        <StyledPhoneText>
          Телефон: <StyledPhoneNumber>{phoneNumber}</StyledPhoneNumber>
        </StyledPhoneText>
        <StyledAdditionalText>
          Дополнительная информация: {comment}
        </StyledAdditionalText>
      </CardContent>
    </StyledCard>
  )
}

export default Card
