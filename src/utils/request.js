import axios from 'axios';
import Config from 'react-native-config';
import { WEB_ENV } from '@app/config';

export const instance = axios.create({
  baseURL: WEB_ENV ? process.env.API_URL : Config.API_URL,
});

export default instance.request;
