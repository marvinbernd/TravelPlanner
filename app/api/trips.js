import client from './client';

const endpoint = '/trips';

const getTrips = () => client.get(endpoint);

const addTrip = (trip, onUploadProgress) => {
  const data = new FormData();

  data.append('title', trip.title);
  data.append('start', trip.start);
  data.append('end', trip.end);
  data.append('image', {
    fileName: 'chile',
  });

  console.log(data);

  return client.post(endpoint, trip, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

export default {
  getTrips,
  addTrip,
};
