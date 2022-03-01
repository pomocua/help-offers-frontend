export type InvitationPeriod = 'FIVE_DAYS' | 'ONE_WEEK' | 'ONE_MONTH'
export type Status = 'SUCCESS' | 'PENDING' | 'ERROR'

export interface City {
  id: number
  name: string
}

export interface Offer {
  id: number
  city: City
  phoneNumber: number
  availablePlaces: number
  invitePeriod: InvitationPeriod
  withAnimals: boolean
  comment: string
}

export interface Message {
  code: Status
  details: string
}
