import {City, Message, Offer} from './entities'

export interface Response {
  message: Message
}

export interface OffersResponse extends Response {
  offers: Offer[]
}

export interface OfferResponse extends Response {
  offer: Offer
}

export interface CitiesResponse extends Response {
  cities: City[]
}
