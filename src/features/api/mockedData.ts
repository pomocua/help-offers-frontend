import {CitiesResponse, OfferResponse, OffersResponse} from '../../types/types'

export const apiOffersResponseData: OffersResponse = {
  offers: [
    {
      id: 1,
      phoneNumber: 537157673,
      city: {id: 1, name: 'Warshaw'},
      availablePlaces: 2,
      invitePeriod: 'ONE_MONTH',
      withAnimals: true,
      comment: 'Lorem ipsum dolor sit amet ',
    },
    {
      id: 2,
      phoneNumber: 537157673,
      city: {id: 2, name: 'Dublin'},
      availablePlaces: 2,
      invitePeriod: 'ONE_MONTH',
      withAnimals: true,
      comment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n' +
        'molestiae quas vel si',
    },
    {
      id: 3,
      phoneNumber: 537157673,
      city: {id: 1, name: 'Warshaw'},
      availablePlaces: 2,
      invitePeriod: 'ONE_MONTH',
      withAnimals: false,
      comment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n' +
        'molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n' +
        'numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n' +
        'optio, eaque rerum! Proum ut molestias archi',
    },
    {
      id: 4,
      phoneNumber: 537157673,
      city: {id: 2, name: 'Dublin'},
      availablePlaces: 3,
      invitePeriod: 'FIVE_DAYS',
      withAnimals: true,
      comment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n' +
        'molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n' +
        'numquam blanditiis ',
    },
    {
      id: 5,
      phoneNumber: 537157673,
      city: {id: 2, name: 'Dublin'},
      availablePlaces: 3,
      invitePeriod: 'FIVE_DAYS',
      withAnimals: false,
      comment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n' +
        'molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n' +
        'numquam blanditii',
    },
  ],
  message: {
    code: 'SUCCESS',
    details: 'details',
  },
}

export const apiOfferResponseData: OfferResponse = {
  offer: {
    id: 1,
    phoneNumber: 537157673,
    city: {id: 233, name: 'Warzcawa'},
    availablePlaces: 2,
    invitePeriod: 'ONE_WEEK',
    withAnimals: true,
    comment: 'comment',
  },
  message: {
    code: 'SUCCESS',
    details: 'details',
  },
}

export const apiCitiesResponseData: CitiesResponse = {
  cities: [
    {id: 1, name: 'Warshaw'},
    {id: 2, name: 'Dublin'},
  ],
  message: {
    code: 'SUCCESS',
    details: 'details',
  },
}
