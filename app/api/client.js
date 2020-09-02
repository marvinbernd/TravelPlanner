import { create } from 'apisauce';

const apiClient = create({
  baseURL: 'http://localhost:3000/api',
});

export default apiClient;
