import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8000', // Altere para a URL do seu backend FastAPI
});

export function setAuthToken(token: string | null) {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
}
