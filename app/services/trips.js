const trips = [
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
];

export function getTrips() {
  return trips;
}
