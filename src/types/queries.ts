import {City, InvitationPeriod} from './entities'

export interface FilterOffersQueryObject {
  city?: City
  availablePlaces?: number
  invitePeriod?: InvitationPeriod
  withAnimals?: boolean
}
