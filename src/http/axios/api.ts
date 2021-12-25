import axios from 'axios';
import { Environment } from '@/config/environment';

export const api = axios.create({
  baseURL: Environment.apiUrl(),
  timeout: 10000,
});
