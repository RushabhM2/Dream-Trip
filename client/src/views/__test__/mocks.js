const days = {
  1: [{
    business_status: 'OPERATIONAL',
    formatted_address: "The Regent's Park, The Park Office the Storeyard Inner Circle, London NW1 4NR, United Kingdom",
    geometry: { location: [Object], viewport: [Object] },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png',
    name: 'The Royal Parks',
    opening_hours: { open_now: true },
    photos: [[Object]],
    place_id: 'ChIJtVaRHNsadkgRuD-x0eYNJ7g',
    plus_code: {
      compound_code: 'GRHX+8P London, United Kingdom',
      global_code: '9C3XGRHX+8P'
    },
    rating: 4.7,
    reference: 'ChIJtVaRHNsadkgRuD-x0eYNJ7g',
    types: ['park', 'point_of_interest', 'establishment'],
    user_ratings_total: 167,
    day: 1,
    inMyList: true
  },
  {
    business_status: 'OPERATIONAL',
    formatted_address: 'The Old Police House Hyde Park, London W2 2UH, United Kingdom',
    geometry: { location: [Object], viewport: [Object] },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png',
    id: '45bf5bfed2c45956c870d483587b6b2657e8a6af',
    name: 'The Royal Parks',
    opening_hours: { open_now: true },
    photos: [[Object]],
    place_id: 'ChIJD7QNyUkFdkgRBsgqLrVuxmQ',
    plus_code: {
      compound_code: 'GR5M+6V London, United Kingdom',
      global_code: '9C3XGR5M+6V'
    },
    rating: 4.5,
    reference: 'ChIJD7QNyUkFdkgRBsgqLrVuxmQ',
    types: ['park', 'point_of_interest', 'establishment'],
    user_ratings_total: 74,
    day: 1,
    inMyList: true
  }],

  2: [
    {
      business_status: 'OPERATIONAL',
      formatted_address: '52 Mulgrave Rd, London NW10 1BT, United Kingdom',
      geometry: { location: [Object], viewport: [Object] },
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png',
      name: 'Gladstone Park',
      opening_hours: { open_now: true },
      photos: [[Object]],
      place_id: 'ChIJ99IK4v8QdkgRZNGsdKK0pb8',
      plus_code: {
        compound_code: 'HQ46+Q8 London, United Kingdom',
        global_code: '9C3XHQ46+Q8'
      },
      rating: 4.5,
      reference: 'ChIJ99IK4v8QdkgRZNGsdKK0pb8',
      types: [
        'park',
        'tourist_attraction',
        'point_of_interest',
        'establishment'
      ],
      user_ratings_total: 2174,
      day: 2,
      inMyList: true
    },
    {
      business_status: 'OPERATIONAL',
      formatted_address: 'Millbank, London SW1P 3JA, United Kingdom',
      geometry: { location: [Object], viewport: [Object] },
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png',
      id: 'db4c89034776b7a8445313e5a6f86ccbf5956cd2',
      name: 'Victoria Tower Gardens South',
      opening_hours: { open_now: true },
      photos: [[Object]],
      place_id: 'ChIJg2hXyukEdkgRn3TPclh3dFs',
      plus_code: {
        compound_code: 'FVWF+QX London, United Kingdom',
        global_code: '9C3XFVWF+QX'
      },
      rating: 4.5,
      reference: 'ChIJg2hXyukEdkgRn3TPclh3dFs',
      types: [
        'park',
        'tourist_attraction',
        'point_of_interest',
        'establishment'
      ],
      user_ratings_total: 2589,
      day: 2,
      inMyList: true
    }
  ]
}

const reordered = [
  {
    business_status: 'OPERATIONAL',
    formatted_address: 'The Old Police House Hyde Park, London W2 2UH, United Kingdom',
    geometry: { location: [Object], viewport: [Object] },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png',
    id: '45bf5bfed2c45956c870d483587b6b2657e8a6af',
    name: 'The Royal Parks',
    opening_hours: { open_now: true },
    photos: [[Object]],
    place_id: 'ChIJD7QNyUkFdkgRBsgqLrVuxmQ',
    plus_code: {
      compound_code: 'GR5M+6V London, United Kingdom',
      global_code: '9C3XGR5M+6V'
    },
    rating: 4.5,
    reference: 'ChIJD7QNyUkFdkgRBsgqLrVuxmQ',
    types: ['park', 'point_of_interest', 'establishment'],
    user_ratings_total: 74,
    day: 1,
    inMyList: true
  },
  {
    business_status: 'OPERATIONAL',
    formatted_address: "The Regent's Park, The Park Office the Storeyard Inner Circle, London NW1 4NR, United Kingdom",
    geometry: { location: [Object], viewport: [Object] },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png',
    name: 'The Royal Parks',
    opening_hours: { open_now: true },
    photos: [[Object]],
    place_id: 'ChIJtVaRHNsadkgRuD-x0eYNJ7g',
    plus_code: {
      compound_code: 'GRHX+8P London, United Kingdom',
      global_code: '9C3XGRHX+8P'
    },
    rating: 4.7,
    reference: 'ChIJtVaRHNsadkgRuD-x0eYNJ7g',
    types: ['park', 'point_of_interest', 'establishment'],
    user_ratings_total: 167,
    day: 1,
    inMyList: true
  }]

  const moved = {
    1: [
    {
      business_status: 'OPERATIONAL',
      formatted_address: 'The Old Police House Hyde Park, London W2 2UH, United Kingdom',
      geometry: { location: [Object], viewport: [Object] },
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png',
      id: '45bf5bfed2c45956c870d483587b6b2657e8a6af',
      name: 'The Royal Parks',
      opening_hours: { open_now: true },
      photos: [[Object]],
      place_id: 'ChIJD7QNyUkFdkgRBsgqLrVuxmQ',
      plus_code: {
        compound_code: 'GR5M+6V London, United Kingdom',
        global_code: '9C3XGR5M+6V'
      },
      rating: 4.5,
      reference: 'ChIJD7QNyUkFdkgRBsgqLrVuxmQ',
      types: ['park', 'point_of_interest', 'establishment'],
      user_ratings_total: 74,
      day: 1,
      inMyList: true
    }],
  
    2: [
      {
        business_status: 'OPERATIONAL',
        formatted_address: "The Regent's Park, The Park Office the Storeyard Inner Circle, London NW1 4NR, United Kingdom",
        geometry: { location: [Object], viewport: [Object] },
        icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png',
        name: 'The Royal Parks',
        opening_hours: { open_now: true },
        photos: [[Object]],
        place_id: 'ChIJtVaRHNsadkgRuD-x0eYNJ7g',
        plus_code: {
          compound_code: 'GRHX+8P London, United Kingdom',
          global_code: '9C3XGRHX+8P'
        },
        rating: 4.7,
        reference: 'ChIJtVaRHNsadkgRuD-x0eYNJ7g',
        types: ['park', 'point_of_interest', 'establishment'],
        user_ratings_total: 167,
        day: 2,
        inMyList: true
      },
      {
        business_status: 'OPERATIONAL',
        formatted_address: '52 Mulgrave Rd, London NW10 1BT, United Kingdom',
        geometry: { location: [Object], viewport: [Object] },
        icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png',
        name: 'Gladstone Park',
        opening_hours: { open_now: true },
        photos: [[Object]],
        place_id: 'ChIJ99IK4v8QdkgRZNGsdKK0pb8',
        plus_code: {
          compound_code: 'HQ46+Q8 London, United Kingdom',
          global_code: '9C3XHQ46+Q8'
        },
        rating: 4.5,
        reference: 'ChIJ99IK4v8QdkgRZNGsdKK0pb8',
        types: [
          'park',
          'tourist_attraction',
          'point_of_interest',
          'establishment'
        ],
        user_ratings_total: 2174,
        day: 2,
        inMyList: true
      },
      {
        business_status: 'OPERATIONAL',
        formatted_address: 'Millbank, London SW1P 3JA, United Kingdom',
        geometry: { location: [Object], viewport: [Object] },
        icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png',
        id: 'db4c89034776b7a8445313e5a6f86ccbf5956cd2',
        name: 'Victoria Tower Gardens South',
        opening_hours: { open_now: true },
        photos: [[Object]],
        place_id: 'ChIJg2hXyukEdkgRn3TPclh3dFs',
        plus_code: {
          compound_code: 'FVWF+QX London, United Kingdom',
          global_code: '9C3XFVWF+QX'
        },
        rating: 4.5,
        reference: 'ChIJg2hXyukEdkgRn3TPclh3dFs',
        types: [
          'park',
          'tourist_attraction',
          'point_of_interest',
          'establishment'
        ],
        user_ratings_total: 2589,
        day: 2,
        inMyList: true
      }
    ]
  }

  module.exports = {days, reordered, moved}