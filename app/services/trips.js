/* const trips = [
  {
    title: 'December 2019',
    data: [
      {
        id: 5,
        title: 'Chile',
        start: new Date('2019-12-26'),
        end: new Date('2019-01-06'),
        startString: 'Dec 26',
        endString: 'Jan 06',
        image: require('../assets/images/chile.jpg'),
      },
    ],
  },
  {
    title: 'December 2020',
    data: [
      {
        id: 1,
        title: 'Mexico',
        start: new Date('2020-12-26'),
        end: new Date('2021-01-06'),
        startString: 'Dec 26',
        endString: 'Jan 06',
        image: require('../assets/images/tulum.jpg'),
        items: [
          {
            id: 1,
            date: new Date('2020-12-26T12:00:00'),
            type: 'flight',
            arrival: 'FRA',
            depature: 'MIA',
            flightNumber: 'LH1223',
            arrival: new Date('2020-12-26T18:45:00'),
            arrivalTimeZone: 'GMT-4',
          },
          {
            id: 2,
            date: new Date('2020-12-27T12:00:00'),
            type: 'flight',
            arrival: 'FRA',
            depature: 'MIA',
            flightNumber: 'LH1223',
            arrival: new Date('2020-12-26T18:45:00'),
            arrivalTimeZone: 'GMT-4',
          },
        ],
      },
    ],
  },
  {
    title: 'February 2021',
    data: [
      {
        id: 2,
        title: 'Bali',
        start: new Date('2020-12-26'),
        end: new Date('2021-01-06'),
        startString: 'Dec 26',
        endString: 'Jan 06',
        image: require('../assets/images/bali.jpg'),
      },
      {
        id: 3,
        title: 'Amsterdam',
        start: new Date('2020-12-26'),
        end: new Date('2021-01-06'),
        startString: 'Dec 26',
        endString: 'Jan 06',
        image: require('../assets/images/amsterdam.jpg'),
      },
    ],
  },
  {
    title: 'December 2021',
    data: [
      {
        id: 6,
        title: 'Chile',
        start: new Date('2019-12-26'),
        end: new Date('2019-01-06'),
        startString: 'Dec 26',
        endString: 'Jan 06',
        image: require('../assets/images/chile.jpg'),
        draft: true,
      },
    ],
  },
]; */

const trips = [
  {
    id: 1,
    title: 'Mexico',
    start: new Date('2020-12-26'),
    end: new Date('2021-01-06'),
    dates: [
      new Date('2020-12-26'),
      new Date('2020-12-27'),
      new Date('2020-12-28'),
      new Date('2020-12-29'),
      new Date('2020-12-30'),
      new Date('2020-12-31'),
      new Date('2021-01-01'),
      new Date('2020-01-02'),
      new Date('2020-01-03'),
      new Date('2020-01-04'),
      new Date('2020-01-05'),
      new Date('2020-01-06'),
    ],
    startString: 'Dec 26',
    endString: 'Jan 06',
    image: require('../assets/images/tulum.jpg'),
    items: [
      {
        id: 1,
        date: new Date('2020-12-26T12:00:00'),
        type: 'airplane',
        arrivalAirport: 'FRA',
        depatureAirport: 'MIA',
        flightNumber: 'LH1223',
        arrival: new Date('2020-12-26T18:45:00'),
        arrivalTimeZone: 'GMT-4',
      },
      {
        id: 2,
        date: new Date('2020-12-27T15:00:00'),
        type: 'hotel',
        title: 'The Betsy Hotel',
      },
      {
        id: 3,
        date: new Date('2020-12-27T19:00:00'),
        type: 'silverware',
        title: 'Nobu Miami Beach',
      },
    ],
  },
  {
    id: 2,
    title: 'Bali',
    start: new Date('2021-02-08'),
    end: new Date('2021-02-22'),
    startString: 'Feb 08',
    endString: 'Feb 22',
    image: require('../assets/images/bali.jpg'),
  },
  {
    id: 3,
    title: 'Amsterdam',
    start: new Date('2021-02-26'),
    end: new Date('2021-02-28'),
    startString: 'Feb 26',
    endString: 'Feb 28',
    image: require('../assets/images/amsterdam.jpg'),
  },
  {
    id: 4,
    title: 'Chile',
    start: new Date('2019-12-26'),
    end: new Date('2019-01-06'),
    startString: 'Dec 26',
    endString: 'Jan 06',
    image: require('../assets/images/chile.jpg'),
  },
  {
    id: 5,
    title: 'Chile',
    start: new Date('2022-12-26'),
    end: new Date('2022-01-06'),
    startString: 'Dec 26',
    endString: 'Jan 06',
    image: require('../assets/images/chile.jpg'),
    draft: true,
  },
];

export function getTrips() {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  let tripsData = [...trips];
  let refactoredTrips = [];

  tripsData.forEach((trip) => {
    const year = trip.start.getFullYear();
    let month = trip.start.getMonth();
    month = monthNames[month];

    const isSectionAvailable = refactoredTrips.find(
      (s) => s.year === year && s.month === month
    );

    if (isSectionAvailable) {
      refactoredTrips.forEach((s) => {
        if (s.year === year && s.month === month) {
          s.data.push(trip);
        }
      });
    } else {
      refactoredTrips.push({ year, month, data: [trip] });
    }
  });

  return refactoredTrips;
}

export function getTrip(id) {
  return trips.find((trip) => trip.id === id);
}

export function addTrip(trip) {
  trip.id = trips.length + 1;
  trips.push(trip);
}
