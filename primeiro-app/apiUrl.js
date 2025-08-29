import { Platform } from 'react-native';

const PUBLIC_API_URL = 'https://pokedex-api-gito.onrender.com';
const LOCAL_API_URL =
  Platform.OS === 'android' ? 'http://10.0.2.2:3000' : 'http://localhost:3000';

export const getApiBaseUrl = () => (__DEV__ ? LOCAL_API_URL : PUBLIC_API_URL);