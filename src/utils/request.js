import axios from 'axios';
import Config from 'react-native-config';
import { Platform } from 'react-native';

export const Authorization = '';

export const instance = axios.create({
  baseURL: Platform.OS === 'web' ? process.env.API_URL : Config.API_URL,
});

export default instance.request;
